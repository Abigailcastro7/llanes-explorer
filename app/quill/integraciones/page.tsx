import Link from "next/link";

const categorias = [
  { cat: "Productividad", items: [
    { nombre: "Google Drive", desc: "Accede y resume documentos directamente", icon: "📁", conectado: true },
    { nombre: "Notion", desc: "Crea y actualiza paginas desde el chat", icon: "📝", conectado: true },
    { nombre: "Dropbox", desc: "Busca archivos y comparte desde Quill", icon: "📦", conectado: false },
  ]},
  { cat: "Comunicacion", items: [
    { nombre: "Gmail", desc: "Lee, redacta y envia emails con contexto", icon: "📧", conectado: true },
    { nombre: "Slack", desc: "Resume canales y responde mensajes", icon: "💬", conectado: true },
    { nombre: "Zoom", desc: "Transcribe reuniones y genera resumenes", icon: "🎥", conectado: false },
  ]},
  { cat: "Gestion", items: [
    { nombre: "Google Calendar", desc: "Programa reuniones y gestiona tu agenda", icon: "📅", conectado: true },
    { nombre: "Jira", desc: "Crea tickets y actualiza el estado de tareas", icon: "⚙️", conectado: false },
    { nombre: "Asana", desc: "Gestiona proyectos y asigna tareas", icon: "✅", conectado: false },
  ]},
];

export default function Integraciones() {
  return (
    <main style={{ backgroundColor: "#080810", color: "#E8E8F0", fontFamily: "system-ui, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(8,8,16,0.9)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/quill" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(100,220,150,0.15)", border: "1px solid rgba(100,220,150,0.3)" }}>
              <span className="text-xs font-bold" style={{ color: "#64DC96" }}>Q</span>
            </div>
            <span className="font-semibold">Quill</span>
          </Link>
          <Link href="/quill/chat" className="px-5 py-2.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "#64DC96", color: "#080810" }}>Abrir chat</Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-mono" style={{ color: "#64DC96" }}>Conectado a todo</p>
            <h1 className="text-5xl font-bold mb-4" style={{ letterSpacing: "-0.04em" }}>60+ integraciones</h1>
            <p className="text-lg" style={{ color: "rgba(232,232,240,0.35)" }}>Conecta Quill a las herramientas que ya usa tu equipo.</p>
          </div>

          {categorias.map((c) => (
            <div key={c.cat} className="mb-12">
              <p className="text-xs tracking-[0.3em] uppercase mb-5 font-mono" style={{ color: "rgba(232,232,240,0.25)" }}>{c.cat}</p>
              <div className="flex flex-col gap-3">
                {c.items.map((item) => (
                  <div key={item.nombre} className="flex items-center justify-between p-5 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold mb-0.5">{item.nombre}</h3>
                        <p className="text-sm" style={{ color: "rgba(232,232,240,0.35)" }}>{item.desc}</p>
                      </div>
                    </div>
                    <div>
                      {item.conectado ? (
                        <span className="text-xs px-3 py-1.5 rounded-full font-mono" style={{ backgroundColor: "rgba(100,220,150,0.1)", color: "#64DC96", border: "1px solid rgba(100,220,150,0.2)" }}>
                          Conectado
                        </span>
                      ) : (
                        <button className="text-xs px-3 py-1.5 rounded-full font-medium transition-all hover:bg-white hover:text-black"
                          style={{ border: "1px solid rgba(232,232,240,0.12)", color: "rgba(232,232,240,0.4)" }}>
                          Conectar
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}