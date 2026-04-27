import Link from "next/link";

const proyectos = [
  { nombre: "Campana Primavera 2026", cliente: "Zara Home", talento: "Marco Vidal", estado: "En curso", progreso: 65, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", entrega: "15 May 2026", presupuesto: "8.500€" },
  { nombre: "Identidad Corporativa", cliente: "Estudio Marta Rioja", talento: "Sofia Reyes", estado: "Revision", progreso: 90, img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80", entrega: "30 Abr 2026", presupuesto: "4.200€" },
  { nombre: "App de reservas", cliente: "Hotel Villa Real", talento: "Lucia Montero", estado: "Completado", progreso: 100, img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80", entrega: "20 Abr 2026", presupuesto: "3.800€" },
];

export default function Proyectos() {
  return (
    <main style={{ backgroundColor: "#000000", color: "#F0EDE8", fontFamily: "Georgia, serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-6" style={{ backgroundColor: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
        <nav className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <Link href="/crafted">
            <div className="text-xl tracking-[0.5em] uppercase font-light">Crafted</div>
          </Link>
          <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(240,237,232,0.4)" }}>
            <Link href="/crafted/talentos" className="hover:text-white transition-colors">Talentos</Link>
            <Link href="/crafted/proyectos" className="text-white">Proyectos</Link>
            <Link href="/crafted/briefing" className="hover:text-white transition-colors">Briefing</Link>
          </div>
          <Link href="/crafted/briefing" className="px-7 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
            style={{ border: "1px solid rgba(240,237,232,0.3)", color: "#F0EDE8", fontFamily: "Helvetica, sans-serif" }}>
            Nuevo proyecto
          </Link>
        </nav>
      </header>

      <div className="pt-32 pb-20 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[9px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Panel de control</p>
            <h1 className="text-5xl font-light" style={{ letterSpacing: "-0.03em" }}>Mis proyectos</h1>
          </div>

          <div className="flex flex-col gap-px" style={{ backgroundColor: "rgba(240,237,232,0.06)" }}>
            {proyectos.map((p) => (
              <div key={p.nombre} className="flex items-center gap-8 p-8" style={{ backgroundColor: "#000000" }}>
                <div className="w-20 h-20 rounded overflow-hidden shrink-0">
                  <img src={p.img} alt={p.nombre} className="w-full h-full object-cover" style={{ filter: "brightness(0.5) saturate(0.3)" }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-1.5">
                    <h3 className="text-lg font-light">{p.nombre}</h3>
                    <span className="text-[9px] px-2.5 py-0.5 tracking-widest uppercase"
                      style={{ border: "1px solid rgba(240,237,232,0.1)", color: p.estado === "Completado" ? "rgba(240,237,232,0.6)" : p.estado === "Revision" ? "rgba(240,237,232,0.8)" : "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>
                      {p.estado}
                    </span>
                  </div>
                  <p className="text-[10px] tracking-widest uppercase mb-3" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>{p.cliente} · {p.talento}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px" style={{ backgroundColor: "rgba(240,237,232,0.06)" }}>
                      <div className="h-full transition-all" style={{ width: p.progreso + "%", backgroundColor: "#F0EDE8" }} />
                    </div>
                    <span className="text-[10px] font-light" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{p.progreso}%</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-base font-light mb-1">{p.presupuesto}</div>
                  <div className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Entrega {p.entrega}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}