"use client";
import Link from "next/link";
import { useState } from "react";

const rutinas = [
  { name: "Full Body Power", duracion: "45 min", nivel: "Intermedio", calorias: "380 kcal", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80", tag: "Popular", ejercicios: 12, categoria: "Fuerza" },
  { name: "HIIT Cardio Blast", duracion: "30 min", nivel: "Avanzado", calorias: "450 kcal", img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&q=80", tag: "Nuevo", ejercicios: 8, categoria: "Cardio" },
  { name: "Core & Mobility", duracion: "40 min", nivel: "Principiante", calorias: "220 kcal", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80", tag: "Top", ejercicios: 10, categoria: "Movilidad" },
  { name: "Upper Body Strength", duracion: "50 min", nivel: "Intermedio", calorias: "320 kcal", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80", tag: "", ejercicios: 14, categoria: "Fuerza" },
  { name: "Yoga Flow", duracion: "60 min", nivel: "Principiante", calorias: "180 kcal", img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80", tag: "", ejercicios: 20, categoria: "Movilidad" },
  { name: "Sprint Intervals", duracion: "25 min", nivel: "Avanzado", calorias: "500 kcal", img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=500&q=80", tag: "Nuevo", ejercicios: 6, categoria: "Cardio" },
];

export default function Rutinas() {
  const [filtro, setFiltro] = useState("Todas");
  const categorias = ["Todas", "Fuerza", "Cardio", "Movilidad"];
  const filtered = filtro === "Todas" ? rutinas : rutinas.filter(r => r.categoria === filtro);

  return (
    <main style={{ backgroundColor: "#080808", color: "#F5F5F5", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(8,8,8,0.85)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/pulse" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F5F5F5" }}>
              <span className="text-black font-black text-sm">P</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Pulse</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "rgba(245,245,245,0.45)" }}>
            <Link href="/pulse/rutinas" className="text-white font-medium">Rutinas</Link>
            <Link href="/pulse/coach" className="hover:text-white transition-colors">Coach IA</Link>
            <Link href="/pulse/premium" className="hover:text-white transition-colors">Premium</Link>
          </div>
          <Link href="/pulse/premium" className="px-5 py-2.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "#F5F5F5", color: "#080808" }}>Empezar</Link>
        </nav>
      </header>
      <div className="pt-28 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-medium" style={{ color: "#4A9EFF" }}>Catalogo completo</p>
            <h1 className="text-5xl font-bold mb-4" style={{ letterSpacing: "-0.03em" }}>
              Rutinas <span style={{ color: "rgba(245,245,245,0.25)" }}>para ti</span>
            </h1>
            <p className="text-lg" style={{ color: "rgba(245,245,245,0.4)" }}>320 rutinas que evolucionan con tu cuerpo. Filtra por objetivo.</p>
          </div>
          <div className="flex gap-2 mb-10 flex-wrap">
            {categorias.map((c) => (
              <button key={c} onClick={() => setFiltro(c)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{ backgroundColor: filtro === c ? "#F5F5F5" : "rgba(255,255,255,0.05)", color: filtro === c ? "#080808" : "rgba(245,245,245,0.5)", border: filtro === c ? "none" : "1px solid rgba(255,255,255,0.08)" }}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((r) => (
              <div key={r.name} className="group rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.45) saturate(0.7)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 50%)" }} />
                  {r.tag && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "rgba(74,158,255,0.2)", color: "#4A9EFF", border: "1px solid rgba(74,158,255,0.3)" }}>
                      {r.tag}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-bold text-lg" style={{ letterSpacing: "-0.02em" }}>{r.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs mb-3" style={{ color: "rgba(245,245,245,0.35)" }}>
                    <span>{r.duracion}</span>
                    <span>{r.nivel}</span>
                    <span>{r.calorias}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "rgba(245,245,245,0.3)" }}>{r.ejercicios} ejercicios</span>
                    <Link href="/pulse/premium" className="text-xs font-medium px-3 py-1.5 rounded-full transition-all"
                      style={{ backgroundColor: "rgba(245,245,245,0.08)", color: "rgba(245,245,245,0.6)" }}>
                      Empezar →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}