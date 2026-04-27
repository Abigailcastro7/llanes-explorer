"use client";
import Link from "next/link";
import { useState } from "react";

export default function LlanesExplorer() {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#070d0a", color: "#f0f4f2" }}>

      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(7,13,10,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(82,183,136,0.1)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍀</span>
            <div>
              <div className="font-semibold" style={{ color: "#f0f4f2" }}>Llanes Explorer</div>
              <div className="text-[10px] tracking-widest uppercase" style={{ color: "#52B788", opacity: 0.7 }}>by Joel Llanes · Paraguay</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/llanes/destinos" style={{ color: "rgba(240,244,242,0.6)" }}>Destinos</Link>
            <Link href="/llanes/cabanas" style={{ color: "rgba(240,244,242,0.6)" }}>Cabanas</Link>
            <Link href="/llanes/rutas" style={{ color: "rgba(240,244,242,0.6)" }}>Rutas</Link>
          </div>
          {isPremium ? (
            <div className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2" style={{ backgroundColor: "rgba(82,183,136,0.15)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)" }}>
              Activo Premium
            </div>
          ) : (
            <button onClick={() => setIsPremium(true)} className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
              Ir a Premium
            </button>
          )}
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80" alt="Paraguay" className="w-full h-full object-cover" style={{ filter: "brightness(0.25) saturate(1.2)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,13,10,0.3) 0%, rgba(7,13,10,0.85) 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-10 font-mono" style={{ border: "1px solid rgba(144,224,239,0.25)", color: "rgba(144,224,239,0.8)", backgroundColor: "rgba(7,13,10,0.4)", backdropFilter: "blur(10px)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#52B788" }} />
            El referente de viajes en Paraguay · 126K seguidores
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6" style={{ color: "#f0f4f2", letterSpacing: "-0.02em" }}>
            Descubre Paraguay<br />
            <span className="font-semibold italic" style={{ color: "#52B788" }}>con Joel</span>
          </h1>
          <p className="text-xl max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "rgba(240,244,242,0.65)" }}>
            Gratis para explorar. Premium para vivir la experiencia completa sin publicidad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/llanes/destinos" className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
              Explorar gratis
            </Link>
            <button onClick={() => setIsPremium(true)} className="px-8 py-4 rounded-full font-medium" style={{ border: "1px solid rgba(240,244,242,0.2)", color: "rgba(240,244,242,0.7)", backgroundColor: "rgba(7,13,10,0.4)", backdropFilter: "blur(10px)" }}>
              Sin publicidad — Premium
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[{ value: "Gratis", label: "Acceso basico" }, { value: "0 anuncios", label: "Con Premium" }, { value: "126K", label: "Comunidad" }].map((s) => (
              <div key={s.label} className="p-4 rounded-2xl text-center" style={{ backgroundColor: "rgba(7,13,10,0.5)", backdropFilter: "blur(20px)", border: "1px solid rgba(82,183,136,0.15)" }}>
                <div className="text-xl font-semibold" style={{ color: "#52B788" }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(240,244,242,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!isPremium && (
        <div className="px-8 py-3" style={{ backgroundColor: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(240,244,242,0.3)" }}>Patrocinado</span>
              <span>🛖</span>
              <div>
                <p className="text-sm font-medium" style={{ color: "#f0f4f2" }}>Toneles del Salto Suizo</p>
                <p className="text-xs" style={{ color: "rgba(240,244,242,0.4)" }}>Alojamiento unico en Guaira · Reserva ahora</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "rgba(82,183,136,0.15)", color: "#52B788", border: "1px solid rgba(82,183,136,0.2)" }}>Ver oferta</span>
              <button onClick={() => setIsPremium(true)} className="text-xs" style={{ color: "rgba(240,244,242,0.25)" }}>Quitar anuncios</button>
            </div>
          </div>
        </div>
      )}

      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "rgba(144,224,239,0.5)" }}>Elige tu experiencia</p>
            <h2 className="text-3xl font-light" style={{ color: "#f0f4f2" }}>Gratis o <span className="font-semibold" style={{ color: "#52B788" }}>Premium</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold" style={{ color: "#f0f4f2" }}>Gratis</h3>
                <span className="text-2xl font-light" style={{ color: "rgba(240,244,242,0.4)" }}>Gs 0</span>
              </div>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { text: "Acceso a destinos basicos", ok: true },
                  { text: "Informacion general de cabanas", ok: true },
                  { text: "Links para reservar directamente", ok: true },
                  { text: "Con publicidad de partners", ok: false },
                  { text: "Codigos de descuento", ok: false },
                  { text: "Rutas detalladas de Joel", ok: false },
                  { text: "Comunidad privada", ok: false },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span style={{ color: f.ok ? "#52B788" : "rgba(240,244,242,0.2)" }}>{f.ok ? "✓" : "✕"}</span>
                    <span style={{ color: f.ok ? "rgba(240,244,242,0.6)" : "rgba(240,244,242,0.25)" }}>{f.text}</span>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl text-xs text-center" style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(240,244,242,0.3)" }}>
                Incluye publicidad de alojamientos y tours
              </div>
            </div>
            <div className="rounded-2xl p-8 relative" style={{ backgroundColor: "rgba(82,183,136,0.06)", border: "1px solid rgba(82,183,136,0.25)" }}>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>Mas popular</div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold" style={{ color: "#f0f4f2" }}>Premium</h3>
                <div className="text-right">
                  <span className="text-2xl font-semibold" style={{ color: "#52B788" }}>Gs 35.000</span>
                  <div className="text-xs" style={{ color: "rgba(240,244,242,0.3)" }}>/mes</div>
                </div>
              </div>
              <p className="text-xs mb-6" style={{ color: "rgba(240,244,242,0.3)" }}>aprox. $5 USD — menos que un cafe</p>
              <div className="flex flex-col gap-3 mb-8">
                {["Sin publicidad — experiencia limpia", "Codigos de descuento en cabanas", "Rutas detalladas dia a dia de Joel", "Comunidad privada de viajeros", "Q&A mensual con Joel", "Descuentos con partners exclusivos"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <span style={{ color: "#52B788" }}>✓</span>
                    <span style={{ color: "rgba(240,244,242,0.7)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setIsPremium(true)} className="w-full py-4 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
                {isPremium ? "Ya tienes Premium" : "Activar Premium"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {isPremium && (
        <section className="py-16 px-8" style={{ backgroundColor: "rgba(82,183,136,0.04)", borderTop: "1px solid rgba(82,183,136,0.1)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span>✦</span>
              <h2 className="text-2xl font-semibold" style={{ color: "#f0f4f2" }}>Tus codigos de descuento exclusivos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { lugar: "Toneles del Salto Suizo", descuento: "15% OFF", codigo: "JOEL15", emoji: "🛖" },
                { lugar: "Posada del Rio Parana", descuento: "10% OFF", codigo: "LLANES10", emoji: "🌊" },
                { lugar: "Ecoaventura Paraguari", descuento: "20% OFF", codigo: "EXPLORER20", emoji: "🌿" },
              ].map((d) => (
                <div key={d.codigo} className="p-5 rounded-2xl" style={{ backgroundColor: "rgba(82,183,136,0.06)", border: "1px solid rgba(82,183,136,0.15)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{d.emoji}</span>
                    <p className="font-medium text-sm" style={{ color: "#f0f4f2" }}>{d.lugar}</p>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: "rgba(82,183,136,0.1)", border: "1px dashed rgba(82,183,136,0.3)" }}>
                    <span className="font-mono font-bold" style={{ color: "#52B788" }}>{d.codigo}</span>
                    <span className="text-sm font-bold" style={{ color: "#f0f4f2" }}>{d.descuento}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl" style={{ backgroundColor: "rgba(82,183,136,0.05)", border: "1px solid rgba(82,183,136,0.15)" }}>
          <h2 className="text-3xl font-light mb-4" style={{ color: "#f0f4f2" }}>
            {isPremium ? "Gracias por unirte" : "Viaja sin interrupciones"}
          </h2>
          <p className="mb-10" style={{ color: "rgba(240,244,242,0.4)" }}>
            {isPremium ? "Disfruta de tu experiencia sin publicidad con descuentos exclusivos." : "Por menos de un cafe al mes, accede a todo el contenido sin publicidad."}
          </p>
          {!isPremium && (
            <button onClick={() => setIsPremium(true)} className="inline-flex px-8 py-4 rounded-full font-medium transition-all hover:scale-105" style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
              Activar Premium — Gs 35.000/mes
            </button>
          )}
        </div>
      </section>

      <footer className="py-8 px-8 text-center" style={{ borderTop: "1px solid rgba(82,183,136,0.08)" }}>
        <p className="text-xs" style={{ color: "rgba(240,244,242,0.2)" }}>
          2026 Llanes Explorer
        </p>
      </footer>
    </main>
  );
}