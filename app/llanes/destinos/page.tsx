import Link from "next/link";

const destinos = [
  { name: "Paraguari", tag: "Naturaleza", emoji: "🌿", rating: "4.9", price: "Destino local", duration: "1-2 dias", desc: "Cerros, bosques y saltos de agua. La joya del Paraguay segun Joel." },
  { name: "Encarnacion", tag: "Verano", emoji: "🏖️", rating: "4.8", price: "Destino local", duration: "2-3 dias", desc: "Las mejores playas del rio Paraguay, carnaval y gastronomia." },
  { name: "Salto Cristal", tag: "Aventura", emoji: "💧", rating: "4.9", price: "Destino local", duration: "1 dia", desc: "Uno de los saltos mas espectaculares del pais." },
  { name: "Ayolas", tag: "Paraiso", emoji: "🌊", rating: "4.8", price: "Destino local", duration: "2-3 dias", desc: "Isla Coratei y sus aguas cristalinas. El verano perfecto." },
  { name: "Aregua", tag: "Cultural", emoji: "🏡", rating: "4.7", price: "Destino local", duration: "1 dia", desc: "El pueblo donde nacio Joel. Fresa, artesania y lago Ypacarai." },
  { name: "Itaipu", tag: "Imponente", emoji: "⚡", rating: "4.9", price: "Destino local", duration: "1 dia", desc: "La represa mas grande del mundo." },
  { name: "Chaco Paraguayo", tag: "Extremo", emoji: "🦁", rating: "4.6", price: "Destino local", duration: "3-5 dias", desc: "Fauna salvaje y naturaleza extrema. Una experiencia unica." },
  { name: "Machu Picchu", tag: "Internacional", emoji: "⛰️", rating: "4.9", price: "desde $800", duration: "5-7 dias", desc: "El primer viaje que cambio la vida de Joel." },
  { name: "Mexico", tag: "Internacional", emoji: "🌮", rating: "4.8", price: "desde $700", duration: "7-10 dias", desc: "Dia de Muertos, cultura y gastronomia. La ruta de Joel." },
];

export default function Destinos() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#070d0a", color: "#f0f4f2" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "#070d0a", borderBottom: "1px solid rgba(82,183,136,0.1)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/llanes" className="flex items-center gap-3">
            <span className="text-xl">🍀</span>
            <span className="font-semibold" style={{ color: "#f0f4f2" }}>Llanes Explorer</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/llanes/destinos" className="font-medium" style={{ color: "#52B788" }}>Destinos</Link>
            <Link href="/llanes/rutas" className="transition-colors" style={{ color: "rgba(240,244,242,0.5)" }}>Rutas</Link>
            <Link href="/llanes/premium" className="transition-colors" style={{ color: "rgba(240,244,242,0.5)" }}>Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ backgroundColor: "rgba(82,183,136,0.15)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)" }}>
            ✦ Premium
          </Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "rgba(144,224,239,0.5)" }}>Curados por Joel Llanes</p>
            <h1 className="text-4xl font-light mb-4" style={{ color: "#f0f4f2" }}>
              Destinos <span className="font-semibold" style={{ color: "#52B788" }}>autenticos</span>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "rgba(240,244,242,0.4)" }}>
              Lugares visitados y recomendados personalmente por Joel. Cada destino viene con guia, tips y las rutas exactas que el recorrio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinos.map((d) => (
              <div key={d.name} className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1 cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(82,183,136,0.1)" }}>
                <div className="h-36 flex items-center justify-center text-4xl" style={{ backgroundColor: "rgba(82,183,136,0.05)" }}>{d.emoji}</div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(144,224,239,0.4)" }}>{d.tag}</span>
                    <span className="text-xs" style={{ color: "#52B788" }}>★ {d.rating}</span>
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: "#f0f4f2" }}>{d.name}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(240,244,242,0.35)" }}>{d.desc}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(82,183,136,0.08)" }}>
                    <span className="text-sm" style={{ color: "rgba(240,244,242,0.3)" }}>{d.duration}</span>
                    <span className="text-sm font-medium" style={{ color: "#52B788" }}>{d.price}</span>
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
