"use client";
import Link from "next/link";
import { useState } from "react";

const talentos = [
  { nombre: "Sofia Reyes", rol: "Directora de Arte", ciudad: "Madrid", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80", rate: "850€/dia", tags: ["Branding", "Editorial", "Lujo"], disponible: true, proyectos: 48, rating: "4.9" },
  { nombre: "Marco Vidal", rol: "Director de Fotografia", ciudad: "Barcelona", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", rate: "1.200€/dia", tags: ["Moda", "Campañas", "Retrato"], disponible: true, proyectos: 72, rating: "5.0" },
  { nombre: "Lucia Montero", rol: "Diseñadora UI/UX", ciudad: "Madrid", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80", rate: "650€/dia", tags: ["Digital", "Apps", "Branding"], disponible: false, proyectos: 35, rating: "4.8" },
  { nombre: "Carlos Ibarra", rol: "Director de Video", ciudad: "Valencia", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80", rate: "950€/dia", tags: ["Motion", "Publicidad", "Marca"], disponible: true, proyectos: 61, rating: "4.9" },
  { nombre: "Ana Ferreira", rol: "Copywriter Creativa", ciudad: "Madrid", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80", rate: "450€/dia", tags: ["Naming", "Tono de marca", "Web"], disponible: true, proyectos: 29, rating: "4.7" },
  { nombre: "Dario Sala", rol: "Diseñador Branding", ciudad: "Bilbao", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80", rate: "750€/dia", tags: ["Identidad", "Packaging", "Retail"], disponible: true, proyectos: 54, rating: "5.0" },
];

const categorias = ["Todos", "Fotografia", "Arte", "Diseño", "Video", "Copy"];

export default function Talentos() {
  const [filtro, setFiltro] = useState("Todos");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main style={{ backgroundColor: "#000000", color: "#F0EDE8", fontFamily: "Georgia, serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-6" style={{ backgroundColor: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
        <nav className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <Link href="/crafted">
            <div className="text-xl tracking-[0.5em] uppercase font-light">Crafted</div>
          </Link>
          <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(240,237,232,0.4)" }}>
            <Link href="/crafted/talentos" className="text-white">Talentos</Link>
            <Link href="/crafted/proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <Link href="/crafted/briefing" className="hover:text-white transition-colors">Briefing</Link>
          </div>
          <Link href="/crafted/briefing" className="px-7 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
            style={{ border: "1px solid rgba(240,237,232,0.3)", color: "#F0EDE8", fontFamily: "Helvetica, sans-serif" }}>
            Iniciar proyecto
          </Link>
        </nav>
      </header>

      <div className="pt-32 pb-20 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[9px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Talento verificado</p>
            <h1 className="text-6xl font-light mb-2" style={{ letterSpacing: "-0.03em" }}>Creativos</h1>
            <p className="text-lg font-light" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>Los mejores de Madrid y España. Verificados. Disponibles.</p>
          </div>

          <div className="flex gap-0 mb-16" style={{ borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
            {categorias.map((c) => (
              <button key={c} onClick={() => setFiltro(c)}
                className="px-6 py-4 text-[10px] tracking-[0.3em] uppercase transition-all"
                style={{ fontFamily: "Helvetica, sans-serif", color: filtro === c ? "#F0EDE8" : "rgba(240,237,232,0.3)", borderBottom: filtro === c ? "1px solid #F0EDE8" : "1px solid transparent", marginBottom: "-1px" }}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(240,237,232,0.06)" }}>
            {talentos.map((t) => (
              <div key={t.nombre} onClick={() => setSelected(selected === t.nombre ? null : t.nombre)}
                className="group cursor-pointer" style={{ backgroundColor: "#000000" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <img src={t.img} alt={t.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.4) saturate(0.3)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.1) 50%)" }} />
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="text-[9px] px-2.5 py-1 tracking-widest uppercase" style={{ backgroundColor: t.disponible ? "rgba(240,237,232,0.1)" : "rgba(255,255,255,0.03)", color: t.disponible ? "#F0EDE8" : "rgba(240,237,232,0.25)", border: "1px solid rgba(240,237,232,0.1)", fontFamily: "Helvetica, sans-serif" }}>
                      {t.disponible ? "Disponible" : "Ocupado"}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-[9px] tracking-[0.4em] uppercase mb-1.5" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{t.rol} · {t.ciudad}</p>
                    <h3 className="text-xl font-light mb-3" style={{ letterSpacing: "-0.01em" }}>{t.nombre}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {t.tags.map((tag) => (
                        <span key={tag} className="text-[9px] px-2 py-0.5 tracking-widest uppercase" style={{ border: "1px solid rgba(240,237,232,0.1)", color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>★ {t.rating} · {t.proyectos} proyectos</span>
                      <span className="text-base font-light">{t.rate}</span>
                    </div>
                    {selected === t.nombre && (
                      <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(240,237,232,0.08)" }}>
                        <Link href="/crafted/briefing" onClick={(e) => e.stopPropagation()}
                          className="block text-center py-3 text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-white hover:text-black"
                          style={{ border: "1px solid rgba(240,237,232,0.3)", color: "#F0EDE8", fontFamily: "Helvetica, sans-serif" }}>
                          Contratar a {t.nombre.split(" ")[0]}
                        </Link>
                      </div>
                    )}
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