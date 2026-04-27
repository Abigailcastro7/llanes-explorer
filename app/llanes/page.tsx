import Link from "next/link";

export default function LlanesExplorer() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#070d0a", color: "#f0f4f2" }}>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "#070d0a", borderBottom: "1px solid rgba(82,183,136,0.1)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍀</span>
            <div>
              <div className="font-semibold text-base tracking-wide" style={{ color: "#f0f4f2" }}>Llanes Explorer</div>
              <div className="text-[10px] tracking-widest uppercase" style={{ color: "#52B788", opacity: 0.7 }}>by Joel Llanes · Paraguay</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "rgba(240,244,242,0.5)" }}>
            <Link href="/llanes/destinos" className="hover:opacity-100 transition-opacity" style={{ color: "rgba(240,244,242,0.6)" }}>Destinos</Link>
            <Link href="/llanes/rutas" className="hover:opacity-100 transition-opacity" style={{ color: "rgba(240,244,242,0.6)" }}>Rutas</Link>
            <Link href="/llanes/premium" className="hover:opacity-100 transition-opacity" style={{ color: "rgba(240,244,242,0.6)" }}>Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            style={{ backgroundColor: "rgba(82,183,136,0.15)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)" }}>
            ✦ Unirme
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(82,183,136,0.06) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(144,224,239,0.04) 0%, transparent 50%)" }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-10 font-mono"
            style={{ border: "1px solid rgba(144,224,239,0.2)", color: "rgba(144,224,239,0.7)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#52B788" }} />
            El referente de viajes en Paraguay
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6" style={{ color: "#f0f4f2", letterSpacing: "-0.02em" }}>
            Descubre Paraguay<br />
            <span className="font-semibold" style={{ color: "#52B788" }}>con Joel</span>
          </h1>
          
          <p className="text-lg max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "rgba(240,244,242,0.5)" }}>
            Destinos auténticos, rutas exclusivas e itinerarios diseñados para quienes viajan con intención.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/llanes/destinos" className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
              Explorar destinos
            </Link>
            <Link href="/llanes/premium" className="px-8 py-4 rounded-full font-medium transition-all"
              style={{ border: "1px solid rgba(240,244,242,0.1)", color: "rgba(240,244,242,0.6)" }}>
              ✦ Acceso Premium
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-12 max-w-sm mx-auto">
            {[{ value: "126K", label: "Seguidores" }, { value: "193K", label: "TikTok" }, { value: "4.9", label: "Rating" }].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-semibold" style={{ color: "#52B788" }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(240,244,242,0.3)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Línea divisora */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px" style={{ backgroundColor: "rgba(82,183,136,0.1)" }} />
      </div>

      {/* Destinos */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(144,224,239,0.5)" }}>Selección de Joel</p>
              <h2 className="text-3xl font-light" style={{ color: "#f0f4f2" }}>Destinos destacados</h2>
            </div>
            <Link href="/llanes/destinos" className="text-sm transition-colors" style={{ color: "#52B788" }}>Ver todos →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Paraguarí", tag: "Naturaleza", emoji: "🌿", rating: "4.9", desc: "Cerros, bosques y saltos de agua. La joya más cercana a Asunción." },
              { name: "Encarnación", tag: "Verano", emoji: "🏖️", rating: "4.8", desc: "Las mejores playas del río Paraguay y el mejor carnaval del país." },
              { name: "Salto Cristal", tag: "Aventura", emoji: "💧", rating: "4.9", desc: "Uno de los saltos más espectaculares de Paraguay. Imperdible." },
            ].map((d) => (
              <Link href="/llanes/destinos" key={d.name} className="group rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(82,183,136,0.1)" }}>
                <div className="h-44 flex items-center justify-center text-5xl" style={{ backgroundColor: "rgba(82,183,136,0.05)" }}>
                  {d.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(144,224,239,0.4)" }}>{d.tag}</span>
                    <span className="text-xs" style={{ color: "#52B788" }}>★ {d.rating}</span>
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: "#f0f4f2" }}>{d.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,244,242,0.35)" }}>{d.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Joel */}
      <section className="py-24 px-8" style={{ backgroundColor: "rgba(82,183,136,0.03)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-mono tracking-widest uppercase mb-6" style={{ color: "rgba(144,224,239,0.5)" }}>Quién es Joel</p>
            <h2 className="text-3xl font-light mb-6" style={{ color: "#f0f4f2" }}>
              El referente de viajes en Paraguay
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(240,244,242,0.45)" }}>
              Desde Areguá, Joel recorre cada rincón de Paraguay y el mundo compartiendo experiencias auténticas. Con más de 126K seguidores en Instagram y 193K en TikTok, es el creador de viajes más seguido del país.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-xs">
              {[{ value: "2018", label: "Inicio" }, { value: "#1", label: "Paraguay" }].map((s) => (
                <div key={s.label} className="p-4 rounded-xl text-center" style={{ backgroundColor: "rgba(82,183,136,0.08)", border: "1px solid rgba(82,183,136,0.12)" }}>
                  <div className="text-xl font-semibold" style={{ color: "#52B788" }}>{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(240,244,242,0.3)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-mono tracking-widest uppercase mb-6" style={{ color: "rgba(144,224,239,0.5)" }}>Comunidad Premium</p>
          <h2 className="text-3xl font-light mb-4" style={{ color: "#f0f4f2" }}>Viaja con intención</h2>
          <p className="mb-10 leading-relaxed" style={{ color: "rgba(240,244,242,0.4)" }}>
            Accede a rutas exclusivas, itinerarios detallados y la comunidad de viajeros de Joel. Lo que no se publica en redes.
          </p>
          <Link href="/llanes/premium" className="inline-flex px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
            style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2" }}>
            Ver planes Premium →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center" style={{ borderTop: "1px solid rgba(82,183,136,0.08)" }}>
        <p className="text-xs" style={{ color: "rgba(240,244,242,0.2)" }}>
          © 2026 Llanes Explorer · <Link href="/" className="hover:opacity-60 transition-opacity">Demo by Buhring</Link>
        </p>
      </footer>
    </main>
  );
}
