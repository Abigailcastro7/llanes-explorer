"use client";
import Link from "next/link";
import { useState } from "react";

const mensajesIniciales = [
  { tipo: "coach", msg: "Hola! Soy tu Coach IA de Pulse. Analice tu historial: llevas 3 dias sin entrenar. Te recomiendo empezar suave hoy con una sesion de movilidad." },
  { tipo: "coach", msg: "Cuales son tus objetivos para esta semana?" },
];

export default function Coach() {
  const [mensajes, setMensajes] = useState(mensajesIniciales);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const respuestasIA: Record<string, string> = {
    "default": "Entendido. Basandome en tu nivel actual, te recomiendo 3 series de 12 repeticiones con descanso de 60 segundos entre series. Recuerda mantener la postura correcta.",
    "peso": "Para perder peso, la combinacion ideal es HIIT 3 veces por semana + deficit calorico moderado. Empieza con la rutina HIIT Cardio Blast.",
    "musculo": "Para ganar musculo necesitas sobrecarga progresiva. Te recomiendo Full Body Power 4 veces por semana aumentando el peso cada sesion.",
    "descanso": "El descanso es tan importante como el entrenamiento. Hoy haz solo 20 minutos de movilidad y mañana vuelves fuerte.",
    "dolor": "Si sientes dolor (no agujetas), para inmediatamente. Describe donde te duele y te ajusto la rutina para evitar esa zona.",
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { tipo: "user", msg: input };
    setMensajes(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      const lower = input.toLowerCase();
      let respuesta = respuestasIA["default"];
      if (lower.includes("peso") || lower.includes("adelgazar")) respuesta = respuestasIA["peso"];
      if (lower.includes("musculo") || lower.includes("volumen")) respuesta = respuestasIA["musculo"];
      if (lower.includes("descanso") || lower.includes("cansado")) respuesta = respuestasIA["descanso"];
      if (lower.includes("dolor") || lower.includes("lesion")) respuesta = respuestasIA["dolor"];
      setMensajes(prev => [...prev, { tipo: "coach", msg: respuesta }]);
      setLoading(false);
    }, 1200);
  };

  return (
    <main style={{ backgroundColor: "#080808", color: "#F5F5F5", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(8,8,8,0.85)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/pulse" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F5F5F5" }}>
              <span className="text-black font-black text-sm">P</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Pulse</span>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#4A9EFF" }} />
            <span style={{ color: "#4A9EFF" }}>Coach IA · En linea</span>
          </div>
          <Link href="/pulse/premium" className="px-5 py-2.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>Premium</Link>
        </nav>
      </header>
      <div className="pt-24 pb-0 px-8 min-h-screen flex flex-col">
        <div className="max-w-3xl mx-auto w-full flex flex-col flex-1">
          <div className="py-8 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "rgba(74,158,255,0.1)", border: "1px solid rgba(74,158,255,0.2)" }}>
              <span className="text-2xl">🤖</span>
            </div>
            <h1 className="text-2xl font-bold mb-1" style={{ letterSpacing: "-0.02em" }}>Coach Pulse IA</h1>
            <p className="text-sm" style={{ color: "rgba(245,245,245,0.35)" }}>Tu entrenador personal inteligente. Disponible 24/7.</p>
          </div>
          <div className="flex-1 py-6 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 280px)" }}>
            {mensajes.map((m, i) => (
              <div key={i} className={"flex " + (m.tipo === "user" ? "justify-end" : "justify-start")}>
                {m.tipo === "coach" && (
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center mr-3 shrink-0 mt-0.5" style={{ backgroundColor: "rgba(74,158,255,0.1)", border: "1px solid rgba(74,158,255,0.2)" }}>
                    <span className="text-sm">🤖</span>
                  </div>
                )}
                <div className="max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed"
                  style={{
                    backgroundColor: m.tipo === "coach" ? "rgba(255,255,255,0.04)" : "rgba(74,158,255,0.1)",
                    color: "rgba(245,245,245,0.8)",
                    border: m.tipo === "coach" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(74,158,255,0.2)",
                  }}>
                  {m.msg}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center mr-3" style={{ backgroundColor: "rgba(74,158,255,0.1)" }}>
                  <span className="text-sm">🤖</span>
                </div>
                <div className="px-4 py-3 rounded-2xl text-sm" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(245,245,245,0.4)" }}>
                  Analizando...
                </div>
              </div>
            )}
          </div>
          <div className="py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex gap-2 mb-3 flex-wrap">
              {["Quiero perder peso", "Ganar musculo", "Estoy cansado hoy", "Me duele la espalda"].map((s) => (
                <button key={s} onClick={() => setInput(s)}
                  className="px-3 py-1.5 rounded-full text-xs transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(245,245,245,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Pregunta al Coach IA..."
                className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#F5F5F5" }} />
              <button onClick={handleSend}
                className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}