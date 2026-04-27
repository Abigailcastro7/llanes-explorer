"use client";
import Link from "next/link";
import { useState } from "react";

export default function Briefing() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ tipo: "", presupuesto: "", plazo: "", nombre: "", empresa: "", email: "", descripcion: "" });
  const [enviado, setEnviado] = useState(false);

  const tipos = ["Identidad de marca", "Campana fotografica", "Diseño web", "Video & Motion", "Campana publicitaria", "Packaging"];
  const presupuestos = ["1.000 — 3.000€", "3.000 — 7.000€", "7.000 — 15.000€", "15.000€+"];
  const plazos = ["Urgente (1 semana)", "Normal (2-4 semanas)", "Sin prisa (1-2 meses)"];

  return (
    <main style={{ backgroundColor: "#000000", color: "#F0EDE8", fontFamily: "Georgia, serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-6" style={{ backgroundColor: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(240,237,232,0.06)" }}>
        <nav className="max-w-7xl mx-auto px-10 flex items-center justify-between">
          <Link href="/crafted">
            <div className="text-xl tracking-[0.5em] uppercase font-light">Crafted</div>
          </Link>
          <Link href="/crafted" className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>← Volver</Link>
        </nav>
      </header>

      <div className="pt-32 pb-20 px-10 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          {!enviado ? (
            <>
              <div className="mb-14">
                <p className="text-[9px] tracking-[0.5em] uppercase mb-4" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Paso {step} de 3</p>
                <div className="flex gap-2 mb-8">
                  {[1,2,3].map((s) => (
                    <div key={s} className="h-px flex-1 transition-all duration-500" style={{ backgroundColor: s <= step ? "#F0EDE8" : "rgba(240,237,232,0.1)" }} />
                  ))}
                </div>
                <h1 className="text-5xl font-light" style={{ letterSpacing: "-0.02em" }}>
                  {step === 1 && "Que necesitas."}
                  {step === 2 && "Los detalles."}
                  {step === 3 && "Quien eres."}
                </h1>
              </div>

              {step === 1 && (
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>Tipo de proyecto</p>
                  <div className="grid grid-cols-2 gap-2">
                    {tipos.map((t) => (
                      <button key={t} onClick={() => setForm({ ...form, tipo: t })}
                        className="p-5 text-left text-sm font-light transition-all"
                        style={{ border: form.tipo === t ? "1px solid #F0EDE8" : "1px solid rgba(240,237,232,0.1)", color: form.tipo === t ? "#F0EDE8" : "rgba(240,237,232,0.4)", backgroundColor: form.tipo === t ? "rgba(240,237,232,0.05)" : "transparent" }}>
                        {t}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase mt-6 mb-2" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>Presupuesto</p>
                  <div className="grid grid-cols-2 gap-2">
                    {presupuestos.map((p) => (
                      <button key={p} onClick={() => setForm({ ...form, presupuesto: p })}
                        className="p-4 text-left text-sm font-light transition-all"
                        style={{ border: form.presupuesto === p ? "1px solid #F0EDE8" : "1px solid rgba(240,237,232,0.1)", color: form.presupuesto === p ? "#F0EDE8" : "rgba(240,237,232,0.4)" }}>
                        {p}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase mt-6 mb-2" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>Plazo</p>
                  <div className="grid grid-cols-3 gap-2">
                    {plazos.map((p) => (
                      <button key={p} onClick={() => setForm({ ...form, plazo: p })}
                        className="p-4 text-left text-xs font-light transition-all"
                        style={{ border: form.plazo === p ? "1px solid #F0EDE8" : "1px solid rgba(240,237,232,0.1)", color: form.plazo === p ? "#F0EDE8" : "rgba(240,237,232,0.4)" }}>
                        {p}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => form.tipo && form.presupuesto && form.plazo && setStep(2)}
                    className="mt-8 px-10 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
                    style={{ backgroundColor: "#F0EDE8", color: "#000000", fontFamily: "Helvetica, sans-serif" }}>
                    Continuar
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>Describe tu proyecto</p>
                    <textarea value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                      placeholder="Que quieres conseguir. Que te inspira. Que no quieres bajo ningun concepto..."
                      className="w-full p-5 text-sm font-light outline-none resize-none"
                      rows={6}
                      style={{ backgroundColor: "transparent", border: "1px solid rgba(240,237,232,0.12)", color: "#F0EDE8", fontFamily: "Georgia, serif", lineHeight: "1.8" }}
                       />
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase" style={{ border: "1px solid rgba(240,237,232,0.12)", color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>Atras</button>
                    <button onClick={() => setStep(3)} className="flex-1 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80" style={{ backgroundColor: "#F0EDE8", color: "#000000", fontFamily: "Helvetica, sans-serif" }}>Continuar</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Tu nombre", key: "nombre", placeholder: "Como te llamas" },
                    { label: "Empresa o marca", key: "empresa", placeholder: "Nombre de tu empresa" },
                    { label: "Email", key: "email", placeholder: "Tu email de contacto" },
                  ].map((f) => (
                    <div key={f.key}>
                      <p className="text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(240,237,232,0.3)", fontFamily: "Helvetica, sans-serif" }}>{f.label}</p>
                      <input type="text" value={form[f.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.placeholder}
                        className="w-full p-4 text-sm font-light outline-none"
                        style={{ backgroundColor: "transparent", border: "1px solid rgba(240,237,232,0.12)", color: "#F0EDE8", fontFamily: "Georgia, serif" }} />
                    </div>
                  ))}
                  <div className="flex gap-3 mt-4">
                    <button onClick={() => setStep(2)} className="px-8 py-4 text-[10px] tracking-[0.3em] uppercase" style={{ border: "1px solid rgba(240,237,232,0.12)", color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>Atras</button>
                    <button onClick={() => form.nombre && form.email && setEnviado(true)}
                      className="flex-1 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
                      style={{ backgroundColor: "#F0EDE8", color: "#000000", fontFamily: "Helvetica, sans-serif" }}>
                      Enviar briefing
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-8 font-light" style={{ color: "rgba(240,237,232,0.2)" }}>✦</div>
              <h2 className="text-4xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>Briefing recibido.</h2>
              <p className="text-lg font-light mb-2" style={{ color: "rgba(240,237,232,0.4)", fontFamily: "Helvetica, sans-serif" }}>Nuestro equipo seleccionara los 3 perfiles mas afines a tu proyecto.</p>
              <p className="mb-14" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>Recibiras las propuestas en las proximas 48 horas.</p>
              <Link href="/crafted" className="inline-flex px-10 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
                style={{ border: "1px solid rgba(240,237,232,0.2)", color: "#F0EDE8", fontFamily: "Helvetica, sans-serif" }}>
                Volver a Crafted
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
