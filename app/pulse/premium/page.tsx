"use client";
import Link from "next/link";
import { useState } from "react";

const planes = [
  { name: "Free", precio: "0", periodo: "", features: ["10 rutinas basicas", "Seguimiento basico", "Coach IA (5 mensajes/dia)"], limit: true },
  { name: "Pro", precio: "9.99", periodo: "/mes", features: ["Rutinas ilimitadas", "Coach IA sin limites", "Analisis avanzado", "Sin publicidad", "Planes personalizados"], popular: true },
  { name: "Elite", precio: "19.99", periodo: "/mes", features: ["Todo lo de Pro", "Sesion mensual con entrenador real", "Plan nutricional personalizado", "Acceso anticipado a funciones", "Comunidad privada elite"], top: true },
];

export default function Premium() {
  const [selected, setSelected] = useState("");
  const [done, setDone] = useState(false);

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
          <Link href="/pulse" className="text-sm" style={{ color: "rgba(245,245,245,0.4)" }}>← Volver</Link>
        </nav>
      </header>
      <div className="pt-28 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          {!done ? (
            <>
              <div className="text-center mb-16">
                <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: "#4A9EFF" }}>Planes</p>
                <h1 className="text-5xl font-bold mb-4" style={{ letterSpacing: "-0.03em" }}>
                  Elige tu nivel
                </h1>
                <p className="text-lg" style={{ color: "rgba(245,245,245,0.4)" }}>Sin compromisos. Cancela cuando quieras.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {planes.map((p) => (
                  <div key={p.name} onClick={() => !p.limit && setSelected(p.name)}
                    className="rounded-2xl p-8 transition-all cursor-pointer"
                    style={{
                      backgroundColor: selected === p.name ? "rgba(74,158,255,0.06)" : "rgba(255,255,255,0.03)",
                      border: selected === p.name ? "1px solid rgba(74,158,255,0.3)" : p.popular ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.06)",
                      transform: selected === p.name ? "scale(1.02)" : "scale(1)",
                    }}>
                    {p.popular && (
                      <div className="mb-4 inline-flex px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(74,158,255,0.15)", color: "#4A9EFF", border: "1px solid rgba(74,158,255,0.3)" }}>
                        Mas popular
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-1" style={{ letterSpacing: "-0.02em" }}>{p.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold">{p.precio === "0" ? "Gratis" : p.precio + "€"}</span>
                      {p.periodo && <span className="text-sm" style={{ color: "rgba(245,245,245,0.3)" }}>{p.periodo}</span>}
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245,245,245,0.55)" }}>
                          <span style={{ color: "#4A9EFF" }}>✓</span> {f}
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-3 rounded-full text-sm font-semibold transition-all"
                      style={{ backgroundColor: selected === p.name ? "#F5F5F5" : "rgba(255,255,255,0.06)", color: selected === p.name ? "#080808" : "rgba(245,245,245,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {p.limit ? "Plan actual" : selected === p.name ? "Seleccionado" : "Elegir " + p.name}
                    </button>
                  </div>
                ))}
              </div>
              {selected && (
                <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="mb-2 font-semibold">Plan {selected} seleccionado</p>
                  <p className="text-sm mb-6" style={{ color: "rgba(245,245,245,0.4)" }}>En la version real, aqui se procesaria el pago de forma segura.</p>
                  <button onClick={() => setDone(true)} className="px-10 py-4 rounded-full font-semibold transition-all hover:opacity-90 hover:scale-105"
                    style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
                    Completar suscripcion →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">💪</div>
              <h2 className="text-3xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>Bienvenido a Pulse {selected}</h2>
              <p className="mb-8" style={{ color: "rgba(245,245,245,0.4)" }}>Tu primer entrenamiento te esta esperando.</p>
              <Link href="/pulse/rutinas" className="inline-flex px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
                Ir a mis rutinas →
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}