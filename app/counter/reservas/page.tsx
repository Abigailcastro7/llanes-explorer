"use client";
import Link from "next/link";
import { useState } from "react";

const horarios = ["13:00", "13:30", "14:00", "14:30", "15:00", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];

export default function Reservas() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ personas: "2", fecha: "", hora: "", nombre: "", email: "", telefono: "", nota: "" });
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (!form.fecha || !form.hora || !form.nombre || !form.email) return;
    setConfirmed(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/counter" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFB547] flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <span className="text-white font-bold tracking-widest uppercase">Counter</span>
          </Link>
          <Link href="/counter" className="text-white/40 text-sm hover:text-white transition-colors">← Volver</Link>
        </nav>
      </header>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {!confirmed ? (
            <>
              <div className="text-center mb-12">
                <p className="text-[#FFB547] text-xs font-mono tracking-widest uppercase mb-4">Sistema de reservas</p>
                <h1 className="text-4xl font-bold text-white mb-4">Reserva tu <span style={{ color: "#FFB547" }}>mesa</span></h1>
                <p className="text-white/50">Confirmación inmediata por email. Sin tarjeta de crédito.</p>
              </div>

              {/* Pasos */}
              <div className="flex items-center justify-center gap-4 mb-10">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? "bg-[#FFB547] text-black" : "bg-white/10 text-white/40"}`}>{s}</div>
                    {s < 3 && <div className={`w-12 h-px ${step > s ? "bg-[#FFB547]" : "bg-white/10"}`} />}
                  </div>
                ))}
              </div>

              <div className="bg-[#111008] rounded-2xl border border-white/5 p-8">
                {step === 1 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">¿Cuándo y cuántos?</h3>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="text-white/50 text-sm mb-2 block">Número de personas</label>
                        <div className="grid grid-cols-4 gap-2">
                          {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                            <button key={n} onClick={() => setForm({ ...form, personas: n })}
                              className={`py-3 rounded-xl text-sm font-semibold transition-all ${form.personas === n ? "bg-[#FFB547] text-black" : "bg-white/5 text-white/60 hover:bg-white/10"}`}>
                              {n}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-white/50 text-sm mb-2 block">Fecha</label>
                        <input type="date" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FFB547]/50" />
                      </div>
                      <div>
                        <label className="text-white/50 text-sm mb-2 block">Hora</label>
                        <div className="grid grid-cols-4 gap-2">
                          {horarios.map((h) => (
                            <button key={h} onClick={() => setForm({ ...form, hora: h })}
                              className={`py-2.5 rounded-xl text-sm font-mono transition-all ${form.hora === h ? "bg-[#FFB547] text-black font-bold" : "bg-white/5 text-white/60 hover:bg-white/10"}`}>
                              {h}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button onClick={() => form.fecha && form.hora && setStep(2)}
                        className="w-full py-4 rounded-full bg-[#FFB547] text-black font-bold hover:bg-[#ffc76a] transition-all mt-2 disabled:opacity-40">
                        Continuar →
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Tus datos</h3>
                    <div className="flex flex-col gap-4">
                      {[
                        { label: "Nombre completo", key: "nombre", type: "text", placeholder: "Tu nombre" },
                        { label: "Email", key: "email", type: "email", placeholder: "tu@email.com" },
                        { label: "Teléfono", key: "telefono", type: "tel", placeholder: "+34 600 000 000" },
                      ].map((f) => (
                        <div key={f.key}>
                          <label className="text-white/50 text-sm mb-2 block">{f.label}</label>
                          <input type={f.type} placeholder={f.placeholder}
                            value={form[f.key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FFB547]/50" />
                        </div>
                      ))}
                      <div>
                        <label className="text-white/50 text-sm mb-2 block">Nota especial (opcional)</label>
                        <textarea placeholder="Alergias, ocasión especial, preferencias de mesa..."
                          value={form.nota} onChange={(e) => setForm({ ...form, nota: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#FFB547]/50 h-24 resize-none" />
                      </div>
                      <div className="flex gap-3">
                        <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-full border border-white/10 text-white/60 font-semibold hover:border-white/30 transition-all">← Atrás</button>
                        <button onClick={() => form.nombre && form.email && setStep(3)} className="flex-1 py-4 rounded-full bg-[#FFB547] text-black font-bold hover:bg-[#ffc76a] transition-all">Continuar →</button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Confirma tu reserva</h3>
                    <div className="flex flex-col gap-3 mb-8">
                      {[
                        { label: "Personas", value: form.personas },
                        { label: "Fecha", value: form.fecha },
                        { label: "Hora", value: form.hora },
                        { label: "Nombre", value: form.nombre },
                        { label: "Email", value: form.email },
                        { label: "Teléfono", value: form.telefono || "No indicado" },
                        { label: "Nota", value: form.nota || "Sin notas" },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between py-3 border-b border-white/5">
                          <span className="text-white/40 text-sm">{item.label}</span>
                          <span className="text-white text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-full border border-white/10 text-white/60 font-semibold hover:border-white/30 transition-all">← Atrás</button>
                      <button onClick={handleConfirm} className="flex-1 py-4 rounded-full bg-[#FFB547] text-black font-bold hover:bg-[#ffc76a] transition-all">Confirmar reserva ✓</button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-7xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-white mb-3">¡Reserva confirmada!</h2>
              <p className="text-white/50 mb-2">Te esperamos el <span className="text-white font-semibold">{form.fecha}</span> a las <span className="text-white font-semibold">{form.hora}</span></p>
              <p className="text-white/30 text-sm mb-8">Hemos enviado la confirmación a {form.email}</p>
              <div className="p-6 rounded-2xl bg-[#111008] border border-[#FFB547]/20 max-w-sm mx-auto mb-8">
                <div className="text-[#FFB547] font-mono text-xs tracking-widest uppercase mb-3">Resumen</div>
                <div className="text-white font-bold text-lg">{form.personas} persona{parseInt(form.personas) > 1 ? "s" : ""} · {form.hora}</div>
                <div className="text-white/40 text-sm mt-1">Counter Restaurante · Madrid</div>
              </div>
              <Link href="/counter" className="inline-flex px-8 py-4 rounded-full bg-[#FFB547] text-black font-bold hover:bg-[#ffc76a] transition-all">
                Volver al restaurante
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
