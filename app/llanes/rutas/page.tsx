import Link from "next/link";

const rutas = [
  { id: "01", name: "Ruta del Sol Naciente", lugar: "Japón", dias: 10, nivel: "Moderado", emoji: "🗾", paradas: ["Tokyo", "Nikko", "Kyoto", "Nara", "Osaka"], precio: "€1,890", premium: false },
  { id: "02", name: "Patagonia Extrema", lugar: "Chile & Argentina", dias: 14, nivel: "Difícil", emoji: "🏔️", paradas: ["Puerto Natales", "Torres del Paine", "El Calafate", "Ushuaia"], precio: "€2,450", premium: true },
  { id: "03", name: "Islas Griegas", lugar: "Grecia", dias: 8, nivel: "Fácil", emoji: "🏛️", paradas: ["Atenas", "Mykonos", "Santorini", "Creta"], precio: "€1,200", premium: false },
  { id: "04", name: "Marruecos Profundo", lugar: "Marruecos", dias: 7, nivel: "Moderado", emoji: "🐪", paradas: ["Casablanca", "Fez", "Chefchaouen", "Marrakech", "Sahara"], precio: "€890", premium: true },
  { id: "05", name: "Bali Espiritual", lugar: "Indonesia", dias: 10, nivel: "Fácil", emoji: "🌺", paradas: ["Ubud", "Seminyak", "Uluwatu", "Nusa Penida"], precio: "€1,100", premium: false },
  { id: "06", name: "Aurora Boreal", lugar: "Islandia", dias: 7, nivel: "Moderado", emoji: "🌌", paradas: ["Reykjavik", "Akureyri", "Vatnajokull", "Vik"], precio: "€1,750", premium: true },
];

export default function Rutas() {
  return (
    <main className="min-h-screen bg-[#0a0a14]">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0a0a14]/80 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/llanes" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#7b5bff] flex items-center justify-center">
              <span className="text-white font-bold">L</span>
            </div>
            <span className="text-white font-bold">Llanes Explorer</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
            <Link href="/llanes/destinos" className="hover:text-white transition-colors">Destinos</Link>
            <Link href="/llanes/rutas" className="text-white">Rutas</Link>
            <Link href="/llanes/premium" className="hover:text-white transition-colors">Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-4 py-2 rounded-full bg-[#7b5bff] text-white text-sm font-semibold">✦ Premium</Link>
        </nav>
      </header>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rutas <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>exclusivas</span></h1>
            <p className="text-white/50 text-lg">Itinerarios detallados día a día. Las rutas Premium incluyen acceso a experiencias que no encontrarás en ningún otro lugar.</p>
          </div>

          <div className="flex flex-col gap-4">
            {rutas.map((r) => (
              <div key={r.id} className="group rounded-2xl bg-[#11111c] border border-white/5 hover:border-[#7b5bff]/30 transition-all p-6 cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-4xl">{r.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-white/30">#{r.id}</span>
                        {r.premium && <span className="text-xs px-2 py-0.5 rounded-full bg-[#7b5bff]/20 text-[#b094ff] border border-[#7b5bff]/30">✦ Premium</span>}
                        <span className="text-xs text-white/40">{r.nivel}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{r.name}</h3>
                      <p className="text-sm text-white/40 mb-3">{r.lugar} · {r.dias} días</p>
                      <div className="flex flex-wrap gap-2">
                        {r.paradas.map((p) => (
                          <span key={p} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{r.precio}</div>
                    <div className="text-xs text-white/30 mt-1">por persona</div>
                    <Link href="/llanes/premium" className="mt-3 inline-flex px-4 py-2 rounded-full bg-[#7b5bff] text-white text-xs font-semibold hover:bg-[#6645e6] transition-colors">
                      {r.premium ? "Desbloquear" : "Ver ruta"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
