import Link from "next/link";

export default function Crafted() {
  return (
    <main style={{ backgroundColor: "#000000", color: "#F0EDE8", fontFamily: "Georgia, 'Times New Roman', serif" }}>

      <header className="fixed top-0 left-0 right-0 z-50 py-6" style={{ backgroundColor: "rgba(0,0,0,0.9)", backdropFilter: "blur(30px)", borderBottom: "1px solid rgba(240,237,232,0.05)" }}>
        <nav className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <div>
            <div className="text-2xl tracking-[0.6em] uppercase font-light" style={{ color: "#F0EDE8", letterSpacing: "0.6em" }}>Crafted</div>
            <div className="text-[8px] tracking-[0.4em] uppercase mt-1" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Talento Creativo · Madrid</div>
          </div>
          <div className="hidden md:flex items-center gap-14 text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(240,237,232,0.35)" }}>
            <Link href="/crafted/talentos" className="hover:text-white transition-colors duration-300">Talentos</Link>
            <Link href="/crafted/proyectos" className="hover:text-white transition-colors duration-300">Proyectos</Link>
            <Link href="/crafted/briefing" className="hover:text-white transition-colors duration-300">Briefing</Link>
          </div>
          <Link href="/crafted/briefing" className="px-8 py-3 text-[9px] tracking-[0.35em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
            style={{ border: "1px solid rgba(240,237,232,0.25)", color: "#F0EDE8", fontFamily: "Helvetica, sans-serif" }}>
            Iniciar proyecto
          </Link>
        </nav>
      </header>

      {/* Hero — pantalla completa cinematografica */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=90" alt="Crafted"
            className="w-full h-full object-cover" style={{ filter: "brightness(0.18) saturate(0.2) contrast(1.1)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-10 pb-20 w-full">
          <div className="grid grid-cols-2 items-end">
            <div>
              <p className="text-[9px] tracking-[0.6em] uppercase mb-8" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>
                Madrid · Talento verificado · Desde 2019
              </p>
              <h1 className="font-light leading-none mb-10" style={{ fontSize: "clamp(4rem, 11vw, 10rem)", letterSpacing: "-0.04em", lineHeight: "0.9" }}>
                El<br />talento<br /><em style={{ color: "rgba(240,237,232,0.18)" }}>que buscas.</em>
              </h1>
              <div className="flex items-center gap-10 mt-12">
                <Link href="/crafted/briefing" className="px-12 py-5 text-[9px] tracking-[0.35em] uppercase transition-all duration-300 hover:opacity-75"
                  style={{ backgroundColor: "#F0EDE8", color: "#000000", fontFamily: "Helvetica, sans-serif" }}>
                  Iniciar proyecto
                </Link>
                <Link href="/crafted/talentos" className="text-[9px] tracking-[0.35em] uppercase transition-all duration-300"
                  style={{ color: "rgba(240,237,232,0.35)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(240,237,232,0.15)", paddingBottom: "3px" }}>
                  Ver talentos
                </Link>
              </div>
            </div>
            <div className="flex justify-end gap-12">
              {[{ value: "12K", label: "Creativos" }, { value: "94%", label: "Match" }, { value: "48h", label: "Propuesta" }].map((s) => (
                <div key={s.label} className="text-right">
                  <div className="text-4xl font-light mb-1" style={{ letterSpacing: "-0.03em" }}>{s.value}</div>
                  <div className="text-[8px] tracking-[0.4em] uppercase" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talentos — grid editorial a pantalla completa */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-10 py-20">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[8px] tracking-[0.6em] uppercase mb-5" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>Seleccion editorial</p>
              <h2 className="text-6xl font-light" style={{ letterSpacing: "-0.03em" }}>Talentos.</h2>
            </div>
            <Link href="/crafted/talentos" className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(240,237,232,0.1)", paddingBottom: "2px" }}>
              Todos los perfiles
            </Link>
          </div>
        </div>

        {/* Grid sin padding — borde a borde */}
        <div className="grid grid-cols-3 gap-px" style={{ backgroundColor: "rgba(240,237,232,0.04)" }}>
          {[
            { nombre: "Sofia Reyes", rol: "Directora de Arte", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=90", rate: "850€/dia", tags: ["Branding", "Lujo"], height: "70vh" },
            { nombre: "Marco Vidal", rol: "Director de Fotografia", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90", rate: "1.200€/dia", tags: ["Moda", "Campañas"], height: "70vh" },
            { nombre: "Lucia Montero", rol: "Diseñadora UI/UX", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=90", rate: "650€/dia", tags: ["Digital", "Apps"], height: "70vh" },
          ].map((t) => (
            <Link href="/crafted/talentos" key={t.nombre} className="group relative overflow-hidden block" style={{ height: t.height }}>
              <img src={t.img} alt={t.nombre} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: "brightness(0.35) saturate(0.2) contrast(1.05)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(240,237,232,0.03)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[8px] tracking-[0.5em] uppercase mb-2" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{t.rol}</p>
                <h3 className="text-2xl font-light mb-4" style={{ letterSpacing: "-0.01em" }}>{t.nombre}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[8px] px-2.5 py-1 tracking-widest uppercase" style={{ border: "1px solid rgba(240,237,232,0.1)", color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{tag}</span>
                    ))}
                  </div>
                  <span className="text-sm font-light">{t.rate}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Segunda fila — 2 columnas grandes */}
        <div className="grid grid-cols-2 gap-px mt-px" style={{ backgroundColor: "rgba(240,237,232,0.04)" }}>
          {[
            { nombre: "Carlos Ibarra", rol: "Director de Video", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=90", rate: "950€/dia", tags: ["Motion", "Publicidad"], height: "55vh" },
            { nombre: "Ana Ferreira", rol: "Copywriter Creativa", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=90", rate: "450€/dia", tags: ["Naming", "Tono de marca"], height: "55vh" },
          ].map((t) => (
            <Link href="/crafted/talentos" key={t.nombre} className="group relative overflow-hidden block" style={{ height: t.height }}>
              <img src={t.img} alt={t.nombre} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: "brightness(0.3) saturate(0.2) contrast(1.05)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <p className="text-[8px] tracking-[0.5em] uppercase mb-2" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{t.rol}</p>
                <h3 className="text-3xl font-light mb-4" style={{ letterSpacing: "-0.01em" }}>{t.nombre}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[8px] px-2.5 py-1 tracking-widest uppercase" style={{ border: "1px solid rgba(240,237,232,0.1)", color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{tag}</span>
                    ))}
                  </div>
                  <span className="text-base font-light">{t.rate}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Todo en uno */}
      <section className="py-28 px-10" style={{ borderTop: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-24 items-center mb-24">
            <div>
              <p className="text-[8px] tracking-[0.6em] uppercase mb-8" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>La diferencia Crafted</p>
              <h2 className="text-6xl font-light mb-8 leading-none" style={{ letterSpacing: "-0.03em" }}>
                Todo.<br />En uno.
              </h2>
              <p className="text-lg font-light leading-relaxed" style={{ color: "rgba(240,237,232,0.35)", fontFamily: "Helvetica, sans-serif", lineHeight: "2" }}>
                Brief, seleccion de talento, seguimiento del proyecto y pago. Sin emails. Sin confusion. Sin intermediarios. Todo desde una sola plataforma.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=90" alt="Proceso"
                className="w-full object-cover" style={{ height: "500px", filter: "brightness(0.3) saturate(0.2)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)" }} />
            </div>
          </div>

          {/* Pasos */}
          <div className="grid grid-cols-5 gap-0" style={{ borderTop: "1px solid rgba(240,237,232,0.06)", borderLeft: "1px solid rgba(240,237,232,0.06)" }}>
            {[
              { num: "I", titulo: "Brief", desc: "5 minutos para describir tu proyecto." },
              { num: "II", titulo: "Match IA", desc: "Seleccionamos los 3 mejores perfiles." },
              { num: "III", titulo: "Propuestas", desc: "Recibes enfoques en 48 horas." },
              { num: "IV", titulo: "Gestion", desc: "Seguimiento en tiempo real." },
              { num: "V", titulo: "Entrega", desc: "Pago protegido. Garantia incluida." },
            ].map((p) => (
              <div key={p.num} className="p-8" style={{ borderRight: "1px solid rgba(240,237,232,0.06)", borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
                <div className="text-5xl font-light mb-6" style={{ color: "rgba(240,237,232,0.07)", fontFamily: "Georgia, serif" }}>{p.num}</div>
                <h3 className="text-lg font-light mb-3 tracking-wide">{p.titulo}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif", lineHeight: "1.9" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden" style={{ height: "60vh" }}>
        <img src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&q=90" alt="CTA"
          className="w-full h-full object-cover" style={{ filter: "brightness(0.12) saturate(0.2)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.7)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[8px] tracking-[0.6em] uppercase mb-8" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>Tu proximo proyecto</p>
            <h2 className="text-7xl font-light mb-12 leading-none" style={{ letterSpacing: "-0.04em" }}>
              Empieza<br /><em style={{ color: "rgba(240,237,232,0.2)" }}>hoy.</em>
            </h2>
            <Link href="/crafted/briefing" className="px-14 py-5 text-[9px] tracking-[0.4em] uppercase transition-all duration-300 hover:opacity-75"
              style={{ backgroundColor: "#F0EDE8", color: "#000000", fontFamily: "Helvetica, sans-serif" }}>
              Iniciar proyecto
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-10" style={{ borderTop: "1px solid rgba(240,237,232,0.05)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-[8px] tracking-[0.5em] uppercase" style={{ color: "rgba(240,237,232,0.12)", fontFamily: "Helvetica, sans-serif" }}>Crafted · Madrid · 2026</span>
          <span className="text-[8px] tracking-[0.4em] uppercase" style={{ color: "rgba(240,237,232,0.08)", fontFamily: "Helvetica, sans-serif" }}>Demo by Buhring</span>
        </div>
      </footer>
    </main>
  );
}