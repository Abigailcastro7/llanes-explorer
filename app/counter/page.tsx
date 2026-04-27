import Link from "next/link";

export default function Counter() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFB547] flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-none tracking-widest uppercase">Counter</div>
              <div className="text-white/30 text-[10px] tracking-widest uppercase">Restaurante · Madrid</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <Link href="/counter/menu" className="hover:text-white transition-colors">Carta</Link>
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#horarios" className="hover:text-white transition-colors">Horarios</a>
          </div>
          <Link href="/counter/reservas" className="px-5 py-2.5 rounded-full bg-[#FFB547] text-black text-sm font-bold hover:bg-[#ffc76a] transition-colors">
            Reservar mesa
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-[#1a0f00]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="text-[20rem] font-bold text-white/5 select-none">C</div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFB547]/10 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFB547]/40 text-[#FFB547] text-xs tracking-widest uppercase mb-8 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D9A0] animate-pulse" />
              Abierto ahora · Hasta las 23:30
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-none mb-6">
              Cocina de<br />
              <span style={{ color: "#FFB547" }}>autor.</span>
            </h1>
            <p className="text-white/60 text-xl max-w-lg mb-10 leading-relaxed">
              Ingredientes de temporada, técnica contemporánea y el mejor producto del mercado. Una experiencia gastronómica en el corazón de Madrid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/counter/reservas" className="px-8 py-4 rounded-full bg-[#FFB547] text-black font-bold hover:bg-[#ffc76a] transition-all hover:scale-105 text-center">
                Reservar mesa →
              </Link>
              <Link href="/counter/menu" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#FFB547]/50 hover:text-[#FFB547] transition-all text-center">
                Ver la carta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/5 bg-[#0f0a00]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "8.2K", label: "Reservas este año" },
            { value: "4.8★", label: "Valoración media" },
            { value: "92%", label: "Ocupación media" },
            { value: "450", label: "Reseñas positivas" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-[#FFB547]">{s.value}</div>
              <div className="text-sm text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Menú destacado */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[#FFB547] text-xs font-mono tracking-widest uppercase mb-2">Nuestra carta</p>
              <h2 className="text-4xl font-bold text-white">Platos estrella</h2>
            </div>
            <Link href="/counter/menu" className="text-[#FFB547] text-sm hover:text-white transition-colors">Ver carta completa →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Tartar de atún rojo", desc: "Aguacate, soja, sésamo tostado y chips de wonton", precio: "18€", cat: "Entrantes", emoji: "🐟" },
              { name: "Risotto de trufa negra", desc: "Arroz carnaroli, parmesano 24 meses, trufa de Soria", precio: "24€", cat: "Principales", emoji: "🍄" },
              { name: "Coulant de chocolate", desc: "Valrhona 70%, helado de vainilla bourbon, caramelo salado", precio: "9€", cat: "Postres", emoji: "🍫" },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl bg-[#111008] border border-white/5 hover:border-[#FFB547]/30 transition-all overflow-hidden group">
                <div className="h-40 flex items-center justify-center text-5xl bg-[#1a1200]">{p.emoji}</div>
                <div className="p-6">
                  <span className="text-xs font-mono text-[#FFB547]/60 uppercase tracking-widest">{p.cat}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{p.name}</h3>
                  <p className="text-sm text-white/40 mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#FFB547]">{p.precio}</span>
                    <Link href="/counter/reservas" className="text-xs text-white/40 hover:text-[#FFB547] transition-colors">Reservar →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section id="horarios" className="py-20 px-6 bg-[#0f0a00]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FFB547] text-xs font-mono tracking-widest uppercase mb-2">Cuándo encontrarnos</p>
            <h2 className="text-4xl font-bold text-white">Horarios</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { dia: "Lunes — Miércoles", horario: "13:00 — 16:00 · 20:00 — 23:00", abierto: true },
              { dia: "Jueves — Viernes", horario: "13:00 — 16:30 · 20:00 — 23:30", abierto: true },
              { dia: "Sábado", horario: "13:00 — 17:00 · 20:00 — 00:00", abierto: true },
              { dia: "Domingo", horario: "13:00 — 17:00", abierto: true },
            ].map((h) => (
              <div key={h.dia} className="flex items-center justify-between p-5 rounded-xl bg-[#111008] border border-white/5">
                <div>
                  <div className="text-white font-semibold">{h.dia}</div>
                  <div className="text-white/40 text-sm mt-0.5">{h.horario}</div>
                </div>
                <span className="text-xs text-[#00D9A0] border border-[#00D9A0]/30 px-3 py-1 rounded-full">Abierto</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Reserva */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-[#FFB547]/20 bg-[#111008] p-12">
          <div className="text-5xl mb-4">🍽️</div>
          <h2 className="text-3xl font-bold text-white mb-4">¿Tienes una ocasión especial?</h2>
          <p className="text-white/50 mb-8">Cumpleaños, aniversarios, cenas de empresa. Nos adaptamos a lo que necesitas. Reserva ahora y asegura tu mesa.</p>
          <Link href="/counter/reservas" className="inline-flex px-8 py-4 rounded-full bg-[#FFB547] text-black font-bold hover:bg-[#ffc76a] transition-all hover:scale-105">
            Reservar mesa ahora →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/20 text-sm">© 2026 Counter Restaurante · Madrid</div>
          <div className="text-white/20 text-sm">Calle Gran Vía 42, Madrid · 610 86 55 00</div>
          <div className="text-white/20 text-xs">Demo by <Link href="/" className="hover:text-white/40 transition-colors">Buhring</Link></div>
        </div>
      </footer>
    </main>
  );
}
