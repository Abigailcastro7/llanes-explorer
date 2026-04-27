import Link from "next/link";

export default function Pulse() {
  return (
    <main style={{ backgroundColor: "#080808", color: "#F5F5F5", fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}>

      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(8,8,8,0.85)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F5F5F5" }}>
              <span className="text-black font-black text-sm">P</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Pulse</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "rgba(245,245,245,0.45)" }}>
            <Link href="/pulse/rutinas" className="hover:text-white transition-colors">Rutinas</Link>
            <Link href="/pulse/coach" className="hover:text-white transition-colors">Coach IA</Link>
            <Link href="/pulse/premium" className="hover:text-white transition-colors">Premium</Link>
          </div>
          <Link href="/pulse/premium" className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
            Empezar gratis
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" alt="Pulse"
            className="w-full h-full object-cover" style={{ filter: "brightness(0.15) saturate(0.5)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(8,8,8,0.98) 40%, rgba(8,8,8,0.4) 100%)" }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ backgroundColor: "rgba(74,158,255,0.06)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-medium"
              style={{ backgroundColor: "rgba(74,158,255,0.1)", color: "#4A9EFF", border: "1px solid rgba(74,158,255,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#4A9EFF" }} />
              Coach IA · Rutinas adaptativas · Madrid
            </div>
            <h1 className="font-bold leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", letterSpacing: "-0.04em", color: "#F5F5F5" }}>
              Entrena.<br />
              <span style={{ color: "rgba(245,245,245,0.25)" }}>Evoluciona.</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(245,245,245,0.45)", maxWidth: "480px" }}>
              Rutinas que se adaptan a tu cuerpo. Coach IA disponible 24/7. La app de fitness mas inteligente de Madrid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pulse/premium" className="px-8 py-4 rounded-full font-semibold text-sm text-center transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
                Empezar gratis →
              </Link>
              <Link href="/pulse/rutinas" className="px-8 py-4 rounded-full font-semibold text-sm text-center transition-all"
                style={{ border: "1px solid rgba(245,245,245,0.15)", color: "rgba(245,245,245,0.6)" }}>
                Ver rutinas
              </Link>
            </div>
            <div className="mt-16 flex items-center gap-10">
              {[{ value: "85K", label: "Usuarios activos" }, { value: "320", label: "Rutinas" }, { value: "78%", label: "Retencion" }].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold" style={{ color: "#F5F5F5" }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(245,245,245,0.3)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: "#4A9EFF" }}>Por que Pulse</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ letterSpacing: "-0.03em" }}>
              Diseñado para<br /><span style={{ color: "rgba(245,245,245,0.3)" }}>quienes van en serio.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🤖", titulo: "Coach IA", desc: "Tu entrenador personal disponible 24/7. Ajusta tu rutina en tiempo real segun tu progreso y objetivos.", acento: true },
              { icon: "📊", titulo: "Analisis de progreso", desc: "Metricas detalladas de cada sesion. Visualiza tu evolucion semana a semana con datos reales.", acento: false },
              { icon: "🔥", titulo: "Rutinas adaptativas", desc: "320 rutinas que evolucionan con tu cuerpo. Nunca haras dos veces exactamente el mismo entrenamiento.", acento: false },
            ].map((f) => (
              <div key={f.titulo} className="p-8 rounded-2xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: f.acento ? "rgba(74,158,255,0.06)" : "rgba(255,255,255,0.03)", border: f.acento ? "1px solid rgba(74,158,255,0.2)" : "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>{f.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,245,245,0.4)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rutinas preview */}
      <section className="py-24 px-8" style={{ backgroundColor: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3 font-medium" style={{ color: "#4A9EFF" }}>Catalogo</p>
              <h2 className="text-4xl font-bold" style={{ letterSpacing: "-0.03em" }}>Rutinas destacadas</h2>
            </div>
            <Link href="/pulse/rutinas" className="text-sm font-medium" style={{ color: "rgba(245,245,245,0.4)" }}>Ver todas →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Full Body Power", duracion: "45 min", nivel: "Intermedio", calorias: "380 kcal", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80", tag: "Popular" },
              { name: "HIIT Cardio Blast", duracion: "30 min", nivel: "Avanzado", calorias: "450 kcal", img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&q=80", tag: "Nuevo" },
              { name: "Core & Mobility", duracion: "40 min", nivel: "Principiante", calorias: "220 kcal", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80", tag: "Top" },
            ].map((r) => (
              <Link href="/pulse/rutinas" key={r.name} className="group rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.5) saturate(0.7)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 50%)" }} />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "rgba(74,158,255,0.2)", color: "#4A9EFF", border: "1px solid rgba(74,158,255,0.3)" }}>
                    {r.tag}
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-bold text-lg" style={{ letterSpacing: "-0.02em" }}>{r.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs" style={{ color: "rgba(245,245,245,0.4)" }}>
                    <span>{r.duracion}</span>
                    <span>{r.nivel}</span>
                    <span>{r.calorias}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coach IA preview */}
      <section className="py-28 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: "#4A9EFF" }}>Inteligencia artificial</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
              Tu coach personal.<br /><span style={{ color: "rgba(245,245,245,0.3)" }}>Siempre disponible.</span>
            </h2>
            <p className="mb-6 leading-relaxed" style={{ color: "rgba(245,245,245,0.45)", lineHeight: "1.8" }}>
              El Coach IA de Pulse analiza tu progreso, tu historial y tus objetivos para diseñar el entrenamiento perfecto para ti cada dia.
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {["Ajusta la intensidad segun tu nivel de energia", "Sugiere descanso cuando detecta sobreentrenamiento", "Adapta la rutina si llevas dias sin entrenar", "Responde preguntas sobre tecnica y nutricion"].map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(245,245,245,0.55)" }}>
                  <span style={{ color: "#4A9EFF" }}>→</span> {f}
                </div>
              ))}
            </div>
            <Link href="/pulse/coach" className="inline-flex px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
              Hablar con el Coach IA →
            </Link>
          </div>
          <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: "rgba(74,158,255,0.15)", border: "1px solid rgba(74,158,255,0.3)" }}>🤖</div>
              <div>
                <div className="text-sm font-medium">Coach Pulse</div>
                <div className="text-xs" style={{ color: "#4A9EFF" }}>En linea · IA activa</div>
              </div>
            </div>
            {[
              { tipo: "coach", msg: "Hola! Vi que ayer hiciste Full Body. Hoy te recomiendo un dia de core y movilidad para recuperarte bien." },
              { tipo: "user", msg: "Perfecto, pero tengo solo 30 minutos." },
              { tipo: "coach", msg: "Sin problema. Te ajusto la rutina a 30 min con los ejercicios mas efectivos para tu objetivo." },
              { tipo: "user", msg: "Genial, empecemos." },
            ].map((m, i) => (
              <div key={i} className={"flex mb-4 " + (m.tipo === "user" ? "justify-end" : "justify-start")}>
                <div className="max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed"
                  style={{
                    backgroundColor: m.tipo === "coach" ? "rgba(74,158,255,0.1)" : "rgba(245,245,245,0.08)",
                    color: "rgba(245,245,245,0.75)",
                    border: m.tipo === "coach" ? "1px solid rgba(74,158,255,0.15)" : "1px solid rgba(255,255,255,0.08)",
                  }}>
                  {m.msg}
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <input className="flex-1 bg-transparent text-sm outline-none" placeholder="Escribe al Coach IA..."
                style={{ color: "rgba(245,245,245,0.4)" }} />
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(74,158,255,0.2)" }}>
                <span className="text-xs" style={{ color: "#4A9EFF" }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
            Tu mejor version<br /><span style={{ color: "rgba(245,245,245,0.25)" }}>empieza hoy.</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(245,245,245,0.4)" }}>
            Gratis para empezar. Premium para quienes van en serio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pulse/premium" className="px-10 py-4 rounded-full font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
              Empezar gratis →
            </Link>
            <Link href="/pulse/premium" className="px-10 py-4 rounded-full font-semibold transition-all"
              style={{ border: "1px solid rgba(245,245,245,0.12)", color: "rgba(245,245,245,0.5)" }}>
              Ver planes Premium
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-xs" style={{ color: "rgba(245,245,245,0.15)", fontFamily: "system-ui, sans-serif" }}>
          2026 Pulse · Demo by Buhring
        </p>
      </footer>
    </main>
  );
}