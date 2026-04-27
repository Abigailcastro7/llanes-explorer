import Link from "next/link";

export default function Crafted() {
  return (
    <main style={{ backgroundColor: "#000000", color: "#F0EDE8", fontFamily: "Georgia, 'Times New Roman', serif" }}>

      <header className="fixed top-0 left-0 right-0 z-50 py-6" style={{ backgroundColor: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
        <nav className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <div>
            <div className="text-xl tracking-[0.5em] uppercase font-light" style={{ color: "#F0EDE8" }}>Crafted</div>
            <div className="text-[9px] tracking-[0.3em] uppercase mt-0.5" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>Talento Creativo · Madrid</div>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(240,237,232,0.4)" }}>
            <Link href="/crafted/talentos" className="hover:text-white transition-colors">Talentos</Link>
            <Link href="/crafted/proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <Link href="/crafted/briefing" className="hover:text-white transition-colors">Briefing</Link>
          </div>
          <Link href="/crafted/briefing" className="px-7 py-3 text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-white hover:text-black"
            style={{ border: "1px solid rgba(240,237,232,0.3)", color: "#F0EDE8", fontFamily: "Helvetica, sans-serif" }}>
            Iniciar proyecto
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="Crafted"
            className="w-full h-full object-cover" style={{ filter: "brightness(0.1) saturate(0.3)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.99) 50%, rgba(0,0,0,0.5) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full pt-32">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-10" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>
              Todo en uno — Talento · Briefing · Proyecto · Pago
            </p>
            <h1 className="font-light leading-none mb-10" style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)", letterSpacing: "-0.03em", color: "#F0EDE8" }}>
              El talento<br />que tu marca<br /><em style={{ color: "rgba(240,237,232,0.2)" }}>necesita.</em>
            </h1>
            <p className="text-lg font-light mb-14 leading-relaxed" style={{ color: "rgba(240,237,232,0.4)", maxWidth: "500px", fontFamily: "Helvetica, sans-serif", lineHeight: "1.9" }}>
              Encuentra, contrata y gestiona al mejor talento creativo de Madrid. Todo desde un solo lugar. Sin emails. Sin intermediarios.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/crafted/briefing" className="px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all hover:opacity-80"
                style={{ backgroundColor: "#F0EDE8", color: "#000000", fontFamily: "Helvetica, sans-serif" }}>
                Iniciar proyecto
              </Link>
              <Link href="/crafted/talentos" className="text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(240,237,232,0.35)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(240,237,232,0.15)", paddingBottom: "2px" }}>
                Ver talentos
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 right-10 flex-col gap-6 hidden md:flex text-right">
          {[{ value: "12K", label: "Creativos" }, { value: "94%", label: "Match perfecto" }, { value: "48h", label: "Primera propuesta" }].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-light" style={{ color: "#F0EDE8", letterSpacing: "-0.02em" }}>{s.value}</div>
              <div className="text-[9px] tracking-[0.3em] uppercase mt-0.5" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TODO EN UNO — la propuesta diferenciadora */}
      <section className="py-24 px-10" style={{ borderTop: "1px solid rgba(240,237,232,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[9px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>La diferencia Crafted</p>
            <h2 className="text-5xl font-light mb-6" style={{ letterSpacing: "-0.02em" }}>Todo en un solo lugar.</h2>
            <p className="max-w-xl mx-auto font-light" style={{ color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif", lineHeight: "1.9" }}>
              Desde el primer brief hasta el pago final. Sin salir de la plataforma. Sin emails perdidos. Sin confusion.
            </p>
          </div>

          {/* Flujo visual */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 mb-20">
            {[
              { num: "01", icon: "✦", titulo: "Brief", desc: "Describes tu proyecto en 5 minutos." },
              { num: "02", icon: "→", titulo: "Match", desc: "IA selecciona los 3 mejores perfiles." },
              { num: "03", icon: "◈", titulo: "Propuestas", desc: "Recibes enfoques en 48 horas." },
              { num: "04", icon: "⊕", titulo: "Gestion", desc: "Seguimiento del proyecto en tiempo real." },
              { num: "05", icon: "◎", titulo: "Entrega", desc: "Pago protegido. Entrega garantizada." },
            ].map((p, i) => (
              <div key={p.num} className="p-8 relative" style={{ borderLeft: i === 0 ? "1px solid rgba(240,237,232,0.06)" : "none", borderRight: "1px solid rgba(240,237,232,0.06)", borderTop: "1px solid rgba(240,237,232,0.06)", borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
                <div className="text-[9px] tracking-[0.4em] uppercase mb-4" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>{p.num}</div>
                <div className="text-2xl mb-4 font-light" style={{ color: "rgba(240,237,232,0.3)" }}>{p.icon}</div>
                <h3 className="text-lg font-light mb-3 tracking-wide">{p.titulo}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif", lineHeight: "1.8" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA central */}
          <div className="text-center">
            <Link href="/crafted/briefing" className="inline-flex px-12 py-5 text-sm tracking-[0.3em] uppercase transition-all hover:opacity-80"
              style={{ backgroundColor: "#F0EDE8", color: "#000000", fontFamily: "Helvetica, sans-serif" }}>
              Comenzar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Talentos */}
      <section className="py-24 px-10" style={{ borderTop: "1px solid rgba(240,237,232,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Seleccion editorial</p>
              <h2 className="text-5xl font-light" style={{ letterSpacing: "-0.02em" }}>Talentos<br />destacados</h2>
            </div>
            <Link href="/crafted/talentos" className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(240,237,232,0.12)", paddingBottom: "2px" }}>
              Ver todos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(240,237,232,0.06)" }}>
            {[
              { nombre: "Sofia Reyes", rol: "Directora de Arte", ciudad: "Madrid", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80", proyectos: 48, rate: "850€/dia", tags: ["Branding", "Editorial", "Lujo"], disponible: true },
              { nombre: "Marco Vidal", rol: "Director de Fotografia", ciudad: "Barcelona", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", proyectos: 72, rate: "1.200€/dia", tags: ["Moda", "Campañas", "Retrato"], disponible: true },
              { nombre: "Lucia Montero", rol: "Diseñadora UI/UX", ciudad: "Madrid", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80", proyectos: 35, rate: "650€/dia", tags: ["Digital", "Apps", "Branding"], disponible: false },
            ].map((t) => (
              <Link href="/crafted/talentos" key={t.nombre} className="group block" style={{ backgroundColor: "#000000" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img src={t.img} alt={t.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.45) saturate(0.3)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.1) 50%)" }} />
                  <div className="absolute top-4 right-4">
                    <span className="text-[9px] px-2.5 py-1 tracking-widest uppercase" style={{ backgroundColor: t.disponible ? "rgba(240,237,232,0.1)" : "rgba(255,255,255,0.04)", color: t.disponible ? "#F0EDE8" : "rgba(240,237,232,0.3)", border: "1px solid rgba(240,237,232,0.12)", fontFamily: "Helvetica, sans-serif" }}>
                      {t.disponible ? "Disponible" : "Ocupado"}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: "rgba(240,237,232,0.35)", fontFamily: "Helvetica, sans-serif" }}>{t.rol} · {t.ciudad}</p>
                    <h3 className="text-2xl font-light mb-3" style={{ letterSpacing: "-0.01em" }}>{t.nombre}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {t.tags.map((tag) => (
                        <span key={tag} className="text-[9px] px-2 py-0.5 tracking-widest uppercase" style={{ border: "1px solid rgba(240,237,232,0.12)", color: "rgba(240,237,232,0.35)", fontFamily: "Helvetica, sans-serif" }}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>{t.proyectos} proyectos</span>
                      <span className="text-base font-light" style={{ color: "#F0EDE8" }}>{t.rate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-20 px-10" style={{ borderTop: "1px solid rgba(240,237,232,0.06)", borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[9px] tracking-[0.5em] uppercase mb-12" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Disciplinas</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-0" style={{ borderLeft: "1px solid rgba(240,237,232,0.06)" }}>
            {[
              { cat: "Fotografia", num: "2.4K" },
              { cat: "Direccion Arte", num: "890" },
              { cat: "UI/UX", num: "1.8K" },
              { cat: "Video & Motion", num: "1.2K" },
              { cat: "Copywriting", num: "760" },
              { cat: "Branding", num: "1.1K" },
            ].map((c) => (
              <Link href="/crafted/talentos" key={c.cat} className="group p-8 transition-all hover:bg-white/5"
                style={{ borderRight: "1px solid rgba(240,237,232,0.06)" }}>
                <div className="text-2xl font-light mb-2" style={{ color: "rgba(240,237,232,0.15)", letterSpacing: "-0.02em" }}>{c.num}</div>
                <div className="text-sm font-light" style={{ color: "rgba(240,237,232,0.5)" }}>{c.cat}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[9px] tracking-[0.5em] uppercase mb-8" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Empieza hoy</p>
          <h2 className="font-light mb-8 leading-none" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.03em" }}>
            Tu proximo<br />proyecto<br /><em style={{ color: "rgba(240,237,232,0.2)" }}>te espera.</em>
          </h2>
          <div className="flex items-center justify-center gap-8 mt-14">
            <Link href="/crafted/briefing" className="px-12 py-5 text-sm tracking-[0.3em] uppercase transition-all hover:opacity-80"
              style={{ backgroundColor: "#F0EDE8", color: "#000000", fontFamily: "Helvetica, sans-serif" }}>
              Iniciar proyecto
            </Link>
            <Link href="/crafted/talentos" className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(240,237,232,0.12)", paddingBottom: "2px" }}>
              Explorar talentos
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-10 px-10" style={{ borderTop: "1px solid rgba(240,237,232,0.06)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-[10px] tracking-[0.4em] uppercase" style={{ color: "rgba(240,237,232,0.15)", fontFamily: "Helvetica, sans-serif" }}>Crafted · Madrid · 2026</span>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(240,237,232,0.1)", fontFamily: "Helvetica, sans-serif" }}>Demo by Buhring</span>
        </div>
      </footer>
    </main>
  );
}