"use client";
import Link from "next/link";
import { useState } from "react";

const planes = [
  {
    name: "Viajero",
    precio: "$9",
    periodo: "/mes",
    popular: false,
    features: [
      "Acceso a 6 destinos de Paraguay",
      "3 rutas completas",
      "Guías descargables en PDF",
      "Newsletter mensual de Joel",
    ],
  },
  {
    name: "Explorer",
    precio: "$19",
    periodo: "/mes",
    popular: true,
    features: [
      "Acceso a todos los destinos",
      "Todas las rutas de Joel",
      "Itinerarios día a día",
      "Comunidad privada",
      "Q&A mensual con Joel",
      "Tips exclusivos que no publica en redes",
    ],
  },
  {
    name: "VIP Joel",
    precio: "$49",
    periodo: "/mes",
    popular: false,
    features: [
      "Todo lo de Explorer",
      "Planificación personalizada",
      "Grupo WhatsApp directo con Joel",
      "Acceso anticipado a nuevos destinos",
      "Descuentos con partners exclusivos",
      "Viajes grupales con Joel",
    ],
  },
];

export default function Premium() {
  const [selected, setSelected] = useState("");
  const [paid, setPaid] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a14]">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0a0a14]/80 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/llanes" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#7b5bff] flex items-center justify-center">
              <span className="text-lg">🍀</span>
            </div>
            <span className="text-white font-bold">Llanes Explorer</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <Link href="/llanes/destinos" className="hover:text-white transition-colors">Destinos</Link>
            <Link href="/llanes/rutas" className="hover:text-white transition-colors">Rutas</Link>
            <Link href="/llanes/premium" className="text-white font-medium">Premium</Link>
          </div>
          <Link href="/llanes" className="px-4 py-2 rounded-full border border-white/10 text-white/60 text-sm hover:text-white transition-colors">← Volver</Link>
        </nav>
      </header>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-5xl mb-4">🍀</div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7b5bff]/40 text-[#b094ff] text-xs tracking-widest uppercase mb-6 font-mono">
              ✦ Comunidad Premium de Joel
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Viaja como <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Joel</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Accede a todo el contenido que Joel no publica en redes. Rutas exactas, tips reales y una comunidad de viajeros paraguayos apasionados.</p>
          </div>

          {!paid ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {planes.map((p) => (
                  <div key={p.name}
                    onClick={() => setSelected(p.name)}
                    className={`relative rounded-2xl border p-8 transition-all cursor-pointer ${selected === p.name ? "border-[#7b5bff] scale-105" : "border-white/10 hover:border-white/20"} ${p.popular ? "bg-[#7b5bff]/10" : "bg-[#11111c]"}`}>
                    {p.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7b5bff] text-white text-xs font-semibold whitespace-nowrap">Más popular</div>
                    )}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">{p.precio}</span>
                        <span className="text-white/40">{p.periodo}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="text-[#00D9A0] mt-0.5 shrink-0">✓</span> {f}
                        </div>
                      ))}
                    </div>
                    <button className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${selected === p.name ? "bg-[#7b5bff] text-white" : "border border-white/20 text-white/70 hover:border-[#7b5bff] hover:text-white"}`}>
                      {selected === p.name ? "✓ Seleccionado" : "Elegir " + p.name}
                    </button>
                  </div>
                ))}
              </div>

              {selected && (
                <div className="text-center p-8 rounded-2xl bg-[#11111c] border border-[#7b5bff]/30">
                  <h3 className="text-xl font-bold text-white mb-2">Plan {selected} seleccionado</h3>
                  <p className="text-white/50 mb-6">En la versión real, aquí procesarías el pago de forma segura con tarjeta o transferencia.</p>
                  <button
                    onClick={() => setPaid(true)}
                    className="px-8 py-4 rounded-full bg-[#7b5bff] text-white font-semibold hover:bg-[#6645e6] transition-all hover:scale-105">
                    Completar suscripción →
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center p-12 rounded-2xl bg-[#11111c] border border-[#00D9A0]/30">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Bienvenido a la comunidad!</h3>
              <p className="text-white/50 mb-2">Ya eres parte de la comunidad Premium de Joel Llanes.</p>
              <p className="text-white/30 text-sm mb-8">Recibirás un email con acceso a todos los contenidos exclusivos.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/llanes/rutas" className="px-6 py-3 rounded-full bg-[#7b5bff] text-white font-semibold hover:bg-[#6645e6] transition-colors">
                  Ver rutas exclusivas →
                </Link>
                <Link href="/llanes/destinos" className="px-6 py-3 rounded-full border border-white/10 text-white/70 font-semibold hover:border-white/30 hover:text-white transition-colors">
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
