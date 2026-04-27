"use client";
import Link from "next/link";
import { useState } from "react";

const transacciones = [
  { nombre: "Proyecto Zara Home", monto: 3500, fecha: "Hoy, 14:32", tipo: "ingreso", categoria: "Diseño" },
  { nombre: "Suscripcion Adobe CC", monto: -59, fecha: "Ayer, 09:15", tipo: "gasto", categoria: "Software" },
  { nombre: "Proyecto Startup X", monto: 1800, fecha: "23 Abr", tipo: "ingreso", categoria: "Desarrollo" },
  { nombre: "Hosting anual", monto: -120, fecha: "22 Abr", tipo: "gasto", categoria: "Infraestructura" },
  { nombre: "Consultoria Banco Norte", monto: 2200, fecha: "21 Abr", tipo: "ingreso", categoria: "Consultoria" },
  { nombre: "Coworking Madrid", monto: -250, fecha: "20 Abr", tipo: "gasto", categoria: "Espacio" },
];

export default function Dashboard() {
  const [periodo, setPeriodo] = useState("Abril 2026");

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
            <Link href="/ledger/dashboard" className="text-white font-medium">Dashboard</Link>
            <Link href="/ledger/facturas" className="hover:text-white transition-colors">Facturas</Link>
            <Link href="/ledger/premium" className="hover:text-white transition-colors">Planes</Link>
          </div>
          <Link href="/ledger/facturas" className="px-4 py-2 rounded-full text-xs font-semibold" style={{ backgroundColor: "#C9A96E", color: "#07080A" }}>+ Nueva factura</Link>
        </nav>
      </header>

      <div className="pt-24 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs mb-1" style={{ color: "rgba(240,237,232,0.3)" }}>Bienvenida, Abigail</p>
              <h1 className="text-3xl font-bold" style={{ letterSpacing: "-0.02em" }}>Tu dashboard financiero</h1>
            </div>
            <div className="flex gap-2">
              {["Abril 2026", "Marzo 2026", "Q1 2026"].map((p) => (
                <button key={p} onClick={() => setPeriodo(p)}
                  className="px-4 py-2 rounded-full text-xs font-medium transition-all"
                  style={{ backgroundColor: periodo === p ? "#C9A96E" : "rgba(255,255,255,0.04)", color: periodo === p ? "#07080A" : "rgba(240,237,232,0.4)", border: periodo === p ? "none" : "1px solid rgba(255,255,255,0.07)" }}>
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Metricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Ingresos", value: "12.840€", change: "+23% vs mes anterior", up: true },
              { label: "Gastos", value: "2.150€", change: "-8% vs mes anterior", up: false },
              { label: "Beneficio neto", value: "10.690€", change: "+31% vs mes anterior", up: true },
              { label: "Pendiente de cobro", value: "4.200€", change: "3 facturas enviadas", up: null },
            ].map((m) => (
              <div key={m.label} className="p-5 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-xs mb-2" style={{ color: "rgba(240,237,232,0.3)" }}>{m.label}</p>
                <p className="text-2xl font-bold mb-1" style={{ color: "#F0EDE8", letterSpacing: "-0.02em" }}>{m.value}</p>
                <p className="text-xs" style={{ color: m.up === true ? "#64DC96" : m.up === false ? "#FF6B6B" : "rgba(240,237,232,0.3)" }}>{m.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Transacciones */}
            <div className="md:col-span-2 rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold">Transacciones recientes</h3>
                <Link href="/ledger/facturas" className="text-xs" style={{ color: "#C9A96E" }}>Ver todas</Link>
              </div>
              <div className="flex flex-col gap-1">
                {transacciones.map((t) => (
                  <div key={t.nombre} className="flex items-center justify-between p-3 rounded-xl transition-all hover:bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                        style={{ backgroundColor: t.tipo === "ingreso" ? "rgba(100,220,150,0.1)" : "rgba(255,107,107,0.1)" }}>
                        {t.tipo === "ingreso" ? "+" : "-"}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{t.nombre}</p>
                        <p className="text-[10px]" style={{ color: "rgba(240,237,232,0.3)" }}>{t.fecha} · {t.categoria}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: t.tipo === "ingreso" ? "#64DC96" : "#FF6B6B" }}>
                      {t.tipo === "ingreso" ? "+" : ""}{t.monto}€
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumen fiscal */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 className="font-semibold mb-5">Resumen fiscal</h3>
              <div className="flex flex-col gap-4">
                {[
                  { label: "IVA repercutido", value: "2.696€", sub: "21% sobre ingresos" },
                  { label: "IVA soportado", value: "451€", sub: "21% sobre gastos" },
                  { label: "IVA a pagar", value: "2.245€", sub: "Este trimestre" },
                  { label: "IRPF retenido", value: "1.927€", sub: "15% sobre facturas" },
                ].map((f) => (
                  <div key={f.label} className="flex justify-between items-start p-3 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div>
                      <p className="text-sm font-medium">{f.label}</p>
                      <p className="text-[10px] mt-0.5" style={{ color: "rgba(240,237,232,0.3)" }}>{f.sub}</p>
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#C9A96E" }}>{f.value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-5 py-3 rounded-xl text-xs font-semibold transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(201,169,110,0.12)", color: "#C9A96E", border: "1px solid rgba(201,169,110,0.2)" }}>
                Exportar para gestor
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}