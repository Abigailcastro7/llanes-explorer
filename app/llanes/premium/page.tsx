"use client";
import Link from "next/link";
import { useState } from "react";

const planes = [
  {
    name: "Viajero",
    precio: "$9",
    periodo: "/mes",
    popular: false,
    features: ["6 destinos de Paraguay", "3 rutas completas", "Guias en PDF", "Newsletter mensual"],
  },
  {
    name: "Explorer",
    precio: "$19",
    periodo: "/mes",
    popular: true,
    features: ["Todos los destinos", "Todas las rutas de Joel", "Itinerarios dia a dia", "Comunidad privada", "Q&A mensual con Joel", "Tips exclusivos"],
  },
  {
    name: "VIP Joel",
    precio: "$49",
    periodo: "/mes",
    popular: false,
    features: ["Todo lo de Explorer", "Planificacion personalizada", "WhatsApp directo con Joel", "Acceso anticipado", "Descuentos con partners", "Viajes grupales con Joel"],
  },
];

export default function Premium() {
  const [selected, setSelected] = useState("");
  const [paid, setPaid] = useState(false);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#070d0a", color: "#f0f4f2" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "#070d0a", borderBottom: "1px solid rgba(82,183,136,0.1)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/llanes" className="flex items-center gap-3">
            <span className="text-xl">🍀</span>
            <span className="font-semibold" style={{ color: "#f0f4f2" }}>Llanes Explorer</span>
          </Link>
          <Link href="/llanes" className="text-sm transition-colors" style={{ color: "rgba(240,244,242,0.4)" }}>← Volver</Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          {!paid ? (
            <>
              <div className="text-center mb-16">
                <span className="text-4xl">🍀</span>
                <p className="text-xs font-mono tracking-widest uppercase mt-6 mb-4" style={{ color: "rgba(144,224,239,0.5)" }}>Comunidad Premium</p>
                <h1 className="text-4xl font-light mb-4" style={{ color: "#f0f4f2" }}>
                  Viaja como <span className="font-semibold" style={{ color: "#52B788" }}>Joel</span>
                </h1>
                <p className="max-w-md mx-auto" style={{ color: "rgba(240,244,242,0.4)" }}>
                  El contenido que no publica en redes. Rutas reales, tips honestos y una comunidad de viajeros que viajan con intencion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {planes.map((p) => (
                  <div key={p.name} onClick={() => setSelected(p.name)}
                    className="relative rounded-2xl p-8 cursor-pointer transition-all"
                    style={{
                      backgroundColor: selected === p.name ? "rgba(82,183,136,0.08)" : "rgba(255,255,255,0.02)",
                      border: selected === p.name ? "1px solid rgba(82,183,136,0.4)" : p.popular ? "1px solid rgba(82,183,136,0.2)" : "1px solid rgba(82,183,136,0.08)",
                      transform: selected === p.name ? "scale(1.02)" : "scale(1)",
                    }}>
                    {p.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
                        Mas popular
                      </div>
                    )}
                    <h3 className="font-semibold mb-1" style={{ color: "#f0f4f2" }}>{p.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-light" style={{ color: "#52B788" }}>{p.precio}</span>
                      <span className="text-sm" style={{ color: "rgba(240,244,242,0.3)" }}>{p.periodo}</span>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm" style={{ color: "rgba(240,244,242,0.55)" }}>
                          <span style={{ color: "#52B788" }}>✓</span> {f}
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-3 rounded-full text-sm font-medium transition-all"
                      style={{
                        backgroundColor: selected === p.name ? "#2D6A4F" : "transparent",
                        color: selected === p.name ? "#f0f4f2" : "rgba(82,183,136,0.7)",
                        border: "1px solid rgba(82,183,136,0.2)",
                      }}>
                      {selected === p.name ? "✓ Seleccionado" : "Elegir " + p.name}
                    </button>
                  </div>
                ))}
              </div>

              {selected && (
                <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: "rgba(82,183,136,0.05)", border: "1px solid rgba(82,183,136,0.15)" }}>
                  <p className="mb-2" style={{ color: "#f0f4f2" }}>Plan <strong>{selected}</strong> seleccionado</p>
                  <p className="text-sm mb-6" style={{ color: "rgba(240,244,242,0.4)" }}>En la version real, aqui se procesaria el pago de forma segura.</p>
                  <button onClick={() => setPaid(true)} className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
                    style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
                    Completar suscripcion →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🌿</div>
              <h2 className="text-3xl font-light mb-3" style={{ color: "#f0f4f2" }}>Bienvenido a la comunidad</h2>
              <p className="mb-8" style={{ color: "rgba(240,244,242,0.4)" }}>Ya eres parte de la comunidad Premium de Joel Llanes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/llanes/rutas" className="px-6 py-3 rounded-full font-medium transition-all"
                  style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
                  Ver rutas exclusivas →
                </Link>
                <Link href="/llanes/destinos" className="px-6 py-3 rounded-full font-medium transition-all"
                  style={{ border: "1px solid rgba(82,183,136,0.2)", color: "rgba(240,244,242,0.6)" }}>
                  Explorar destinos
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
