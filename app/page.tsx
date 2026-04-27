"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Intro() {
  const [phase, setPhase] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => setPhase(3), 2800);
    const t4 = setTimeout(() => router.push("/home"), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#07080A", transition: "opacity 0.8s ease", opacity: phase === 3 ? 0 : 1 }}>
      <div className="flex flex-col items-center gap-8 text-center">

        {/* Ojo SVG animado */}
        <div style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? "scale(1)" : "scale(0.85)", transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)" }}>
          <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "160px", height: "auto" }}>
            <path d="M10 60 C50 10, 150 10, 190 60 C150 110, 50 110, 10 60 Z"
              stroke="rgba(240,237,232,0.5)" strokeWidth="1.2" fill="none"
              style={{ strokeDasharray: 400, strokeDashoffset: phase >= 1 ? 0 : 400, transition: "stroke-dashoffset 1.4s ease" }} />
            <circle cx="100" cy="60" r="28" stroke="rgba(240,237,232,0.35)" strokeWidth="1.2" fill="none"
              style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }} />
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 100 + 16 * Math.cos(rad);
              const y1 = 60 + 16 * Math.sin(rad);
              const x2 = 100 + 26 * Math.cos(rad);
              const y2 = 60 + 26 * Math.sin(rad);
              return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(240,237,232,0.12)" strokeWidth="0.8"
                style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.8s ease 0.8s" }} />;
            })}
            <circle cx="100" cy="60" r="14" fill="rgba(240,237,232,0.85)"
              style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }} />
            <circle cx="106" cy="54" r="3.5" fill="rgba(7,8,10,0.5)"
              style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.8s ease 0.9s" }} />
            {[-40,-20,0,20,40].map((offset) => (
              <line key={"t"+offset}
                x1={100 + offset} y1={60 - (offset === 0 ? 42 : Math.abs(offset) === 20 ? 40 : 34)}
                x2={100 + offset * 1.3} y2={60 - (offset === 0 ? 50 : Math.abs(offset) === 20 ? 47 : 40)}
                stroke="rgba(240,237,232,0.3)" strokeWidth="1.2" strokeLinecap="round"
                style={{ opacity: phase >= 1 ? 1 : 0, transition: "opacity 0.6s ease 1s" }} />
            ))}
          </svg>
        </div>

        {/* Nombre */}
        <div style={{ opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? "translateY(0)" : "translateY(8px)", transition: "all 0.8s ease" }}>
          <div className="text-2xl tracking-[0.7em] uppercase font-light" style={{ color: "#F0EDE8" }}>
            BUHRING
          </div>
          <div className="text-[8px] tracking-[0.5em] uppercase mt-2" style={{ color: "rgba(240,237,232,0.2)", fontFamily: "Helvetica, sans-serif" }}>
            Studio · Madrid
          </div>
        </div>

        {/* Punto parpadeante */}
        <div style={{ opacity: phase >= 2 ? 1 : 0, transition: "opacity 0.5s ease 0.3s" }}>
          <div className="w-1 h-1 rounded-full animate-pulse mx-auto" style={{ backgroundColor: "rgba(240,237,232,0.3)" }} />
        </div>
      </div>
    </main>
  );
}