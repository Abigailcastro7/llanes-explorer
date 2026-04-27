import Link from "next/link";

export default function Quill() {
  return (
    <main style={{ backgroundColor: "#080810", color: "#E8E8F0", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(8,8,16,0.9)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(100,220,150,0.15)", border: "1px solid rgba(100,220,150,0.3)" }}>
              <span className="text-sm font-bold" style={{ color: "#64DC96" }}>Q</span>
            </div>
            <div>
              <span className="font-semibold tracking-tight">Quill</span>
              <span className="text-xs ml-2 px-1.5 py-0.5 rounded font-mono" style={{ backgroundColor: "rgba(100,220,150,0.1)", color: "#64DC96", fontSize: "9px" }}>BETA</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "rgba(232,232,240,0.4)" }}>
            <Link href="/quill/chat" className="hover:text-white transition-colors">Chat IA</Link>
            <Link href="/quill/integraciones" className="hover:text-white transition-colors">Integraciones</Link>
            <Link href="/quill/premium" className="hover:text-white transition-colors">Planes</Link>
          </div>
          <Link href="/quill/chat" className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#64DC96", color: "#080810" }}>
            Probar gratis
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(100,220,150,0.05) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-mono"
              style={{ backgroundColor: "rgba(100,220,150,0.08)", color: "#64DC96", border: "1px solid rgba(100,220,150,0.15)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#64DC96" }} />
              IA conectada a tus herramientas · 60+ integraciones
            </div>
            <h1 className="font-bold leading-tight mb-6" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.04em" }}>
              El asistente IA<br />que conoce<br />
              <span style={{ color: "rgba(232,232,240,0.2)" }}>tu empresa.</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(232,232,240,0.4)", maxWidth: "440px", lineHeight: "1.8" }}>
              Conecta Quill a tus documentos, emails, calendarios y herramientas. Respuestas con contexto real. No respuestas genericas.
            </p>
            <div className="flex gap-4 mb-16">
              <Link href="/quill/chat" className="px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "#64DC96", color: "#080810" }}>
                Probar gratis →
              </Link>
              <Link href="/quill/integraciones" className="px-8 py-4 rounded-full font-semibold text-sm transition-all"
                style={{ border: "1px solid rgba(232,232,240,0.1)", color: "rgba(232,232,240,0.5)" }}>
                Ver integraciones
              </Link>
            </div>
            <div className="flex items-center gap-10">
              {[{ value: "1.2K", label: "Equipos activos" }, { value: "60+", label: "Integraciones" }, { value: "11h", label: "Ahorro semanal" }].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold" style={{ color: "#64DC96", letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(232,232,240,0.25)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat preview animado */}
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="p-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", backgroundColor: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#64DC96" }} />
                <span className="text-xs font-mono" style={{ color: "rgba(232,232,240,0.4)" }}>Quill IA · Conectado a Google Drive, Gmail, Slack</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(100,220,150,0.1)", color: "#64DC96" }}>EN LINEA</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
              {[
                { tipo: "user", msg: "Resume el informe trimestral que subio Maria ayer" },
                { tipo: "quill", msg: "Encontre Q1_2026_Resultados.pdf en Drive. Revenue +23% vs Q1 2025. Madrid y Barcelona superaron objetivos. Pendiente: revision costes zona norte.", fuente: "Google Drive · Q1_2026_Resultados.pdf" },
                { tipo: "user", msg: "Redacta un email a todo el equipo con los puntos clave" },
                { tipo: "quill", msg: "Draft listo. Tono profesional, 150 palabras. Destinatarios: equipo@empresa.com (14 personas segun Slack). Lo envio ahora o prefieres revisarlo?", fuente: "Gmail · Slack" },
              ].map((m, i) => (
                <div key={i} className={"flex " + (m.tipo === "user" ? "justify-end" : "justify-start")}>
                  <div className="max-w-sm">
                    <div className="px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
                      style={{
                        backgroundColor: m.tipo === "quill" ? "rgba(100,220,150,0.06)" : "rgba(232,232,240,0.06)",
                        color: "rgba(232,232,240,0.75)",
                        border: m.tipo === "quill" ? "1px solid rgba(100,220,150,0.12)" : "1px solid rgba(255,255,255,0.06)",
                      }}>
                      {m.msg}
                    </div>
                    {m.fuente && (
                      <div className="mt-1.5 ml-1 text-[10px] font-mono" style={{ color: "rgba(100,220,150,0.5)" }}>
                        ↗ {m.fuente}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 flex items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex-1 px-4 py-2.5 rounded-full text-sm" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(232,232,240,0.2)" }}>
                Pregunta algo a Quill...
              </div>
              <Link href="/quill/chat" className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all hover:scale-105"
                style={{ backgroundColor: "#64DC96", color: "#080810" }}>→</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: "#64DC96" }}>Por que Quill</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ letterSpacing: "-0.03em" }}>
              No es un chatbot.<br /><span style={{ color: "rgba(232,232,240,0.2)" }}>Es tu equipo de IA.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "📂", titulo: "Memoria real", desc: "Quill lee tus documentos, emails y conversaciones de Slack. Responde con contexto real de tu empresa, no respuestas genericas.", acento: true },
              { icon: "⚡", titulo: "Accion directa", desc: "No solo responde — actua. Redacta emails, crea tareas en Notion, actualiza hojas de calculo. Todo desde el chat.", acento: false },
              { icon: "🔒", titulo: "Privacidad total", desc: "Tus datos nunca se usan para entrenar modelos. Servidor dedicado. Cumplimiento GDPR. Datos solo tuyos.", acento: false },
            ].map((f) => (
              <div key={f.titulo} className="p-8 rounded-2xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: f.acento ? "rgba(100,220,150,0.04)" : "rgba(255,255,255,0.02)", border: f.acento ? "1px solid rgba(100,220,150,0.12)" : "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>{f.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(232,232,240,0.35)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integraciones */}
      <section className="py-20 px-8" style={{ backgroundColor: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3 font-mono" style={{ color: "#64DC96" }}>Conectado a todo</p>
              <h2 className="text-4xl font-bold" style={{ letterSpacing: "-0.03em" }}>60+ integraciones</h2>
            </div>
            <Link href="/quill/integraciones" className="text-sm" style={{ color: "rgba(232,232,240,0.3)" }}>Ver todas →</Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { nombre: "Google Drive", icon: "📁" },
              { nombre: "Gmail", icon: "📧" },
              { nombre: "Slack", icon: "💬" },
              { nombre: "Notion", icon: "📝" },
              { nombre: "Calendar", icon: "📅" },
              { nombre: "Sheets", icon: "📊" },
              { nombre: "HubSpot", icon: "🎯" },
              { nombre: "Jira", icon: "⚙️" },
              { nombre: "Figma", icon: "🎨" },
              { nombre: "Dropbox", icon: "📦" },
              { nombre: "Zoom", icon: "🎥" },
              { nombre: "Asana", icon: "✅" },
            ].map((int) => (
              <div key={int.nombre} className="p-4 rounded-xl text-center transition-all hover:-translate-y-0.5 cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-2xl mb-2">{int.icon}</div>
                <div className="text-[10px]" style={{ color: "rgba(232,232,240,0.35)" }}>{int.nombre}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ letterSpacing: "-0.04em" }}>
            Tu equipo.<br /><span style={{ color: "rgba(232,232,240,0.2)" }}>Multiplicado por IA.</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(232,232,240,0.35)" }}>
            Empieza gratis. Sin tarjeta de credito. Configuracion en 5 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quill/chat" className="px-10 py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: "#64DC96", color: "#080810" }}>
              Probar gratis →
            </Link>
            <Link href="/quill/premium" className="px-10 py-4 rounded-full font-semibold transition-all"
              style={{ border: "1px solid rgba(232,232,240,0.1)", color: "rgba(232,232,240,0.4)" }}>
              Ver planes
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p className="text-xs font-mono" style={{ color: "rgba(232,232,240,0.12)" }}>2026 Quill · Demo by Buhring</p>
      </footer>
    </main>
  );
}