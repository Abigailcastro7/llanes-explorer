import Link from "next/link";

const demos = [
  {
    slug: "llanes",
    name: "Llanes Explorer",
    tagline: "Plataforma de viajes y experiencias",
    desc: "Destinos curados, rutas exclusivas, cabanas recomendadas y modelo freemium con publicidad. Para creadores de contenido que quieren monetizar su audiencia.",
    href: "/llanes",
    status: "live",
    cat: "Travel",
    accent: "#52B788",
    bg: "#070d0a",
    metrics: [{ v: "126K", l: "Seguidores" }, { v: "Gratis", l: "Acceso base" }, { v: "Gs 35K", l: "Premium/mes" }],
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    featured: true,
  },
  {
    slug: "counter",
    name: "Counter",
    tagline: "Restaurante fine dining",
    desc: "Sistema de reservas paso a paso, carta digital con fotos y CTA de ocasiones especiales. Para restaurantes que quieren presencia digital premium.",
    href: "/counter",
    status: "live",
    cat: "Restaurante",
    accent: "#FFB547",
    bg: "#0f0a00",
    metrics: [{ v: "4.8★", l: "Valoracion" }, { v: "3 pasos", l: "Reservar" }, { v: "Madrid", l: "Ubicacion" }],
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  },
  {
    slug: "pulse",
    name: "Pulse",
    tagline: "App de fitness con IA",
    desc: "Anillos de actividad, zona de energia en tiempo real, racha de dias y Coach IA interactivo. Para gimnasios y entrenadores personales.",
    href: "/pulse",
    status: "live",
    cat: "Fitness",
    accent: "#4A9EFF",
    bg: "#080808",
    metrics: [{ v: "320", l: "Rutinas" }, { v: "Coach IA", l: "24/7" }, { v: "Anillos", l: "Actividad" }],
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  },
  {
    slug: "crafted",
    name: "Crafted",
    tagline: "Marketplace de talento creativo",
    desc: "Perfiles de creativos, briefing paso a paso, seguimiento de proyectos y pagos protegidos. Todo en un solo lugar. Para agencias y marcas.",
    href: "/crafted",
    status: "live",
    cat: "Marketplace",
    accent: "#F0EDE8",
    bg: "#000000",
    metrics: [{ v: "12K", l: "Creativos" }, { v: "48h", l: "Propuesta" }, { v: "94%", l: "Match" }],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    slug: "quill",
    name: "Quill",
    tagline: "Asistente IA para equipos",
    desc: "Chat IA conectado a Drive, Gmail, Slack y Calendar. Responde con contexto real de tu empresa. Para startups y equipos de trabajo.",
    href: "/quill",
    status: "live",
    cat: "IA",
    accent: "#64DC96",
    bg: "#080810",
    metrics: [{ v: "60+", l: "Integraciones" }, { v: "11h", l: "Ahorro/semana" }, { v: "1.2K", l: "Equipos" }],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    slug: "ledger",
    name: "Ledger",
    tagline: "Finanzas para freelancers",
    desc: "Dashboard en tiempo real, facturacion automatica, resumen fiscal y pagos internacionales en 32 paises. Para freelancers y agencias.",
    href: "/ledger",
    status: "live",
    cat: "Fintech",
    accent: "#C9A96E",
    bg: "#07080A",
    metrics: [{ v: "2M", l: "Transacciones" }, { v: "32", l: "Paises" }, { v: "0.4%", l: "Comision" }],
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
  },
  {
    slug: "mitais",
    name: "Mitais",
    tagline: "Tienda online streetwear",
    desc: "Tienda online con catalogo de prendas, modal de producto con tallas, carrito y confirmacion de pedido. Para marcas de moda con identidad.",
    href: "/mitais",
    status: "live",
    cat: "E-commerce",
    accent: "#D50000",
    bg: "#0A0A0A",
    metrics: [{ v: "68K", l: "Seguidores" }, { v: "Paraguay", l: "Origen" }, { v: "Shop", l: "Online" }],
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
  },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: "#07080A", color: "#F0EDE8", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(7,8,10,0.9)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-black text-base"
              style={{ background: "linear-gradient(135deg, #9477ff, #5dd3ff)" }}>B</div>
            <div>
              <div className="font-bold text-base tracking-tight" style={{ color: "#F0EDE8" }}>Demo Lab</div>
              <div className="text-[9px] tracking-[0.3em] uppercase mt-0.5" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>by Buhring</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs" style={{ color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>
            <a href="#demos" className="hover:text-white transition-colors">Demos</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <a href="#contacto" className="px-5 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#F0EDE8", color: "#07080A", fontFamily: "Helvetica, sans-serif" }}>
            Hablemos
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(148,119,255,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, rgba(93,211,255,0.04) 0%, transparent 50%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 text-xs font-mono"
              style={{ backgroundColor: "rgba(148,119,255,0.08)", color: "rgba(148,119,255,0.9)", border: "1px solid rgba(148,119,255,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#9477ff" }} />
              7 demos activas · Buhring Studio · Madrid
            </div>
            <h1 className="font-bold leading-none mb-8" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", letterSpacing: "-0.04em", lineHeight: "0.9" }}>
              Ideas que<br />
              <span style={{ background: "linear-gradient(90deg, #9477ff 0%, #b094ff 40%, #5dd3ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                parecen reales.
              </span>
            </h1>
            <p className="text-xl mb-12 leading-relaxed" style={{ color: "rgba(240,237,232,0.45)", maxWidth: "520px", lineHeight: "1.8", fontFamily: "Helvetica, sans-serif" }}>
              Demos visuales de alta fidelidad para validar ideas de negocio y cerrar ventas antes de desarrollar el producto real.
            </p>
            <div className="flex items-center gap-6">
              <a href="#demos" className="px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #7b5bff, #5dd3ff)", color: "#F0EDE8" }}>
                Ver demos
              </a>
              <a href="#contacto" className="px-8 py-4 rounded-full font-semibold text-sm transition-all"
                style={{ border: "1px solid rgba(240,237,232,0.1)", color: "rgba(240,237,232,0.6)" }}>
                Tengo una idea
              </a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-12 max-w-sm">
            {[{ value: "7", label: "Demos activas" }, { value: "100%", label: "Visual y funcional" }, { value: "0", label: "Backend real" }].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold mb-1" style={{ color: "#F0EDE8", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catálogo de demos */}
      <section id="demos" className="py-24 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: "rgba(148,119,255,0.8)" }}>Catalogo</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: "-0.03em" }}>
              Demos <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>disponibles</span>
            </h2>
            <p className="text-lg" style={{ color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>
              Cada demo es un producto visual completo listo para presentar a clientes.
            </p>
          </div>

          {/* Demo featured — Llanes */}
          <div className="mb-4">
            <Link href={demos[0].href} className="group relative block rounded-2xl overflow-hidden" style={{ height: "420px" }}>
              <img src={demos[0].img} alt={demos[0].name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{ filter: "brightness(0.3) saturate(0.8)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(7,8,10,0.98) 40%, rgba(7,8,10,0.3) 100%)" }} />
              <div className="absolute inset-0 flex items-center">
                <div className="px-10 max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full font-mono" style={{ backgroundColor: "rgba(82,183,136,0.15)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)" }}>
                      Live
                    </span>
                    <span className="text-xs font-mono" style={{ color: "rgba(240,237,232,0.3)" }}>Travel · Destacado</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>{demos[0].name}</h3>
                  <p className="text-base mb-4" style={{ color: "rgba(240,237,232,0.5)", fontFamily: "Helvetica, sans-serif" }}>{demos[0].tagline}</p>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: "rgba(240,237,232,0.35)", fontFamily: "Helvetica, sans-serif" }}>{demos[0].desc}</p>
                  <div className="flex items-center gap-6 mb-6">
                    {demos[0].metrics.map((m) => (
                      <div key={m.l}>
                        <div className="text-lg font-bold" style={{ color: demos[0].accent }}>{m.v}</div>
                        <div className="text-[10px]" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: demos[0].accent }}>
                    Ver demo completa →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Grid 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {demos.slice(1, 4).map((demo) => (
              <Link href={demo.href} key={demo.slug} className="group relative block rounded-2xl overflow-hidden" style={{ height: "340px" }}>
                <img src={demo.img} alt={demo.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.25) saturate(0.7)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,8,10,0.98) 0%, rgba(7,8,10,0.2) 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(240,237,232,0.35)" }}>{demo.cat}</span>
                    <span className="text-[10px] font-mono" style={{ color: demo.accent }}>Live</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ letterSpacing: "-0.02em" }}>{demo.name}</h3>
                  <p className="text-xs mb-4" style={{ color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>{demo.tagline}</p>
                  <div className="flex gap-4">
                    {demo.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="text-sm font-bold" style={{ color: demo.accent }}>{m.v}</div>
                        <div className="text-[9px]" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Grid 2 columnas + 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {demos.slice(4).map((demo) => (
              <Link href={demo.href} key={demo.slug} className="group relative block rounded-2xl overflow-hidden" style={{ height: "280px" }}>
                <img src={demo.img} alt={demo.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.25) saturate(0.7)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,8,10,0.98) 0%, rgba(7,8,10,0.2) 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "rgba(240,237,232,0.35)" }}>{demo.cat}</span>
                    <span className="text-[10px] font-mono" style={{ color: demo.accent }}>Live</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ letterSpacing: "-0.02em" }}>{demo.name}</h3>
                  <p className="text-xs mb-4" style={{ color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>{demo.tagline}</p>
                  <div className="flex gap-4">
                    {demo.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="text-sm font-bold" style={{ color: demo.accent }}>{m.v}</div>
                        <div className="text-[9px]" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-24 px-8" style={{ backgroundColor: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: "rgba(148,119,255,0.8)" }}>El proceso</p>
            <h2 className="text-4xl font-bold" style={{ letterSpacing: "-0.03em" }}>
              De idea a <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>venta real</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: "01", titulo: "Tienes una idea", desc: "Me cuentas tu concepto de negocio, el problema que resuelve y a quien va dirigido." },
              { num: "02", titulo: "Construimos la demo", desc: "En dias, no meses. Una demo visual completa que parece el producto real." },
              { num: "03", titulo: "La presentas", desc: "Validas la idea, consigues inversion o cierras ventas antes de gastar en desarrollo." },
              { num: "04", titulo: "Desarrollamos", desc: "Con validacion confirmada, construimos la version real completa." },
            ].map((p) => (
              <div key={p.num} className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-4xl font-bold mb-4" style={{ background: "linear-gradient(90deg, #7b5bff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.02em" }}>{p.num}</div>
                <h3 className="text-lg font-bold mb-2" style={{ letterSpacing: "-0.01em" }}>{p.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.35)", fontFamily: "Helvetica, sans-serif", lineHeight: "1.8" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-24 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-6 font-mono" style={{ color: "rgba(148,119,255,0.8)" }}>Empecemos</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
            Tienes una <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>idea?</span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>
            Cuentame tu concepto y en dias tienes una demo lista para presentar a clientes o inversores.
          </p>
          <a href="mailto:buhring.shop@gmail.com" className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-semibold text-base transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7b5bff, #5dd3ff)", color: "#F0EDE8" }}>
            Hablemos →
          </a>
          <p className="text-xs mt-6" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>buhring.shop@gmail.com · Madrid</p>
        </div>
      </section>

      <footer className="py-8 px-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p className="text-xs" style={{ color: "rgba(240,237,232,0.15)", fontFamily: "Helvetica, sans-serif" }}>
          2026 Buhring Studio · Demo Lab · Madrid
        </p>
      </footer>
    </main>
  );
}