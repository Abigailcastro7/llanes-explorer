import Link from "next/link";

export default function LlanesExplorer() {
  return (
    <main className="min-h-screen bg-[#0a0a14]">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0a0a14]/80 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#7b5bff] flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍀</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none">Llanes Explorer</div>
              <div className="text-white/40 text-[10px] tracking-widest uppercase">by Joel Llanes · Paraguay</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <Link href="/llanes/destinos" className="hover:text-white transition-colors">Destinos</Link>
            <Link href="/llanes/rutas" className="hover:text-white transition-colors">Rutas</Link>
            <Link href="/llanes/premium" className="hover:text-white transition-colors">Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-4 py-2 rounded-full bg-[#7b5bff] text-white text-sm font-semibold hover:bg-[#6645e6] transition-colors">
            ✦ Acceso Premium
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#7b5bff]/15 blur-[100px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7b5bff]/40 text-[#b094ff] text-xs tracking-widest uppercase mb-8 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9A0] animate-pulse" />
            El referente de viajes en Paraguay 🇵🇾
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Descubre Paraguay{" "}
            <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              con Joel
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Destinos seleccionados, rutas exclusivas e itinerarios premium. La plataforma oficial de la comunidad viajera de Joel Llanes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/llanes/destinos" className="px-8 py-4 rounded-full bg-[#7b5bff] text-white font-semibold hover:bg-[#6645e6] transition-all hover:scale-105">
              Ver destinos →
            </Link>
            <Link href="/llanes/premium" className="px-8 py-4 rounded-full border border-white/10 text-white/80 font-semibold hover:border-[#7b5bff]/50 hover:text-white transition-all">
              ✦ Unirme a la comunidad
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[
              { value: "126K", label: "Seguidores" },
              { value: "193K", label: "TikTok" },
              { value: "4.9★", label: "Rating" }
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinos destacados */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-white">Destinos destacados 🇵🇾</h2>
            <Link href="/llanes/destinos" className="text-[#b094ff] text-sm hover:text-white transition-colors">Ver todos →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Paraguarí", tag: "Naturaleza", emoji: "🌿", rating: "4.9", desc: "Cerros, bosques y saltos de agua. La joya del Paraguay según Joel.", price: "Destino local" },
              { name: "Encarnación", tag: "Verano", emoji: "🏖️", rating: "4.8", desc: "Playas del río, carnaval y gastronomía. El plan perfecto para el verano.", price: "Destino local" },
              { name: "Salto Cristal", tag: "Aventura", emoji: "💧", rating: "4.9", desc: "Uno de los saltos más espectaculares del país. Imperdible.", price: "Destino local" },
            ].map((d) => (
              <Link href="/llanes/destinos" key={d.name} className="group relative rounded-2xl overflow-hidden bg-[#11111c] border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
                <div className="h-48 flex items-center justify-center text-6xl bg-[#1a1a24]">
                  {d.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{d.tag}</span>
                    <span className="text-xs text-[#00D9A0]">★ {d.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{d.name}</h3>
                  <p className="text-sm text-white/40 mb-3">{d.desc}</p>
                  <p className="text-xs text-[#b094ff]">{d.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Joel */}
      <section className="py-20 px-6 bg-[#11111c]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🍀</div>
          <h2 className="text-3xl font-bold text-white mb-4">El referente de viajes en Paraguay</h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Desde Areguá, Joel Llanes recorre cada rincón del país y del mundo compartiendo experiencias auténticas con su comunidad. Con más de 126K seguidores en Instagram y 193K en TikTok, es el creador de contenido de viajes más seguido de Paraguay.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "2018", label: "Inicio" },
              { value: "126K", label: "Instagram" },
              { value: "193K", label: "TikTok" },
              { value: "#1", label: "Paraguay" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-[#1a1a24] border border-white/5 text-center">
                <div className="text-xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Premium */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[#7b5bff]/30 bg-[#11111c] p-12">
          <div className="text-4xl mb-4">✦</div>
          <h2 className="text-3xl font-bold text-white mb-4">Únete a la comunidad Premium</h2>
          <p className="text-white/50 mb-8">Desbloquea rutas exclusivas, itinerarios detallados y acceso directo a la comunidad de Joel. Lo que compartes gratis en Instagram, aquí lo conviertes en un negocio tuyo.</p>
          <Link href="/llanes/premium" className="inline-flex px-8 py-4 rounded-full bg-[#7b5bff] text-white font-semibold hover:bg-[#6645e6] transition-all hover:scale-105">
            Ver planes →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="text-white/20 text-sm">© 2026 Llanes Explorer · <Link href="/" className="hover:text-white/40 transition-colors">Demo by Buhring</Link></p>
      </footer>
    </main>
  );
}
