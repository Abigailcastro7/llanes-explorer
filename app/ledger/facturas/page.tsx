"use client";
import Link from "next/link";
import { useState } from "react";

const facturasList = [
  { id: "F-2026-042", cliente: "Zara Home", concepto: "Diseño campana primavera", monto: 3500, fecha: "27 Abr 2026", estado: "pagada", vence: "" },
  { id: "F-2026-041", cliente: "Startup X", concepto: "Desarrollo landing page", monto: 1800, fecha: "23 Abr 2026", estado: "pagada", vence: "" },
  { id: "F-2026-040", cliente: "Banco Norte", concepto: "Consultoria digital Q2", monto: 2200, fecha: "21 Abr 2026", estado: "pendiente", vence: "5 May 2026" },
  { id: "F-2026-039", cliente: "Hotel Ritz", concepto: "Identidad visual completa", monto: 4800, fecha: "15 Abr 2026", estado: "pendiente", vence: "30 Abr 2026" },
  { id: "F-2026-038", cliente: "Grupo Inditex", concepto: "Estrategia redes sociales", monto: 1500, fecha: "10 Abr 2026", estado: "vencida", vence: "25 Abr 2026" },
];

const estadoColors: Record<string, string> = {
  pagada: "#64DC96",
  pendiente: "#C9A96E",
  vencida: "#FF6B6B",
};

export default function Facturas() {
  const [nueva, setNueva] = useState(false);
  const [creada, setCreada] = useState(false);

  return (
    <main style={{ backgroundColor: "#07080A", color: "#F0EDE8", fontFamily: "system-ui, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-4" style={{ backgroundColor: "rgba(7,8,10,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/ledger" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)" }}>
              <span className="text-xs font-bold" style={{ color: "#C9A96E" }}>L</span>
            </div>
            <span className="font-semibold">Ledger</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: "rgba(240,237,232,0.4)" }}>
            <Link href="/ledger/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/ledger/facturas" className="text-white font-medium">Facturas</Link>
            <Link href="/ledger/premium" className="hover:text-white transition-colors">Planes</Link>
          </div>
          <button onClick={() => setNueva(true)} className="px-4 py-2 rounded-full text-xs font-semibold" style={{ backgroundColor: "#C9A96E", color: "#07080A" }}>
            + Nueva factura
          </button>
        </nav>
      </header>

      <div className="pt-24 pb-20 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold" style={{ letterSpacing: "-0.02em" }}>Facturas</h1>
            <div className="flex gap-3 text-sm">
              {["Todas", "Pagadas", "Pendientes", "Vencidas"].map((f) => (
                <button key={f} className="px-4 py-1.5 rounded-full text-xs transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(240,237,232,0.4)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-8">
            {facturasList.map((f) => (
              <div key={f.id} className="flex items-center justify-between p-5 rounded-2xl transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-mono"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(240,237,232,0.3)" }}>
                    PDF
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-0.5">
                      <span className="font-semibold text-sm">{f.cliente}</span>
                      <span className="text-[10px] font-mono" style={{ color: "rgba(240,237,232,0.25)" }}>{f.id}</span>
                    </div>
                    <p className="text-xs" style={{ color: "rgba(240,237,232,0.35)" }}>{f.concepto} · {f.fecha}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-bold">{f.monto.toLocaleString()}€</p>
                    {f.vence && <p className="text-[10px]" style={{ color: "rgba(240,237,232,0.3)" }}>Vence {f.vence}</p>}
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full capitalize"
                    style={{ backgroundColor: estadoColors[f.estado] + "15", color: estadoColors[f.estado], border: "1px solid " + estadoColors[f.estado] + "30" }}>
                    {f.estado}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal nueva factura */}
      {nueva && !creada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
          <div className="w-full max-w-md mx-4 rounded-2xl p-8" style={{ backgroundColor: "#0F1014", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h2 className="text-xl font-bold mb-6">Nueva factura</h2>
            <div className="flex flex-col gap-4">
              {[
                { label: "Cliente", placeholder: "Nombre del cliente" },
                { label: "Concepto", placeholder: "Descripcion del servicio" },
                { label: "Importe (€)", placeholder: "0.00" },
              ].map((f) => (
                <div key={f.label}>
                  <p className="text-xs mb-2" style={{ color: "rgba(240,237,232,0.4)" }}>{f.label}</p>
                  <input type="text" placeholder={f.placeholder} className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#F0EDE8" }} />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setNueva(false)} className="flex-1 py-3 rounded-xl text-sm"
                style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(240,237,232,0.4)" }}>
                Cancelar
              </button>
              <button onClick={() => setCreada(true)} className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
                style={{ backgroundColor: "#C9A96E", color: "#07080A" }}>
                Crear factura
              </button>
            </div>
          </div>
        </div>
      )}

      {creada && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
          <div className="w-full max-w-sm mx-4 rounded-2xl p-8 text-center" style={{ backgroundColor: "#0F1014", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-xl font-bold mb-2">Factura creada</h2>
            <p className="text-sm mb-6" style={{ color: "rgba(240,237,232,0.4)" }}>Enviada al cliente por email automaticamente.</p>
            <button onClick={() => { setNueva(false); setCreada(false); }} className="px-8 py-3 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "#C9A96E", color: "#07080A" }}>
              Perfecto
            </button>
          </div>
        </div>
      )}
    </main>
  );
}