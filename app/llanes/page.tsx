import Link from "next/link";

export default function LlanesExplorer() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#070d0a", color: "#f0f4f2" }}>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300"
        style={{ backgroundColor: "rgba(7,13,10,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(82,183,136,0.1)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🍀</span>
            <div>
              <div className="font-semibold text-base tracking-wide" style={{ color: "#f0f4f2" }}>Llanes Explorer</div>
              <div className="text-[10px] tracking-widest uppercase" style={{ color: "#52B788", opacity: 0.7 }}>by Joel Llanes · Paraguay 🇵🇾</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/llanes/destinos" style={{ color: "rgba(240,244,242,0.6)" }}>Destinos</Link>
            <Link href="/llanes/rutas" style={{ color: "rgba(240,244,242,0.6)" }}>Rutas</Link>
            <Link href="/llanes/premium" style={{ color: "rgba(240,244,242,0.6)" }}>Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ backgroundColor: "rgba(82,183,136,0.15)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)" }}>
            ✦ Unirme
          </Link>
        </nav>
      </header>

      {/* Hero con imagen de Paraguay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo - Saltos del Monday, Paraguay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?w=1600&q=80"
            alt="Naturaleza Paraguay"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.25) saturate(1.2)" }}
          />
        </div>
        {/* Gradientes sobre la imagen */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,13,10,0.3) 0%, rgba(7,13,10,0.1) 40%, rgba(7,13,10,0.8) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(82,183,136,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase mb-10 font-mono"
            style={{ border: "1px solid rgba(144,224,239,0.25)", color: "rgba(144,224,239,0.8)", backgroundColor: "rgba(7,13,10,0.4)", backdropFilter: "blur(10px)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#52B788" }} />
            El referente de viajes en Paraguay · 126K seguidores
          </div>

          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6" style={{ color: "#f0f4f2", letterSpacing: "-0.02em" }}>
            Descubre Paraguay<br />
            <span className="font-semibold italic" style={{ color: "#52B788" }}>con Joel</span>
          </h1>

          <p className="text-xl max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "rgba(240,244,242,0.65)" }}>
            Destinos auténticos, rutas exclusivas e itinerarios diseñados para quienes viajan con intención y buscan experiencias reales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link href="/llanes/destinos" className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2", boxShadow: "0 0 30px rgba(82,183,136,0.2)" }}>
              Explorar destinos →
            </Link>
            <Link href="/llanes/premium" className="px-8 py-4 rounded-full font-medium transition-all hover:border-opacity-60"
              style={{ border: "1px solid rgba(240,244,242,0.2)", color: "rgba(240,244,242,0.7)", backgroundColor: "rgba(7,13,10,0.4)", backdropFilter: "blur(10px)" }}>
              ✦ Acceso Premium
            </Link>
          </div>

          {/* Stats con glassmorphism */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[{ value: "120+", label: "Destinos curados" }, { value: "48", label: "Rutas exclusivas" }, { value: "4.9★", label: "Rating comunidad" }].map((s) => (
              <div key={s.label} className="p-4 rounded-2xl text-center"
                style={{ backgroundColor: "rgba(7,13,10,0.5)", backdropFilter: "blur(20px)", border: "1px solid rgba(82,183,136,0.15)" }}>
                <div className="text-2xl font-semibold" style={{ color: "#52B788" }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(240,244,242,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(240,244,242,0.2)" }}>
          <span className="text-xs font-mono tracking-widest uppercase">Descubrir</span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(82,183,136,0.4), transparent)" }} />
        </div>
      </section>

      {/* Destinos destacados */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(144,224,239,0.5)" }}>Selección de Joel</p>
              <h2 className="text-3xl font-light" style={{ color: "#f0f4f2" }}>Destinos <span className="font-semibold" style={{ color: "#52B788" }}>imperdibles</span></h2>
            </div>
            <Link href="/llanes/destinos" className="text-sm" style={{ color: "#52B788" }}>Ver todos →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Paraguarí", tag: "Naturaleza", emoji: "🌿", rating: "4.9",
                desc: "Cerros, bosques y saltos de agua. La joya más cercana a Asunción según Joel.",
                img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
                highlights: ["Cerro Pero", "Salto Piraretá", "Carapeguá"]
              },
              {
                name: "Encarnación", tag: "Verano", emoji: "🏖️", rating: "4.8",
                desc: "Las mejores playas del río Paraguay y el carnaval más vibrante del país.",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
                highlights: ["Costa Sur", "Carnaval", "Trinidad"]
              },
              {
                name: "Itaipu", tag: "Imponente", emoji: "⚡", rating: "4.9",
                desc: "La represa más grande del mundo. Una maravilla de la ingeniería humana.",
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
                highlights: ["Represa", "Museo", "Salto Monday"]
              },
            ].map((d) => (
              <Link href="/llanes/destinos" key={d.name} className="group rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(82,183,136,0.1)" }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.6) saturate(1.1)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,13,10,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "rgba(144,224,239,0.7)" }}>{d.tag}</span>
                    <span className="text-xs font-medium" style={{ color: "#52B788" }}>★ {d.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "#f0f4f2" }}>{d.name}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(240,244,242,0.4)" }}>{d.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.highlights.map((h) => (
                      <span key={h} className="text-xs px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "rgba(82,183,136,0.08)", color: "rgba(240,244,242,0.45)", border: "1px solid rgba(82,183,136,0.12)" }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Paraguay */}
      <section className="py-24 px-8" style={{ backgroundColor: "rgba(82,183,136,0.03)", borderTop: "1px solid rgba(82,183,136,0.08)", borderBottom: "1px solid rgba(82,183,136,0.08)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "rgba(144,224,239,0.5)" }}>Por qué Paraguay</p>
              <h2 className="text-3xl font-light mb-6" style={{ color: "#f0f4f2" }}>
                El país más <span className="font-semibold" style={{ color: "#52B788" }}>inexplorado</span><br />de Sudamérica
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "rgba(240,244,242,0.45)" }}>
                Paraguay es uno de los últimos destinos auténticos de Sudamérica. Cascadas escondidas, fauna salvaje, playas de río paradisíacas y una cultura guaraní viva que pocos conocen.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "rgba(240,244,242,0.4)" }}>
                Joel lleva años recorriendo cada rincón del país y del mundo, compartiendo lo que los tours tradicionales nunca te muestran.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "17", label: "Departamentos" },
                  { value: "800+", label: "Especies de aves" },
                  { value: "1,200km", label: "Costa fluvial" },
                  { value: "#1", label: "Referente Joel" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-xl"
                    style={{ backgroundColor: "rgba(82,183,136,0.06)", border: "1px solid rgba(82,183,136,0.1)" }}>
                    <div className="text-xl font-semibold" style={{ color: "#52B788" }}>{s.value}</div>
                    <div className="text-xs mt-1" style={{ color: "rgba(240,244,242,0.3)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80",
                "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80",
                "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
                "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80",
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden" style={{ height: "140px" }}>
                  <img src={img} alt="Paraguay" className="w-full h-full object-cover" style={{ filter: "brightness(0.7) saturate(1.1)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Joel */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-mono tracking-widest uppercase mb-6" style={{ color: "rgba(144,224,239,0.5)" }}>Quién es Joel</p>
            <h2 className="text-3xl font-light mb-6" style={{ color: "#f0f4f2" }}>
              El creador que ama<br /><span className="font-semibold" style={{ color: "#52B788" }}>su país</span>
            </h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(240,244,242,0.45)" }}>
              Desde Areguá, Joel Llanes recorre cada rincón de Paraguay y el mundo compartiendo experiencias auténticas. Con más de 126K seguidores en Instagram y 193K en TikTok, es el creador de viajes más seguido del país.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(240,244,242,0.35)" }}>
              "En 2015 hice mi primer viaje al exterior. Ese viaje me abrió la mente de una manera increíble. Desde ahí vine con hambre de viajar y de mostrar lo que Paraguay tiene." — Joel Llanes
            </p>
            <div className="flex flex-wrap gap-3">
              {["🇵🇾 Areguá, Paraguay", "📸 126K Instagram", "🎵 193K TikTok", "✈️ Desde 2018"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm"
                  style={{ backgroundColor: "rgba(82,183,136,0.06)", color: "rgba(240,244,242,0.5)", border: "1px solid rgba(82,183,136,0.1)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl relative overflow-hidden"
          style={{ backgroundColor: "rgba(82,183,136,0.05)", border: "1px solid rgba(82,183,136,0.15)" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(82,183,136,0.08) 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "rgba(144,224,239,0.5)" }}>Comunidad Premium</p>
            <h2 className="text-3xl font-light mb-4" style={{ color: "#f0f4f2" }}>Viaja con intención</h2>
            <p className="mb-10 leading-relaxed max-w-lg mx-auto" style={{ color: "rgba(240,244,242,0.4)" }}>
              Accede a las rutas que Joel no publica en redes, itinerarios detallados y una comunidad de viajeros apasionados por Paraguay.
            </p>
            <Link href="/llanes/premium" className="inline-flex px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "#2D6A4F", color: "#f0f4f2", boxShadow: "0 0 30px rgba(82,183,136,0.15)" }}>
              Ver planes Premium →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center" style={{ borderTop: "1px solid rgba(82,183,136,0.08)" }}>
        <p className="text-xs" style={{ color: "rgba(240,244,242,0.2)" }}>
          © 2026 Llanes Explorer · <Link href="/" className="hover:opacity-60 transition-opacity">Demo by Buhring</Link>
        </p>
      </footer>
    </main>
  );
}
