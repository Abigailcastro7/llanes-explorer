import Link from "next/link";

export default function Ledger() {
  return (
    <main style={{ backgroundColor: "#07080A", color: "#F0EDE8", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(7,8,10,0.9)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)" }}>
              <span className="text-sm font-bold" style={{ color: "#C9A96E" }}>L</span>
            </div>
            <span className="font-semibold tracking-tight">Ledger</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "rgba(240,237,232,0.4)" }}>
            <Link href="/ledger/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/ledger/facturas" className="hover:text-white transition-colors">Facturas</Link>
            <Link href="/ledger/premium" className="hover:text-white transition-colors">Planes</Link>
          </div>
          <Link href="/ledger/dashboard" className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#C9A96E", color: "#07080A" }}>
            Ver demo
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(201,169,110,0.04) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-mono"
              style={{ backgroundColor: "rgba(201,169,110,0.08)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.15)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
              Finanzas para freelancers y creadores
            </div>
            <h1 className="font-bold leading-tight mb-6" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.04em" }}>
              Tus finanzas.<br />Bajo control.<br />
              <span style={{ color: "rgba(240,237,232,0.2)" }}>Siempre.</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(240,237,232,0.4)", maxWidth: "420px", lineHeight: "1.8" }}>
              Dashboard financiero, facturacion automatica y pagos internacionales. Diseñado para freelancers, agencias y creadores de contenido.
            </p>
            <div className="flex gap-4 mb-16">
              <Link href="/ledger/dashboard" className="px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "#C9A96E", color: "#07080A" }}>
                Ver dashboard
              </Link>
              <Link href="/ledger/facturas" className="px-8 py-4 rounded-full font-semibold text-sm transition-all"
                style={{ border: "1px solid rgba(240,237,232,0.1)", color: "rgba(240,237,232,0.5)" }}>
                Crear factura
              </Link>
            </div>
            <div className="flex items-center gap-10">
              {[{ value: "2M", label: "Transacciones" }, { value: "32", label: "Paises" }, { value: "0.4%", label: "Comision" }].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold" style={{ color: "#C9A96E", letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(240,237,232,0.25)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="p-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="text-xs font-mono" style={{ color: "rgba(240,237,232,0.3)" }}>Dashboard · Abril 2026</span>
              <span className="text-xs px-2 py-0.5 rounded font-mono" style={{ backgroundColor: "rgba(201,169,110,0.1)", color: "#C9A96E" }}>EN VIVO</span>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Ingresos este mes", value: "12.840€", change: "+23%", up: true },
                  { label: "Pendiente de cobro", value: "4.200€", change: "3 facturas", up: null },
                  { label: "Gastos", value: "2.150€", change: "-8%", up: false },
                  { label: "Beneficio neto", value: "10.690€", change: "+31%", up: true },
                ].map((m) => (
                  <div key={m.label} className="p-4 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <p className="text-[10px] mb-2" style={{ color: "rgba(240,237,232,0.3)" }}>{m.label}</p>
                    <p className="text-xl font-bold" style={{ color: "#F0EDE8", letterSpacing: "-0.02em" }}>{m.value}</p>
                    <p className="text-xs mt-1" style={{ color: m.up === true ? "#64DC96" : m.up === false ? "#FF6B6B" : "rgba(240,237,232,0.3)" }}>{m.change}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl mb-3" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <p className="text-[10px] mb-3" style={{ color: "rgba(240,237,232,0.3)" }}>Ultimas transacciones</p>
                {[
                  { nombre: "Proyecto Zara Home", monto: "+3.500€", fecha: "Hoy", tipo: "ingreso" },
                  { nombre: "Suscripcion Adobe", monto: "-59€", fecha: "Ayer", tipo: "gasto" },
                  { nombre: "Proyecto Startup X", monto: "+1.800€", fecha: "23 Abr", tipo: "ingreso" },
                ].map((t) => (
                  <div key={t.nombre} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#F0EDE8" }}>{t.nombre}</p>
                      <p className="text-[10px]" style={{ color: "rgba(240,237,232,0.3)" }}>{t.fecha}</p>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: t.tipo === "ingreso" ? "#64DC96" : "#FF6B6B" }}>{t.monto}</span>
                  </div>
                ))}
              </div>
              <Link href="/ledger/dashboard" className="block text-center py-3 rounded-xl text-xs font-semibold transition-all hover:opacity-80"
                style={{ backgroundColor: "#C9A96E", color: "#07080A" }}>
                Ver dashboard completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: "#C9A96E" }}>Por que Ledger</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
              Todo lo que necesita<br /><span style={{ color: "rgba(240,237,232,0.2)" }}>un freelancer moderno.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "📊", titulo: "Dashboard en tiempo real", desc: "Ingresos, gastos y beneficios actualizados al momento. Graficas claras sin complicaciones." },
              { icon: "🧾", titulo: "Facturacion automatica", desc: "Crea y envia facturas profesionales en segundos. Recordatorios de cobro automaticos." },
              { icon: "🌍", titulo: "Pagos internacionales", desc: "Cobra en 32 paises con conversion automatica. Solo 0.4% de comision. Sin sorpresas." },
              { icon: "📅", titulo: "Planificacion fiscal", desc: "Calcula tu IVA e IRPF automaticamente. Exporta informes para tu gestor con un click." },
              { icon: "🔔", titulo: "Alertas inteligentes", desc: "Te avisa cuando un cliente no ha pagado, cuando tienes un gasto inusual o cuando superas tu objetivo mensual." },
              { icon: "🔒", titulo: "Seguridad bancaria", desc: "Cifrado de nivel bancario. Tus datos financieros siempre protegidos. Cumplimiento PSD2." },
            ].map((f) => (
              <div key={f.titulo} className="p-7 rounded-2xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ letterSpacing: "-0.02em" }}>{f.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.35)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ letterSpacing: "-0.04em" }}>
            Deja de perder<br /><span style={{ color: "rgba(240,237,232,0.2)" }}>tiempo con facturas.</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(240,237,232,0.35)" }}>
            Gratis para empezar. Sin tarjeta. Configuracion en 3 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/ledger/dashboard" className="px-10 py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: "#C9A96E", color: "#07080A" }}>
              Ver dashboard
            </Link>
            <Link href="/ledger/premium" className="px-10 py-4 rounded-full font-semibold transition-all"
              style={{ border: "1px solid rgba(240,237,232,0.1)", color: "rgba(240,237,232,0.4)" }}>
              Ver planes
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p className="text-xs" style={{ color: "rgba(240,237,232,0.12)" }}>2026 Ledger · Demo by Buhring</p>
      </footer>
    </main>
  );
}