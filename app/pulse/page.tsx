"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function Ring({ size, strokeWidth, progress, color, label, value }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className="flex flex-col items-center gap-3">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={strokeWidth} />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" style={{ transition: "stroke-dashoffset 1.5s ease" }} />
      </svg>
      <div className="text-center -mt-1">
        <div className="text-sm font-bold" style={{ color }}>{value}</div>
        <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(245,245,245,0.3)" }}>{label}</div>
      </div>
    </div>
  );
}

const rachaData = [true,true,true,true,false,true,true,true,true,true,false,false,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true];

export default function Pulse() {
  const [energia, setEnergia] = useState(72);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setEnergia(prev => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1);
        return Math.max(55, Math.min(95, next));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const zonaColor = energia > 85 ? "#FF4A4A" : energia > 70 ? "#FF8C4A" : "#4A9EFF";
  const zonaNombre = energia > 85 ? "Zona Roja — Maximo esfuerzo" : energia > 70 ? "Zona Naranja — Alta intensidad" : "Zona Azul — Cardio base";

  return (
    <main style={{ backgroundColor: "#080808", color: "#F5F5F5", fontFamily: "system-ui, -apple-system, sans-serif" }}>

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
          <Link href="/pulse/premium" className="px-5 py-2.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
            Empezar gratis
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80" alt="Pulse"
            className="w-full h-full object-cover" style={{ filter: "brightness(0.12) saturate(0.5)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.7) 60%, rgba(8,8,8,0.98) 100%)" }} />
        <div className="absolute top-1/4 right-10 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ backgroundColor: "rgba(74,158,255,0.05)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto izquierda */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-medium"
              style={{ backgroundColor: "rgba(74,158,255,0.1)", color: "#4A9EFF", border: "1px solid rgba(74,158,255,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#4A9EFF" }} />
              Coach IA · Rutinas adaptativas
            </div>
            <h1 className="font-bold leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", letterSpacing: "-0.04em" }}>
              Entrena.<br />
              <span style={{ color: "rgba(245,245,245,0.2)" }}>Evoluciona.</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(245,245,245,0.4)", maxWidth: "420px" }}>
              La unica app que combina rutinas adaptativas, Coach IA en tiempo real y analisis de zonas de energia.
            </p>
            <div className="flex gap-4">
              <Link href="/pulse/premium" className="px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
                Empezar gratis →
              </Link>
              <Link href="/pulse/coach" className="px-8 py-4 rounded-full font-semibold text-sm transition-all"
                style={{ border: "1px solid rgba(245,245,245,0.12)", color: "rgba(245,245,245,0.5)" }}>
                Hablar con IA
              </Link>
            </div>
          </div>

          {/* Dashboard derecha — lo diferenciador */}
          <div className="flex flex-col gap-5">

            {/* Anillos Apple Watch */}
            <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "rgba(245,245,245,0.3)" }}>Actividad hoy</p>
                  <p className="font-semibold mt-0.5">Lunes, 28 Abr</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(74,158,255,0.1)", color: "#4A9EFF" }}>En racha 🔥 12 dias</span>
              </div>
              <div className="flex items-center justify-around">
                {mounted && (
                  <>
                    <Ring size={80} strokeWidth={8} progress={82} color="#FF4A4A" label="Mover" value="82%" />
                    <Ring size={80} strokeWidth={8} progress={65} color="#4A9EFF" label="Ejercicio" value="38 min" />
                    <Ring size={80} strokeWidth={8} progress={90} color="#4AFF91" label="Racha" value="12d" />
                  </>
                )}
              </div>
            </div>

            {/* Zona de energia en tiempo real */}
            <div className="p-5 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "rgba(245,245,245,0.3)" }}>Zona de energia</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: zonaColor }} />
                  <span className="text-xs font-medium" style={{ color: zonaColor }}>{zonaNombre}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold" style={{ color: zonaColor, letterSpacing: "-0.03em" }}>{energia}<span className="text-lg font-normal" style={{ color: "rgba(245,245,245,0.3)" }}>bpm</span></div>
                <div className="flex-1 h-3 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: energia + "%", backgroundColor: zonaColor, boxShadow: "0 0 10px " + zonaColor + "60" }} />
                </div>
              </div>
              <div className="flex justify-between mt-2 text-[10px]" style={{ color: "rgba(245,245,245,0.2)" }}>
                <span>Reposo</span><span>Cardio base</span><span>Alta</span><span>Maximo</span>
              </div>
            </div>

            {/* Racha de dias */}
            <div className="p-5 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "rgba(245,245,245,0.3)" }}>Tu racha — Abril</p>
                <span className="text-xs font-bold" style={{ color: "#4A9EFF" }}>23/28 dias</span>
              </div>
              <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
                {["L","M","X","J","V","S","D"].map(d => (
                  <div key={d} className="text-center text-[9px] mb-1 uppercase tracking-wider" style={{ color: "rgba(245,245,245,0.2)" }}>{d}</div>
                ))}
                {rachaData.map((activo, i) => (
                  <div key={i} className="rounded-md aspect-square flex items-center justify-center text-[10px] font-bold transition-all"
                    style={{
                      backgroundColor: activo ? "rgba(74,158,255,0.2)" : "rgba(255,255,255,0.03)",
                      color: activo ? "#4A9EFF" : "rgba(245,245,245,0.15)",
                      border: activo ? "1px solid rgba(74,158,255,0.3)" : "1px solid rgba(255,255,255,0.05)",
                    }}>
                    {activo ? "✓" : ""}
                  </div>
                ))}
              </div>
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
              Lo que otras apps<br /><span style={{ color: "rgba(245,245,245,0.25)" }}>no tienen.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🤖", titulo: "Coach IA real", desc: "Conversacion natural con tu entrenador IA. No solo sugiere rutinas — aprende de ti, detecta fatiga y ajusta en tiempo real.", acento: true },
              { icon: "🫀", titulo: "Zonas de energia", desc: "Monitorea en que zona de frecuencia cardiaca estas entrenando. Maximiza resultados y evita el sobreentrenamiento.", acento: false },
              { icon: "🔥", titulo: "Racha gamificada", desc: "Sistema de racha con calendario visual. Psicologia del habito integrada para que nunca dejes de entrenar.", acento: false },
            ].map((f) => (
              <div key={f.titulo} className="p-8 rounded-2xl transition-all hover:-translate-y-1"
                style={{ backgroundColor: f.acento ? "rgba(74,158,255,0.05)" : "rgba(255,255,255,0.03)", border: f.acento ? "1px solid rgba(74,158,255,0.15)" : "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ letterSpacing: "-0.02em" }}>{f.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,245,245,0.4)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach IA preview interactivo */}
      <section className="py-24 px-8" style={{ backgroundColor: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6 font-medium" style={{ color: "#4A9EFF" }}>Inteligencia artificial</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
              Tu coach.<br /><span style={{ color: "rgba(245,245,245,0.25)" }}>Siempre contigo.</span>
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "rgba(245,245,245,0.4)", lineHeight: "1.8" }}>
              No es un chatbot generico. El Coach IA de Pulse conoce tu historial, tus objetivos y como responde tu cuerpo. Cada dia te da el entrenamiento exacto que necesitas.
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {[
                "Ajusta la intensidad segun tu energia del dia",
                "Detecta patrones de sobreentrenamiento",
                "Responde preguntas de tecnica y nutricion",
                "Aprende de tus preferencias con el tiempo"
              ].map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(245,245,245,0.5)" }}>
                  <span style={{ color: "#4A9EFF" }}>→</span> {f}
                </div>
              ))}
            </div>
            <Link href="/pulse/coach" className="inline-flex px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
              Hablar con el Coach IA →
            </Link>
          </div>

          {/* Chat preview */}
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="p-4 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(74,158,255,0.15)", border: "1px solid rgba(74,158,255,0.2)" }}>🤖</div>
              <div>
                <div className="text-sm font-semibold">Coach Pulse</div>
                <div className="text-xs flex items-center gap-1" style={{ color: "#4A9EFF" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />En linea
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {[
                { tipo: "coach", msg: "Hola! Analice tu semana — llevas 5 dias seguidos. Hoy te recomiendo una sesion de movilidad activa para recuperarte bien." },
                { tipo: "user", msg: "Pero quiero entrenar fuerte hoy." },
                { tipo: "coach", msg: "Entiendo! Entonces hagamos 20 min de HIIT moderado + 20 min core. Asi mantienes el ritmo sin sobrecargar. Empezamos?" },
                { tipo: "user", msg: "Perfecto, vamos." },
              ].map((m, i) => (
                <div key={i} className={"flex " + (m.tipo === "user" ? "justify-end" : "justify-start")}>
                  <div className="max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed"
                    style={{
                      backgroundColor: m.tipo === "coach" ? "rgba(74,158,255,0.08)" : "rgba(245,245,245,0.06)",
                      color: "rgba(245,245,245,0.75)",
                      border: m.tipo === "coach" ? "1px solid rgba(74,158,255,0.15)" : "1px solid rgba(255,255,255,0.07)",
                    }}>
                    {m.msg}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 flex items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex-1 px-4 py-2.5 rounded-full text-sm" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(245,245,245,0.25)" }}>
                Escribe al Coach IA...
              </div>
              <Link href="/pulse/coach" className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:scale-105"
                style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>→</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rutinas preview */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3 font-medium" style={{ color: "#4A9EFF" }}>Catalogo</p>
              <h2 className="text-4xl font-bold" style={{ letterSpacing: "-0.03em" }}>Rutinas destacadas</h2>
            </div>
            <Link href="/pulse/rutinas" className="text-sm font-medium" style={{ color: "rgba(245,245,245,0.35)" }}>Ver todas →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Full Body Power", duracion: "45 min", nivel: "Intermedio", calorias: "380 kcal", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80", tag: "Popular", zona: "#FF8C4A" },
              { name: "HIIT Cardio Blast", duracion: "30 min", nivel: "Avanzado", calorias: "450 kcal", img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&q=80", tag: "Nuevo", zona: "#FF4A4A" },
              { name: "Core & Mobility", duracion: "40 min", nivel: "Principiante", calorias: "220 kcal", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80", tag: "Top", zona: "#4A9EFF" },
            ].map((r) => (
              <Link href="/pulse/rutinas" key={r.name} className="group rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.4) saturate(0.6)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 50%)" }} />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "rgba(8,8,8,0.7)", color: r.zona, border: "1px solid " + r.zona + "40", backdropFilter: "blur(10px)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: r.zona }} />
                    {r.tag}
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-bold text-lg" style={{ letterSpacing: "-0.02em" }}>{r.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs" style={{ color: "rgba(245,245,245,0.35)" }}>
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

      {/* CTA */}
      <section className="py-24 px-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
            Tu mejor version<br /><span style={{ color: "rgba(245,245,245,0.2)" }}>empieza hoy.</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(245,245,245,0.35)" }}>
            Gratis para empezar. Premium para quienes van en serio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pulse/premium" className="px-10 py-4 rounded-full font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>
              Empezar gratis →
            </Link>
            <Link href="/pulse/coach" className="px-10 py-4 rounded-full font-semibold transition-all"
              style={{ border: "1px solid rgba(245,245,245,0.1)", color: "rgba(245,245,245,0.45)" }}>
              Hablar con el Coach IA
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-xs" style={{ color: "rgba(245,245,245,0.12)" }}>2026 Pulse · Demo by Buhring</p>
      </footer>
    </main>
  );
}