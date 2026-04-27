import Link from "next/link";

export default function LlanesExplorer() {
  return (
    <main className="min-h-screen bg-[#0a0a14]">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0a0a14]/80 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#7b5bff] flex items-center justify-center">
              <span className="text-white font-bold">L</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none">Llanes Explorer</div>
              <div className="text-white/40 text-[10px] tracking-widest uppercase">by Joel Llanes</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <Link href="/llanes/destinos" className="hover:text-white transition-colors">Destinos</Link>
            <Link href="/llanes/rutas" className="hover:text-white transition-colors">Rutas</Link>
            <Link href="/llanes/premium" className="hover:text-white transition-colors">Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-4 py-2 rounded-full bg-[#7b5bff] text-white text-sm font-semibold hover:bg-[#6645e6] transition-colors">
            ✦ Premium
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
            120+ destinos curados · Actualizado 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Explora el mundo{" "}
            <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              con Joel
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Destinos seleccionados, rutas exclusivas e itinerarios premium para viajeros que quieren vivir experiencias auténticas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/llanes/destinos" className="px-8 py-4 rounded-full bg-[#7b5bff] text-white font-semibold hover:bg-[#6645e6] transition-all hover:scale-105">
              Ver destinos →
            </Link>
            <Link href="/llanes/premium" className="px-8 py-4 rounded-full border border-white/10 text-white/80 font-semibold hover:border-[#7b5bff]/50 hover:text-white transition-all">
              ✦ Acceso Premium
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[{ value: "120+", label: "Destinos" }, { value: "48", label: "Rutas" }, { value: "4.9★", label: "Rating" }].map((s) => (
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
            <h2 className="text-3xl font-bold text-white">Destinos destacados</h2>
            <Link href="/llanes/destinos" className="text-[#b094ff] text-sm hover:text-white transition-colors">Ver todos →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Kyoto, Japón", tag: "Cultural", color: "#FF6B9D", emoji: "⛩️", rating: "4.9", price: "desde €1,200" },
              { name: "Patagonia, Chile", tag: "Aventura", color: "#00D9A0", emoji: "🏔️", rating: "4.8", price: "desde €2,100" },
              { name: "Santorini, Grecia", tag: "Premium", color: "#7b5bff", emoji: "🌊", rating: "4.9", price: "desde €900" },
            ].map((d) => (
              <Link href="/llanes/destinos" key={d.name} className="group relative rounded-2xl overflow-hidden bg-[#11111c] border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
                <div className="h-48 flex items-center justify-center text-6xl" style={{ backgroundColor: d.color + "20" }}>
                  {d.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{d.tag}</span>
                    <span className="text-xs text-[#00D9A0]">★ {d.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{d.name}</h3>
                  <p className="text-sm text-white/40">{d.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Premium */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[#7b5bff]/30 bg-[#11111c] p-12">
          <div className="text-4xl mb-4">✦</div>
          <h2 className="text-3xl font-bold text-white mb-4">Acceso Premium</h2>
          <p className="text-white/50 mb-8">Desbloquea rutas exclusivas, itinerarios detallados y acceso a la comunidad de viajeros de Joel.</p>
          <Link href="/llanes/premium" className="inline-flex px-8 py-4 rounded-full bg-[#7b5bff] text-white font-semibold hover:bg-[#6645e6] transition-all hover:scale-105">
            Ver planes Premium →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="text-white/20 text-sm">© 2026 Llanes Explorer · <Link href="/" className="hover:text-white/40 transition-colors">Demo Lab by Buhring</Link></p>
      </footer>
    </main>
  );
}
