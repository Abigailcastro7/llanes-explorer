import Link from "next/link";

const destinos = [
  { name: "Paraguarí", tag: "Naturaleza", emoji: "🌿", rating: "4.9", price: "Destino local", duration: "1-2 días", desc: "Cerros, bosques y saltos de agua. La joya más cercana a Asunción." },
  { name: "Encarnación", tag: "Verano", emoji: "🏖️", rating: "4.8", price: "Destino local", duration: "2-3 días", desc: "Las mejores playas del río Paraguay, carnaval y gastronomía única." },
  { name: "Salto Cristal", tag: "Aventura", emoji: "💧", rating: "4.9", price: "Destino local", duration: "1 día", desc: "Uno de los saltos más espectaculares del país. Imperdible." },
  { name: "Ayolas", tag: "Paraíso", emoji: "🌊", rating: "4.8", price: "Destino local", duration: "2-3 días", desc: "Isla Corateí y sus aguas cristalinas. El verano perfecto." },
  { name: "Areguá", tag: "Cultural", emoji: "🏡", rating: "4.7", price: "Destino local", duration: "1 día", desc: "El pueblo donde nació Joel. Fresa, artesanía y lago Ypacaraí." },
  { name: "Itaipu", tag: "Imponente", emoji: "⚡", rating: "4.9", price: "Destino local", duration: "1 día", desc: "La represa más grande del mundo. Una maravilla de la ingeniería." },
  { name: "Chaco Paraguayo", tag: "Extremo", emoji: "🦁", rating: "4.6", price: "Destino local", duration: "3-5 días", desc: "Fauna salvaje, naturaleza extrema y una experiencia única en el mundo." },
  { name: "Machu Picchu", tag: "Internacional", emoji: "⛰️", rating: "4.9", price: "desde $800", duration: "5-7 días", desc: "El primer viaje que cambió la vida de Joel. Ruta exclusiva con su guía." },
  { name: "México", tag: "Internacional", emoji: "🌮", rating: "4.8", price: "desde $700", duration: "7-10 días", desc: "Día de Muertos, cultura y gastronomía. La ruta de Joel." },
];

export default function Destinos() {
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
            <Link href="/llanes/destinos" className="text-white font-medium">Destinos</Link>
            <Link href="/llanes/rutas" className="hover:text-white transition-colors">Rutas</Link>
            <Link href="/llanes/premium" className="hover:text-white transition-colors">Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-4 py-2 rounded-full bg-[#7b5bff] text-white text-sm font-semibold">✦ Premium</Link>
        </nav>
      </header>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7b5bff]/30 text-[#b094ff] text-xs font-mono tracking-widest uppercase mb-6">
              🇵🇾 Curados por Joel Llanes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Destinos <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>curados</span>
            </h1>
            <p className="text-white/50 text-lg">Lugares visitados y recomendados personalmente por Joel. Cada destino incluye guía, tips y las rutas exactas que él recorrió.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinos.map((d) => (
              <div key={d.name} className="group rounded-2xl bg-[#11111c] border border-white/5 hover:border-[#7b5bff]/30 transition-all hover:-translate-y-1 overflow-hidden cursor-pointer">
                <div className="h-40 flex items-center justify-center text-5xl bg-[#1a1a24]">{d.emoji}</div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{d.tag}</span>
                    <span className="text-xs text-[#00D9A0]">★ {d.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{d.name}</h3>
                  <p className="text-sm text-white/40 mb-4">{d.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-sm text-white/60">{d.duration}</span>
                    <span className="text-sm font-semibold text-[#b094ff]">{d.price}</span>
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
