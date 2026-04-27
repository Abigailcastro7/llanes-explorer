import Link from "next/link";

const rutas = [
  { id: "01", name: "La Ruta de Joel por Paraguarí", lugar: "Paraguay", dias: 2, nivel: "Fácil", emoji: "🌿", paradas: ["Pirayú", "Cerro Pero", "Salto Piraretá", "Carapeguá"], precio: "Guía incluida", premium: false },
  { id: "02", name: "Verano en Encarnación", lugar: "Paraguay", dias: 3, nivel: "Fácil", emoji: "🏖️", paradas: ["Costa Sur", "Isla Yacyretá", "Carmen del Paraná", "Trinidad"], precio: "Guía incluida", premium: false },
  { id: "03", name: "Chaco Extremo", lugar: "Paraguay", dias: 5, nivel: "Difícil", emoji: "🦁", paradas: ["Filadelfia", "Parque Nacional Defensores", "Fortín Boquerón", "Mariscal Estigarribia"], precio: "Guía incluida", premium: true },
  { id: "04", name: "Ruta Machu Picchu — La de Joel", lugar: "Perú", dias: 7, nivel: "Moderado", emoji: "⛰️", paradas: ["Lima", "Cusco", "Valle Sagrado", "Aguas Calientes", "Machu Picchu"], precio: "desde $800", premium: true },
  { id: "05", name: "México Día de Muertos", lugar: "México", dias: 10, nivel: "Fácil", emoji: "🌮", paradas: ["Ciudad de México", "Oaxaca", "Puebla", "Teotihuacán"], precio: "desde $700", premium: true },
  { id: "06", name: "Alto Paraná y los Saltos", lugar: "Paraguay", dias: 2, nivel: "Fácil", emoji: "💧", paradas: ["Ciudad del Este", "Salto Monday", "Itaipu", "Minga Guazú"], precio: "Guía incluida", premium: false },
];

export default function Rutas() {
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
            <Link href="/llanes/rutas" className="text-white font-medium">Rutas</Link>
            <Link href="/llanes/premium" className="hover:text-white transition-colors">Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-4 py-2 rounded-full bg-[#7b5bff] text-white text-sm font-semibold">✦ Premium</Link>
        </nav>
      </header>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7b5bff]/30 text-[#b094ff] text-xs font-mono tracking-widest uppercase mb-6">
              Las rutas exactas de Joel
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Rutas <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>de Joel</span>
            </h1>
            <p className="text-white/50 text-lg">Los itinerarios exactos que Joel recorrió. Día a día, parada por parada. Las rutas Premium incluyen tips exclusivos que no publica en redes.</p>
          </div>

          <div className="flex flex-col gap-4">
            {rutas.map((r) => (
              <div key={r.id} className="group rounded-2xl bg-[#11111c] border border-white/5 hover:border-[#7b5bff]/30 transition-all p-6 cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-4xl">{r.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-xs font-mono text-white/30">#{r.id}</span>
                        {r.premium && <span className="text-xs px-2 py-0.5 rounded-full bg-[#7b5bff]/20 text-[#b094ff] border border-[#7b5bff]/30">✦ Premium</span>}
                        <span className="text-xs text-white/40">{r.nivel}</span>
                        <span className="text-xs text-white/40">{r.dias} días</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{r.name}</h3>
                      <p className="text-sm text-white/40 mb-3">{r.lugar}</p>
                      <div className="flex flex-wrap gap-2">
                        {r.paradas.map((p) => (
                          <span key={p} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-base font-bold text-white">{r.precio}</div>
                    <Link href="/llanes/premium" className="mt-3 inline-flex px-4 py-2 rounded-full bg-[#7b5bff] text-white text-xs font-semibold hover:bg-[#6645e6] transition-colors">
                      {r.premium ? "Desbloquear ✦" : "Ver ruta"}
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
