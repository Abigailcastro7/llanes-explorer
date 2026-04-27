"use client";
import Link from "next/link";
import { useState } from "react";

const respuestasIA: Record<string, string> = {
  default: "Entendido. Basandome en los documentos de tu empresa, aqui esta lo que encontre:

He revisado los archivos relevantes en Google Drive y los mensajes de Slack de los ultimos 7 dias. Te puedo dar un resumen detallado o profundizar en algun aspecto especifico.",
  email: "Draft listo para revision:

Asunto: Actualizacion importante del equipo

Hola equipo,

Queria compartir los puntos clave de esta semana...

¿Quieres que lo ajuste en tono o longitud?",
  informe: "Encontre 3 informes recientes en Google Drive:

1. Q1_2026_Resultados.pdf (hace 2 dias)
2. Marketing_Marzo.xlsx (hace 5 dias)
3. Ventas_Semanal.pptx (hace 1 semana)

¿Cual quieres que resuma?",
  reunion: "Revise tu calendario. Tienes disponibilidad:

• Martes 29 Abr: 10:00-11:00 o 16:00-17:00
• Miercoles 30 Abr: Todo el dia libre
• Jueves 1 May: 9:00-10:00

¿Quieres que programe la reunion automaticamente?",
  slack: "Revise los mensajes de Slack de las ultimas 48h. Puntos importantes:

• Maria comento sobre el retraso en el proyecto X
• Carlos pregunto por el presupuesto Q2
• 3 mensajes sin responder en #ventas

¿Quieres que redacte respuestas?",
};

const sugerencias = ["Resume el informe de ayer", "Redacta un email al equipo", "¿Que reuniones tengo esta semana?", "Resumen de Slack de hoy"];

export default function Chat() {
  const [mensajes, setMensajes] = useState([
    { tipo: "quill", msg: "Hola! Soy Quill. Estoy conectado a tu Google Drive, Gmail, Slack y Calendario.

¿En que puedo ayudarte hoy?", fuente: "" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (texto?: string) => {
    const msg = texto || input;
    if (!msg.trim()) return;
    setMensajes(prev => [...prev, { tipo: "user", msg, fuente: "" }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      const lower = msg.toLowerCase();
      let resp = respuestasIA.default;
      if (lower.includes("email") || lower.includes("correo")) resp = respuestasIA.email;
      if (lower.includes("informe") || lower.includes("reporte")) resp = respuestasIA.informe;
      if (lower.includes("reunion") || lower.includes("calendario")) resp = respuestasIA.reunion;
      if (lower.includes("slack") || lower.includes("mensaje")) resp = respuestasIA.slack;
      const fuentes = ["Google Drive", "Gmail", "Slack", "Calendar"];
      const fuente = fuentes[Math.floor(Math.random() * fuentes.length)];
      setMensajes(prev => [...prev, { tipo: "quill", msg: resp, fuente }]);
      setLoading(false);
    }, 1400);
  };

  return (
    <main style={{ backgroundColor: "#080810", color: "#E8E8F0", fontFamily: "system-ui, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-4" style={{ backgroundColor: "rgba(8,8,16,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/quill" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(100,220,150,0.15)", border: "1px solid rgba(100,220,150,0.3)" }}>
              <span className="text-xs font-bold" style={{ color: "#64DC96" }}>Q</span>
            </div>
            <span className="font-semibold">Quill</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#64DC96" }} />
            <span style={{ color: "#64DC96" }}>Conectado · Drive · Gmail · Slack · Calendar</span>
          </div>
          <Link href="/quill/premium" className="px-4 py-2 rounded-full text-xs font-semibold" style={{ backgroundColor: "#64DC96", color: "#080810" }}>Premium</Link>
        </nav>
      </header>

      <div className="flex flex-col" style={{ height: "100vh", paddingTop: "64px" }}>
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            {mensajes.map((m, i) => (
              <div key={i} className={"flex " + (m.tipo === "user" ? "justify-end" : "justify-start")}>
                {m.tipo === "quill" && (
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center mr-3 shrink-0 mt-0.5" style={{ backgroundColor: "rgba(100,220,150,0.12)", border: "1px solid rgba(100,220,150,0.2)" }}>
                    <span className="text-xs font-bold" style={{ color: "#64DC96" }}>Q</span>
                  </div>
                )}
                <div>
                  <div className="px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
                    style={{
                      backgroundColor: m.tipo === "quill" ? "rgba(255,255,255,0.03)" : "rgba(100,220,150,0.08)",
                      color: "rgba(232,232,240,0.8)",
                      border: m.tipo === "quill" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(100,220,150,0.15)",
                      maxWidth: "480px",
                    }}>
                    {m.msg}
                  </div>
                  {m.fuente && (
                    <div className="mt-1.5 ml-1 text-[10px] font-mono" style={{ color: "rgba(100,220,150,0.45)" }}>↗ {m.fuente}</div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center mr-3" style={{ backgroundColor: "rgba(100,220,150,0.12)", border: "1px solid rgba(100,220,150,0.2)" }}>
                  <span className="text-xs font-bold" style={{ color: "#64DC96" }}>Q</span>
                </div>
                <div className="px-4 py-3 rounded-2xl text-sm" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(232,232,240,0.3)" }}>
                  Buscando en tus archivos...
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="px-8 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              {sugerencias.map((s) => (
                <button key={s} onClick={() => handleSend(s)}
                  className="px-3 py-1.5 rounded-full text-xs transition-all hover:border-opacity-40"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", color: "rgba(232,232,240,0.4)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Pregunta algo sobre tu empresa..."
                className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#E8E8F0" }} />
              <button onClick={() => handleSend()}
                className="px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: "#64DC96", color: "#080810" }}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}