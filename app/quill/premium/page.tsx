"use client";
import Link from "next/link";
import { useState } from "react";

const planes = [
  { name: "Starter", precio: "0", periodo: "", features: ["1 usuario", "5 integraciones", "100 consultas/mes", "Google Drive y Gmail"], popular: false },
  { name: "Team", precio: "29", periodo: "/mes", features: ["Hasta 10 usuarios", "60+ integraciones", "Consultas ilimitadas", "Acciones automaticas", "Soporte prioritario"], popular: true },
  { name: "Enterprise", precio: "99", periodo: "/mes", features: ["Usuarios ilimitados", "Servidor dedicado", "GDPR completo", "API personalizada", "Manager dedicado"], popular: false },
];

export default function Premium() {
  const [selected, setSelected] = useState("");
  const [done, setDone] = useState(false);

  return (
    <main style={{ backgroundColor: "#080810", color: "#E8E8F0", fontFamily: "system-ui, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(8,8,16,0.9)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/quill" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(100,220,150,0.15)", border: "1px solid rgba(100,220,150,0.3)" }}>
              <span className="text-xs font-bold" style={{ color: "#64DC96" }}>Q</span>
            </div>
            <span className="font-semibold">Quill</span>
          </Link>
          <Link href="/quill" className="text-sm" style={{ color: "rgba(232,232,240,0.3)" }}>← Volver</Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          {!done ? (
            <>
              <div className="text-center mb-16">
                <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: "#64DC96" }}>Planes</p>
                <h1 className="text-5xl font-bold mb-4" style={{ letterSpacing: "-0.04em" }}>Elige tu plan</h1>
                <p className="text-lg" style={{ color: "rgba(232,232,240,0.35)" }}>Sin compromiso. Cancela cuando quieras.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {planes.map((p) => (
                  <div key={p.name} onClick={() => setSelected(p.name)}
                    className="rounded-2xl p-8 cursor-pointer transition-all"
                    style={{
                      backgroundColor: selected === p.name ? "rgba(100,220,150,0.05)" : "rgba(255,255,255,0.02)",
                      border: selected === p.name ? "1px solid rgba(100,220,150,0.25)" : p.popular ? "1px solid rgba(232,232,240,0.1)" : "1px solid rgba(255,255,255,0.05)",
                      transform: selected === p.name ? "scale(1.02)" : "scale(1)",
                    }}>
                    {p.popular && (
                      <div className="mb-4 inline-flex px-3 py-1 rounded-full text-xs font-mono" style={{ backgroundColor: "rgba(100,220,150,0.1)", color: "#64DC96", border: "1px solid rgba(100,220,150,0.2)" }}>
                        Mas popular
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-1" style={{ letterSpacing: "-0.02em" }}>{p.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold">{p.precio === "0" ? "Gratis" : p.precio + "€"}</span>
                      {p.periodo && <span className="text-sm" style={{ color: "rgba(232,232,240,0.3)" }}>{p.periodo}</span>}
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm" style={{ color: "rgba(232,232,240,0.5)" }}>
                          <span style={{ color: "#64DC96" }}>✓</span> {f}
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-3 rounded-full text-sm font-semibold transition-all"
                      style={{ backgroundColor: selected === p.name ? "#64DC96" : "rgba(255,255,255,0.05)", color: selected === p.name ? "#080810" : "rgba(232,232,240,0.4)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      {selected === p.name ? "Seleccionado" : "Elegir " + p.name}
                    </button>
                  </div>
                ))}
              </div>
              {selected && (
                <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="mb-2 font-semibold">Plan {selected} seleccionado</p>
                  <p className="text-sm mb-6" style={{ color: "rgba(232,232,240,0.35)" }}>En la version real, aqui se procesaria el pago.</p>
                  <button onClick={() => setDone(true)} className="px-10 py-4 rounded-full font-semibold transition-all hover:scale-105"
                    style={{ backgroundColor: "#64DC96", color: "#080810" }}>
                    Activar {selected} →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">⚡</div>
              <h2 className="text-3xl font-bold mb-3" style={{ letterSpacing: "-0.03em" }}>Quill {selected} activado</h2>
              <p className="mb-8" style={{ color: "rgba(232,232,240,0.35)" }}>Tu asistente IA esta listo. Configuracion en 5 minutos.</p>
              <Link href="/quill/chat" className="inline-flex px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: "#64DC96", color: "#080810" }}>
                Ir al chat →
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}