"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function BuhringEye() {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "180px", height: "auto" }}>
      {/* Contorno del ojo */}
      <path d="M10 60 C50 10, 150 10, 190 60 C150 110, 50 110, 10 60 Z"
        stroke="rgba(240,237,232,0.6)" strokeWidth="1.5" fill="none" />
      {/* Iris */}
      <circle cx="100" cy="60" r="28" stroke="rgba(240,237,232,0.5)" strokeWidth="1.5" fill="none" />
      {/* Pupila */}
      <circle cx="100" cy="60" r="14" fill="rgba(240,237,232,0.9)" />
      {/* Reflejo */}
      <circle cx="107" cy="53" r="4" fill="rgba(7,8,10,0.6)" />
      {/* Rayos del iris */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 16 * Math.cos(rad);
        const y1 = 60 + 16 * Math.sin(rad);
        const x2 = 100 + 26 * Math.cos(rad);
        const y2 = 60 + 26 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(240,237,232,0.2)" strokeWidth="1" />;
      })}
      {/* Pestanas arriba */}
      {[-40,-20,0,20,40].map((offset) => (
        <line key={"top"+offset}
          x1={100 + offset} y1={60 - (offset === 0 ? 42 : offset === -20 || offset === 20 ? 40 : 34)}
          x2={100 + offset * 1.3} y2={60 - (offset === 0 ? 50 : offset === -20 || offset === 20 ? 47 : 40)}
          stroke="rgba(240,237,232,0.4)" strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  );
}

export default function Intro() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      if (password === "buhring2026") {
        router.push("/home");
      } else {
        setError(true);
        setLoading(false);
        setPassword("");
      }
    }, 800);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#07080A" }}>
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Ojo */}
        <div style={{ opacity: 0.85 }}>
          <BuhringEye />
        </div>

        {/* Nombre */}
        <div>
          <div className="text-3xl tracking-[0.6em] uppercase font-light" style={{ color: "#F0EDE8", letterSpacing: "0.6em" }}>
            BUHRING
          </div>
          <div className="text-[9px] tracking-[0.5em] uppercase mt-2" style={{ color: "rgba(240,237,232,0.25)", fontFamily: "Helvetica, sans-serif" }}>
            Demo Lab · Acceso privado
          </div>
        </div>

        {/* Linea */}
        <div className="w-16 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(240,237,232,0.2), transparent)" }} />

        {/* Contraseña */}
        <div className="flex flex-col items-center gap-4 w-64">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Contrasena de acceso"
            className="w-full px-5 py-3.5 text-center text-sm outline-none tracking-[0.2em]"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: error ? "1px solid rgba(213,0,0,0.5)" : "1px solid rgba(255,255,255,0.08)",
              color: "#F0EDE8",
              fontFamily: "Helvetica, sans-serif",
              letterSpacing: password ? "0.3em" : "0.1em",
            }}
          />
          {error && (
            <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(213,0,0,0.7)", fontFamily: "Helvetica, sans-serif" }}>
              Acceso denegado
            </p>
          )}
          <button
            onClick={handleSubmit}
            className="w-full py-3.5 text-[10px] tracking-[0.4em] uppercase font-semibold transition-all hover:opacity-80"
            style={{ backgroundColor: "#F0EDE8", color: "#07080A", fontFamily: "Helvetica, sans-serif" }}>
            {loading ? "Verificando..." : "Entrar"}
          </button>
        </div>
      </div>
    </main>
  );
}