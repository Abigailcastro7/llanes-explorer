import Link from "next/link";

export default function Mitais() {
  return (
    <main style={{ backgroundColor: "#FAFAF8", color: "#0A0A0A", fontFamily: "Georgia, serif" }}>

      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(250,250,248,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="text-center">
            <div className="text-2xl tracking-[0.5em] uppercase font-light" style={{ color: "#0A0A0A" }}>Mitais</div>
            <div className="text-[8px] tracking-[0.4em] uppercase mt-0.5" style={{ color: "rgba(10,10,10,0.35)", fontFamily: "Helvetica, sans-serif" }}>Moda Guarani · Paraguay</div>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(10,10,10,0.45)" }}>
            <Link href="/mitais/coleccion" className="hover:text-black transition-colors">Coleccion</Link>
            <Link href="/mitais/coleccion" className="hover:text-black transition-colors">Nosotros</Link>
            <Link href="/mitais/carrito" className="hover:text-black transition-colors">Contacto</Link>
          </div>
          <Link href="/mitais/coleccion" className="px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase transition-all hover:bg-black hover:text-white"
            style={{ border: "1px solid rgba(10,10,10,0.3)", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif" }}>
            Comprar
          </Link>
        </nav>
      </header>

      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1600&q=90" alt="Mitais"
            className="w-full h-full object-cover object-top" style={{ filter: "brightness(0.85) saturate(0.9)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(250,250,248,0.0) 30%, rgba(250,250,248,0.95) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
          <p className="text-[9px] tracking-[0.6em] uppercase mb-4" style={{ color: "rgba(10,10,10,0.45)", fontFamily: "Helvetica, sans-serif" }}>Nueva coleccion 2026</p>
          <h1 className="font-light leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", letterSpacing: "-0.03em", color: "#0A0A0A" }}>
            El alma guarani<br /><em style={{ color: "#C41E3A" }}>en tu piel.</em>
          </h1>
          <p className="text-base font-light mb-8 leading-relaxed" style={{ color: "rgba(10,10,10,0.5)", fontFamily: "Helvetica, sans-serif", maxWidth: "420px", lineHeight: "1.8" }}>
            Bordados nanduti y arte guarani fusionados con moda urbana contemporanea. Disenado en Paraguay, hecho para el mundo.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mitais/coleccion" className="px-10 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
              style={{ backgroundColor: "#0A0A0A", color: "#FAFAF8", fontFamily: "Helvetica, sans-serif" }}>
              Ver coleccion
            </Link>
            <Link href="/mitais/coleccion" className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(10,10,10,0.4)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(10,10,10,0.2)", paddingBottom: "2px" }}>
              Sobre la marca
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>Piezas unicas</p>
              <h2 className="text-5xl font-light" style={{ letterSpacing: "-0.02em" }}>Coleccion Primavera 2026</h2>
            </div>
            <Link href="/mitais/coleccion" className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(10,10,10,0.35)", fontFamily: "Helvetica, sans-serif", borderBottom: "1px solid rgba(10,10,10,0.15)", paddingBottom: "2px" }}>Ver todo</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(10,10,10,0.06)" }}>
            {[
              { nombre: "Top Nanduti Blanco", precio: "290.000 Gs", categoria: "Tops", img: "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=600&q=90", nuevo: true },
              { nombre: "Vestido Guarani Azul", precio: "450.000 Gs", categoria: "Vestidos", img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=90", nuevo: false },
              { nombre: "Blusa Tejido Nanduti", precio: "320.000 Gs", categoria: "Blusas", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=90", nuevo: true },
            ].map((p) => (
              <Link href="/mitais/coleccion" key={p.nombre} className="group block" style={{ backgroundColor: "#FAFAF8" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img src={p.img} alt={p.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.92) saturate(0.85)" }} />
                  {p.nuevo && (
                    <div className="absolute top-4 left-4 px-3 py-1 text-[9px] tracking-[0.3em] uppercase"
                      style={{ backgroundColor: "#C41E3A", color: "#FAFAF8", fontFamily: "Helvetica, sans-serif" }}>Nuevo</div>
                  )}
                </div>
                <div className="p-5" style={{ borderBottom: "1px solid rgba(10,10,10,0.06)" }}>
                  <p className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>{p.categoria}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-light">{p.nombre}</h3>
                    <span className="text-sm font-light" style={{ fontFamily: "Helvetica, sans-serif" }}>{p.precio}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(250,250,248,0.3)", fontFamily: "Helvetica, sans-serif" }}>Nuestra esencia</p>
            <h2 className="text-5xl font-light mb-8 leading-tight" style={{ color: "#FAFAF8", letterSpacing: "-0.02em" }}>
              El nanduti.<br />El alma de<br /><em style={{ color: "#C41E3A" }}>Paraguay.</em>
            </h2>
            <p className="text-base font-light leading-relaxed mb-6" style={{ color: "rgba(250,250,248,0.45)", fontFamily: "Helvetica, sans-serif", lineHeight: "1.9" }}>
              El nanduti es el encaje mas bello de America Latina. Tejido a mano por artesanas paraguayas durante siglos, cada pieza de Mitais lleva este arte ancestral fusionado con diseno contemporaneo.
            </p>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: "rgba(250,250,248,0.35)", fontFamily: "Helvetica, sans-serif", lineHeight: "1.9" }}>
              Cada prenda es unica. Cada bordado cuenta una historia. Llevas en tu piel el orgullo de Paraguay.
            </p>
            <Link href="/mitais/coleccion" className="inline-flex px-8 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
              style={{ border: "1px solid rgba(250,250,248,0.25)", color: "#FAFAF8", fontFamily: "Helvetica, sans-serif" }}>
              Descubrir la coleccion
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
              "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
              "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80",
              "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=400&q=80",
            ].map((img, i) => (
              <div key={i} className="rounded-lg overflow-hidden" style={{ height: "180px" }}>
                <img src={img} alt="Mitais" className="w-full h-full object-cover" style={{ filter: "brightness(0.6) saturate(0.7)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8" style={{ backgroundColor: "#1B3A6B" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[9px] tracking-[0.5em] uppercase mb-6" style={{ color: "rgba(250,250,248,0.3)", fontFamily: "Helvetica, sans-serif" }}>Siguenos</p>
          <h2 className="text-5xl font-light mb-6 leading-tight" style={{ color: "#FAFAF8", letterSpacing: "-0.02em" }}>@mitais_oficial</h2>
          <p className="text-base font-light mb-10" style={{ color: "rgba(250,250,248,0.45)", fontFamily: "Helvetica, sans-serif" }}>68K personas ya forman parte de nuestra comunidad. Comparte tu look con #Mitais.</p>
          <Link href="/mitais/coleccion" className="inline-flex px-10 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
            style={{ backgroundColor: "#FAFAF8", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif" }}>
            Comprar ahora
          </Link>
        </div>
      </section>

      <footer className="py-10 px-8" style={{ borderTop: "1px solid rgba(10,10,10,0.08)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-lg tracking-[0.4em] uppercase font-light mb-1">Mitais</div>
            <div className="text-[8px] tracking-[0.3em] uppercase" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>Moda Guarani · San Lorenzo, Paraguay</div>
          </div>
          <span className="text-[8px] tracking-[0.3em] uppercase" style={{ color: "rgba(10,10,10,0.2)", fontFamily: "Helvetica, sans-serif" }}>Demo by Buhring</span>
        </div>
      </footer>
    </main>
  );
}