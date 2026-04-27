import Link from "next/link";

export default function Mitais() {
  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#F5F5F5", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(10,10,10,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold tracking-[0.3em] uppercase" style={{ color: "#F5F5F5" }}>Mitais</div>
            <div className="text-[8px] tracking-[0.4em] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Helvetica, sans-serif" }}>Paraguay · Est. 1811</div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(255,255,255,0.4)" }}>
            <Link href="/mitais/coleccion" className="hover:text-white transition-colors">Coleccion</Link>
            <Link href="/mitais/coleccion" className="hover:text-white transition-colors">Drops</Link>
            <Link href="/mitais/carrito" className="hover:text-white transition-colors">Carrito</Link>
          </div>
          <Link href="/mitais/coleccion" className="px-6 py-2.5 text-[10px] tracking-[0.25em] uppercase transition-all hover:bg-white hover:text-black"
            style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#F5F5F5", fontFamily: "Helvetica, sans-serif" }}>
            Shop
          </Link>
        </nav>
      </header>

      {/* Hero — full screen con foto editorial */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&q=90" alt="Mitais"
            className="w-full h-full object-cover object-top" style={{ filter: "brightness(0.55) contrast(1.1) saturate(0.8)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.0) 30%, rgba(10,10,10,0.85) 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, #D50000, #FFFFFF, #0033A0)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 w-full">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Helvetica, sans-serif" }}>
                Nueva coleccion · Paraguay 2026
              </p>
              <h1 className="font-black leading-none mb-6 uppercase" style={{ fontSize: "clamp(4rem, 11vw, 10rem)", letterSpacing: "-0.02em", color: "#F5F5F5" }}>
                Hecho en<br /><span style={{ color: "#D50000" }}>Paraguay.</span>
              </h1>
              <div className="flex items-center gap-6">
                <Link href="/mitais/coleccion" className="px-10 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
                  style={{ backgroundColor: "#F5F5F5", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif", fontWeight: "700" }}>
                  Ver coleccion
                </Link>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Helvetica, sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#D50000" }} />
                  Stock limitado
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-5 text-right">
              {[{ value: "68K", label: "Seguidores" }, { value: "2026", label: "Nueva temporada" }, { value: "PY", label: "Made in Paraguay" }].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black" style={{ color: "#F5F5F5", letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div className="text-[8px] tracking-[0.4em] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Helvetica, sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Productos — grid editorial oscuro */}
      <section className="py-20 px-8" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Helvetica, sans-serif" }}>Drop 01 · 2026</p>
              <h2 className="text-5xl font-black uppercase" style={{ letterSpacing: "-0.02em" }}>Nueva<br />temporada</h2>
            </div>
            <Link href="/mitais/coleccion" className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2px" }}>
              Ver todo
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { nombre: "Remera Paraguay 1811", precio: "290.000 Gs", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=90", tag: "Nuevo", color: "#D50000" },
              { nombre: "Polo Crochet PY", precio: "320.000 Gs", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&q=90", tag: "Agotandose", color: "#0033A0" },
              { nombre: "Jersey Rayas Rojo", precio: "350.000 Gs", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&q=90", tag: "Nuevo", color: "#D50000" },
              { nombre: "Remera Azul 1811", precio: "290.000 Gs", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=90", tag: "", color: "#0033A0" },
            ].map((p) => (
              <Link href="/mitais/coleccion" key={p.nombre} className="group block">
                <div className="relative overflow-hidden mb-3" style={{ aspectRatio: "3/4" }}>
                  <img src={p.img} alt={p.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.8) saturate(0.7) contrast(1.05)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)" }} />
                  {p.tag && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-bold"
                      style={{ backgroundColor: p.color, color: "#F5F5F5", fontFamily: "Helvetica, sans-serif" }}>
                      {p.tag}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1 uppercase tracking-wide">{p.nombre}</h3>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Helvetica, sans-serif" }}>{p.precio}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner identidad — Paraguay */}
      <section className="relative overflow-hidden" style={{ height: "60vh" }}>
        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&q=90" alt="Mitais"
          className="w-full h-full object-cover" style={{ filter: "brightness(0.3) saturate(0.5) contrast(1.1)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.5)" }} />
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, #D50000, #FFFFFF, #0033A0)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, #D50000, #FFFFFF, #0033A0)" }} />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-[9px] tracking-[0.6em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Helvetica, sans-serif" }}>Nuestra identidad</p>
            <h2 className="font-black uppercase leading-none mb-6" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}>
              Orgullo<br /><span style={{ color: "#D50000" }}>Paraguayo</span>
            </h2>
            <p className="text-base mb-8 max-w-lg mx-auto font-light" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Helvetica, sans-serif", lineHeight: "1.8" }}>
              Cada prenda lleva la bandera, la historia y el orgullo de Paraguay. Ropa que cuenta quien eres.
            </p>
            <Link href="/mitais/coleccion" className="inline-flex px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-bold transition-all hover:opacity-80"
              style={{ backgroundColor: "#D50000", color: "#F5F5F5", fontFamily: "Helvetica, sans-serif" }}>
              Ver coleccion completa
            </Link>
          </div>
        </div>
      </section>

      {/* Grid de categorias */}
      <section className="py-20 px-8" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-[9px] tracking-[0.5em] uppercase mb-10" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Helvetica, sans-serif" }}>Categorias</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { cat: "Remeras", desc: "Ediciones limitadas con identidad paraguaya", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=90", color: "#D50000" },
              { cat: "Polos & Crochet", desc: "Tejidos artesanales con estilo urbano", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=90", color: "#0033A0" },
              { cat: "Jerseys", desc: "Inspirados en el futbol y la calle", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=90", color: "#D50000" },
            ].map((c) => (
              <Link href="/mitais/coleccion" key={c.cat} className="group relative overflow-hidden" style={{ height: "400px" }}>
                <img src={c.img} alt={c.cat} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.45) saturate(0.6) contrast(1.05)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.1) 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-8 h-1 mb-3" style={{ backgroundColor: c.color }} />
                  <h3 className="text-2xl font-black uppercase mb-1" style={{ letterSpacing: "-0.01em" }}>{c.cat}</h3>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Helvetica, sans-serif" }}>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Instagram */}
      <section className="py-16 px-8" style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Helvetica, sans-serif" }}>Siguenos</p>
            <h2 className="text-4xl font-black uppercase" style={{ letterSpacing: "-0.02em" }}>@mitais_oficial</h2>
            <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Helvetica, sans-serif" }}>68K personas que llevan a Paraguay en su piel.</p>
          </div>
          <Link href="/mitais/coleccion" className="px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-bold transition-all hover:opacity-80"
            style={{ backgroundColor: "#F5F5F5", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif" }}>
            Comprar ahora
          </Link>
        </div>
      </section>

      <footer className="py-8 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-base font-black uppercase tracking-[0.3em]">Mitais</span>
            <div className="h-4 w-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
            <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Helvetica, sans-serif" }}>San Lorenzo, Paraguay</span>
          </div>
          <span className="text-[8px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.12)", fontFamily: "Helvetica, sans-serif" }}>Demo by Buhring</span>
        </div>
      </footer>
    </main>
  );
}