import Link from "next/link";

const rutas = [
  { id: "01", name: "La Ruta de Joel por Paraguari", lugar: "Paraguay", dias: 2, nivel: "Facil", emoji: "🌿", paradas: ["Pirayu", "Cerro Pero", "Salto Pirareta", "Carapegua"], precio: "Guia incluida", premium: false },
  { id: "02", name: "Verano en Encarnacion", lugar: "Paraguay", dias: 3, nivel: "Facil", emoji: "🏖️", paradas: ["Costa Sur", "Isla Yacyreta", "Carmen del Parana", "Trinidad"], precio: "Guia incluida", premium: false },
  { id: "03", name: "Chaco Extremo", lugar: "Paraguay", dias: 5, nivel: "Dificil", emoji: "🦁", paradas: ["Filadelfia", "Parque Defensores", "Fortin Boqueron", "Mariscal Estigarribia"], precio: "Guia incluida", premium: true },
  { id: "04", name: "Ruta Machu Picchu de Joel", lugar: "Peru", dias: 7, nivel: "Moderado", emoji: "⛰️", paradas: ["Lima", "Cusco", "Valle Sagrado", "Aguas Calientes", "Machu Picchu"], precio: "desde $800", premium: true },
  { id: "05", name: "Mexico Dia de Muertos", lugar: "Mexico", dias: 10, nivel: "Facil", emoji: "🌮", paradas: ["Ciudad de Mexico", "Oaxaca", "Puebla", "Teotihuacan"], precio: "desde $700", premium: true },
  { id: "06", name: "Alto Parana y los Saltos", lugar: "Paraguay", dias: 2, nivel: "Facil", emoji: "💧", paradas: ["Ciudad del Este", "Salto Monday", "Itaipu", "Minga Guazu"], precio: "Guia incluida", premium: false },
];

export default function Rutas() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#070d0a", color: "#f0f4f2" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "#070d0a", borderBottom: "1px solid rgba(82,183,136,0.1)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/llanes" className="flex items-center gap-3">
            <span className="text-xl">🍀</span>
            <span className="font-semibold" style={{ color: "#f0f4f2" }}>Llanes Explorer</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/llanes/destinos" className="transition-colors" style={{ color: "rgba(240,244,242,0.5)" }}>Destinos</Link>
            <Link href="/llanes/rutas" className="font-medium" style={{ color: "#52B788" }}>Rutas</Link>
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
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "rgba(144,224,239,0.5)" }}>Las rutas exactas de Joel</p>
            <h1 className="text-4xl font-light mb-4" style={{ color: "#f0f4f2" }}>
              Rutas <span className="font-semibold" style={{ color: "#52B788" }}>exclusivas</span>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "rgba(240,244,242,0.4)" }}>
              Los itinerarios que Joel recorrio. Dia a dia, parada por parada. Las rutas Premium incluyen tips que no publica en redes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {rutas.map((r) => (
              <div key={r.id} className="rounded-2xl p-6 transition-all cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(82,183,136,0.1)" }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-3xl">{r.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-xs font-mono" style={{ color: "rgba(240,244,242,0.2)" }}>#{r.id}</span>
                        {r.premium && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-mono"
                            style={{ backgroundColor: "rgba(144,224,239,0.08)", color: "rgba(144,224,239,0.6)", border: "1px solid rgba(144,224,239,0.15)" }}>
                            ✦ Premium
                          </span>
                        )}
                        <span className="text-xs" style={{ color: "rgba(240,244,242,0.3)" }}>{r.nivel} · {r.dias} dias</span>
                      </div>
                      <h3 className="font-semibold mb-1" style={{ color: "#f0f4f2" }}>{r.name}</h3>
                      <p className="text-sm mb-3" style={{ color: "rgba(240,244,242,0.35)" }}>{r.lugar}</p>
                      <div className="flex flex-wrap gap-2">
                        {r.paradas.map((p) => (
                          <span key={p} className="text-xs px-3 py-1 rounded-full"
                            style={{ backgroundColor: "rgba(82,183,136,0.08)", color: "rgba(240,244,242,0.4)" }}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-medium mb-2" style={{ color: "#52B788" }}>{r.precio}</div>
                    <Link href="/llanes/premium" className="inline-flex px-4 py-2 rounded-full text-xs font-medium transition-all"
                      style={{ backgroundColor: r.premium ? "rgba(82,183,136,0.15)" : "rgba(82,183,136,0.1)", color: "#52B788", border: "1px solid rgba(82,183,136,0.2)" }}>
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
