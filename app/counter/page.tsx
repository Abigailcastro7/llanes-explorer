import Link from "next/link";

export default function Counter() {
  return (
    <main style={{ backgroundColor: "#0f0d0a", color: "#F5F0E8", fontFamily: "Georgia, serif" }}>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6" style={{ backgroundColor: "rgba(15,13,10,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,169,110,0.1)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: "#C9A96E" }}>
              <span className="text-xs font-bold" style={{ color: "#C9A96E" }}>C</span>
            </div>
            <div>
              <div className="tracking-[0.3em] uppercase text-sm font-light" style={{ color: "#F5F0E8" }}>Counter</div>
              <div className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#C9A96E", opacity: 0.7 }}>Madrid · Cocina de Autor</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase">
            <Link href="/counter/menu" style={{ color: "rgba(245,240,232,0.5)" }}>Carta</Link>
            <a href="#nosotros" style={{ color: "rgba(245,240,232,0.5)" }}>Nosotros</a>
            <a href="#horarios" style={{ color: "rgba(245,240,232,0.5)" }}>Horarios</a>
          </div>
          <Link href="/counter/reservas" className="px-6 py-2.5 text-xs tracking-[0.2em] uppercase transition-all hover:scale-105"
            style={{ border: "1px solid #C9A96E", color: "#C9A96E" }}>
            Reservar
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80" alt="Counter Restaurante"
            className="w-full h-full object-cover" style={{ filter: "brightness(0.35) saturate(0.9)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(15,13,10,0.2) 0%, rgba(15,13,10,0.0) 40%, rgba(15,13,10,0.95) 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#C9A96E" }}>Madrid · Desde 2019</p>
            <h1 className="mb-8 font-light" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: "1.05", letterSpacing: "-0.02em", color: "#F5F0E8" }}>
              Cocina de<br /><em style={{ color: "#C9A96E" }}>autor.</em>
            </h1>
            <p className="text-lg font-light mb-10 leading-relaxed max-w-lg" style={{ color: "rgba(245,240,232,0.55)", fontFamily: "Georgia, serif" }}>
              Ingredientes de temporada, tecnica contemporanea y el mejor producto del Mediterraneo. Una experiencia unica en el corazon de Madrid.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/counter/reservas" className="px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all hover:scale-105"
                style={{ backgroundColor: "#C9A96E", color: "#0f0d0a", fontFamily: "Helvetica, sans-serif" }}>
                Reservar mesa
              </Link>
              <Link href="/counter/menu" className="text-sm tracking-[0.2em] uppercase transition-all"
                style={{ color: "rgba(245,240,232,0.5)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(245,240,232,0.2)", paddingBottom: "2px" }}>
                Ver carta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-8" style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "4.8", label: "Valoracion media" },
            { value: "450+", label: "Resenas positivas" },
            { value: "92%", label: "Ocupacion media" },
            { value: "5", label: "Anos en Madrid" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-light mb-1" style={{ color: "#C9A96E", fontFamily: "Georgia, serif" }}>{s.value}</div>
              <div className="text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(245,240,232,0.35)", fontFamily: "Helvetica, sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filosofia */}
      <section id="nosotros" className="py-28 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#C9A96E", fontFamily: "Helvetica, sans-serif" }}>Nuestra filosofia</p>
            <h2 className="text-4xl font-light mb-8 leading-tight" style={{ color: "#F5F0E8", letterSpacing: "-0.01em" }}>
              El producto,<br />por encima de todo.
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "rgba(245,240,232,0.5)", lineHeight: "1.8" }}>
              Trabajamos con productores locales de la peninsula iberica. Cada plato refleja la temporada, el territorio y el respeto por el ingrediente.
            </p>
            <p className="leading-relaxed mb-10" style={{ color: "rgba(245,240,232,0.4)", lineHeight: "1.8" }}>
              La tecnica esta al servicio del sabor, nunca al reves. Mediterraneo en esencia, contemporaneo en forma.
            </p>
            <Link href="/counter/menu" className="text-xs tracking-[0.3em] uppercase transition-all"
              style={{ color: "#C9A96E", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(201,169,110,0.4)", paddingBottom: "3px" }}>
              Explorar la carta
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
              "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
            ].map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden" style={{ height: "160px" }}>
                <img src={img} alt="Counter plato" className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.75) saturate(0.9)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platos estrella */}
      <section className="py-24 px-8" style={{ backgroundColor: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(201,169,110,0.08)", borderBottom: "1px solid rgba(201,169,110,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A96E", fontFamily: "Helvetica, sans-serif" }}>Temporada</p>
              <h2 className="text-4xl font-light" style={{ color: "#F5F0E8", letterSpacing: "-0.01em" }}>Platos estrella</h2>
            </div>
            <Link href="/counter/menu" className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(245,240,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>
              Carta completa
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Tartar de atun rojo", desc: "Aguacate, soja, sesamo tostado, chips de wonton", precio: "18", cat: "Entrada", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80" },
              { name: "Risotto de trufa negra", desc: "Carnaroli, parmesano 24 meses, trufa de Soria", precio: "24", cat: "Principal", img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&q=80" },
              { name: "Coulant de chocolate", desc: "Valrhona 70%, helado bourbon, caramelo salado", precio: "9", cat: "Postre", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80" },
            ].map((p) => (
              <div key={p.name} className="group overflow-hidden" style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}>
                <div className="relative h-56 overflow-hidden mb-5">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.75) saturate(0.85)" }} />
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase"
                    style={{ backgroundColor: "rgba(15,13,10,0.8)", color: "#C9A96E", fontFamily: "Helvetica, sans-serif" }}>
                    {p.cat}
                  </div>
                </div>
                <div className="pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-light" style={{ color: "#F5F0E8" }}>{p.name}</h3>
                    <span className="text-lg font-light ml-4" style={{ color: "#C9A96E" }}>{p.precio}{"€"}</span>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(245,240,232,0.35)", lineHeight: "1.6" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section id="horarios" className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A96E", fontFamily: "Helvetica, sans-serif" }}>Cuando encontrarnos</p>
            <h2 className="text-4xl font-light" style={{ color: "#F5F0E8", letterSpacing: "-0.01em" }}>Horarios</h2>
          </div>
          <div className="flex flex-col gap-px" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
            {[
              { dia: "Lunes — Miercoles", horario: "13:00 – 16:00 · 20:00 – 23:00" },
              { dia: "Jueves — Viernes", horario: "13:00 – 16:30 · 20:00 – 23:30" },
              { dia: "Sabado", horario: "13:00 – 17:00 · 20:00 – 00:00" },
              { dia: "Domingo", horario: "13:00 – 17:00" },
            ].map((h) => (
              <div key={h.dia} className="flex items-center justify-between py-5" style={{ borderBottom: "1px solid rgba(201,169,110,0.08)" }}>
                <span className="text-sm tracking-[0.1em]" style={{ color: "rgba(245,240,232,0.6)", fontFamily: "Helvetica, sans-serif" }}>{h.dia}</span>
                <span className="text-sm font-light" style={{ color: "#C9A96E" }}>{h.horario}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(245,240,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Direccion</p>
            <p className="text-sm font-light" style={{ color: "rgba(245,240,232,0.5)" }}>Calle Gran Via 42, Madrid · 610 86 55 00</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8" style={{ backgroundColor: "rgba(201,169,110,0.04)", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "#C9A96E", fontFamily: "Helvetica, sans-serif" }}>Una ocasion especial</p>
          <h2 className="text-4xl font-light mb-6 leading-tight" style={{ color: "#F5F0E8", letterSpacing: "-0.01em" }}>
            Cumpleanos, aniversarios,<br />cenas de empresa.
          </h2>
          <p className="mb-10 font-light" style={{ color: "rgba(245,240,232,0.45)", lineHeight: "1.8" }}>
            Nos adaptamos a lo que necesitas. Menus personalizados, maridaje y atencion exclusiva para grupos.
          </p>
          <Link href="/counter/reservas" className="inline-flex px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all hover:scale-105"
            style={{ backgroundColor: "#C9A96E", color: "#0f0d0a", fontFamily: "Helvetica, sans-serif" }}>
            Reservar ahora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8" style={{ borderTop: "1px solid rgba(201,169,110,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border flex items-center justify-center" style={{ borderColor: "rgba(201,169,110,0.4)" }}>
              <span className="text-[10px]" style={{ color: "#C9A96E" }}>C</span>
            </div>
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>Counter · Madrid</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>
            Calle Gran Via 42, Madrid
          </p>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.15)", fontFamily: "Helvetica, sans-serif" }}>
            Demo by Buhring
          </p>
        </div>
      </footer>
    </main>
  );
}