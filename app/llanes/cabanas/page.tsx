"use client";
import Link from "next/link";
import { useState } from "react";

const cabanas = [
  { id: 1, name: "Toneles del Salto Suizo", lugar: "Independencia, Guaira", img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&q=80", precio: 120, rating: "4.9", resenas: 48, descripcion: "Alojamiento unico dentro de toneles de madera con vista al Salto Suizo. La favorita de Joel.", tags: ["Naturaleza", "Romantico", "Vista al salto"], comision: 15, joel: true },
  { id: 2, name: "Cabanas del Lago Ypacarai", lugar: "Aregua, Central", img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&q=80", precio: 85, rating: "4.8", resenas: 34, descripcion: "A orillas del lago Ypacarai, en el pueblo natal de Joel. Desayuno incluido.", tags: ["Lago", "Familiar", "Desayuno"], comision: 12, joel: false },
  { id: 3, name: "Ecoaventura Paraguari", lugar: "Paraguari", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=80", precio: 95, rating: "4.7", resenas: 27, descripcion: "Cabanas en medio del bosque con senderismo, tirolesa y avistamiento de aves.", tags: ["Aventura", "Bosque", "Actividades"], comision: 13, joel: false },
  { id: 4, name: "Posada del Rio Parana", lugar: "Carmen del Parana, Itapua", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80", precio: 110, rating: "4.9", resenas: 52, descripcion: "Frente al rio Parana, con piscina natural y kayaks incluidos.", tags: ["Rio", "Piscina", "Kayak"], comision: 15, joel: true },
  { id: 5, name: "Refugio Nu Vera", lugar: "Misiones", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80", precio: 75, rating: "4.6", resenas: 19, descripcion: "Estancia en el corazon de Misiones. Fauna salvaje y gastronomia tipica guarani.", tags: ["Fauna", "Estancia", "Guarani"], comision: 10, joel: false },
  { id: 6, name: "Villa del Chaco", lugar: "Filadelfia, Boqueron", img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80", precio: 140, rating: "4.8", resenas: 23, descripcion: "La unica cabana premium en el Chaco paraguayo. Para los viajeros que buscan lo extremo.", tags: ["Chaco", "Extremo", "Fauna"], comision: 18, joel: true },
];

export default function Cabanas() {
  const [reservando, setReservando] = useState<number | null>(null);
  const [reservado, setReservado] = useState<number | null>(null);

  const totalComision = cabanas.reduce((acc, c) => acc + Math.round(c.precio * c.comision / 100), 0);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#070d0a", color: "#f0f4f2" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(7,13,10,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(82,183,136,0.1)" }}>
        <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/llanes" className="flex items-center gap-3">
            <span className="text-xl">🍀</span>
            <span className="font-semibold" style={{ color: "#f0f4f2" }}>Llanes Explorer</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/llanes/destinos" style={{ color: "rgba(240,244,242,0.5)" }}>Destinos</Link>
            <Link href="/llanes/cabanas" className="font-medium" style={{ color: "#52B788" }}>Cabanas</Link>
            <Link href="/llanes/rutas" style={{ color: "rgba(240,244,242,0.5)" }}>Rutas</Link>
            <Link href="/llanes/premium" style={{ color: "rgba(240,244,242,0.5)" }}>Premium</Link>
          </div>
          <Link href="/llanes/premium" className="px-5 py-2.5 rounded-full text-sm font-medium" style={{ backgroundColor: "rgba(82,183,136,0.15)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)" }}>
            Premium
          </Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "rgba(144,224,239,0.5)" }}>Recomendadas por Joel</p>
            <h1 className="text-4xl font-light mb-4" style={{ color: "#f0f4f2" }}>Cabanas <span className="font-semibold" style={{ color: "#52B788" }}>seleccionadas</span></h1>
            <p className="text-lg max-w-xl" style={{ color: "rgba(240,244,242,0.4)" }}>Solo las que Joel visito y recomienda. Cada reserva apoya directamente a la comunidad viajera.</p>
          </div>

          <div className="mb-10 p-6 rounded-2xl" style={{ backgroundColor: "rgba(82,183,136,0.06)", border: "1px solid rgba(82,183,136,0.2)" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: "rgba(144,224,239,0.6)" }}>Sistema de comisiones Joel</p>
                <p className="font-semibold text-lg" style={{ color: "#f0f4f2" }}>Cada reserva genera ingresos automaticos para ti</p>
                <p className="text-sm mt-1" style={{ color: "rgba(240,244,242,0.4)" }}>Tu comunidad ya pregunta por estas cabanas. Ahora cada reserva te genera entre 10-18% de comision automaticamente.</p>
              </div>
              <div className="text-center p-4 rounded-xl shrink-0" style={{ backgroundColor: "rgba(82,183,136,0.1)", border: "1px solid rgba(82,183,136,0.2)" }}>
                <p className="text-xs font-mono uppercase" style={{ color: "rgba(144,224,239,0.5)" }}>Si se reservan todas</p>
                <p className="text-3xl font-bold mt-1" style={{ color: "#52B788" }}>{"$" + totalComision}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(240,244,242,0.3)" }}>en comisiones esta noche</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cabanas.map((c) => (
              <div key={c.id} className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(82,183,136,0.1)" }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" style={{ filter: "brightness(0.65) saturate(1.1)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,13,10,0.8) 0%, transparent 50%)" }} />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-mono font-bold" style={{ backgroundColor: "rgba(82,183,136,0.9)", color: "#070d0a" }}>
                    {"+" + c.comision + "% para Joel"}
                  </div>
                  {c.joel && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs flex items-center gap-1" style={{ backgroundColor: "rgba(7,13,10,0.7)", color: "#52B788", border: "1px solid rgba(82,183,136,0.3)", backdropFilter: "blur(10px)" }}>
                      🍀 Favorita de Joel
                    </div>
                  )}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono" style={{ color: "rgba(144,224,239,0.7)" }}>{c.lugar}</span>
                    <span className="text-xs font-medium" style={{ color: "#52B788" }}>{"★ " + c.rating + " (" + c.resenas + ")"}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1" style={{ color: "#f0f4f2" }}>{c.name}</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(240,244,242,0.38)" }}>{c.descripcion}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(82,183,136,0.08)", color: "rgba(240,244,242,0.4)", border: "1px solid rgba(82,183,136,0.1)" }}>{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(82,183,136,0.08)" }}>
                    <div>
                      <span className="text-xl font-semibold" style={{ color: "#f0f4f2" }}>{"$" + c.precio}</span>
                      <span className="text-xs ml-1" style={{ color: "rgba(240,244,242,0.3)" }}>/noche</span>
                      <div className="text-xs mt-0.5" style={{ color: "#52B788" }}>{"Comision Joel: $" + Math.round(c.precio * c.comision / 100)}</div>
                    </div>
                    {reservado === c.id ? (
                      <div className="px-4 py-2 rounded-full text-xs font-medium" style={{ backgroundColor: "rgba(82,183,136,0.15)", color: "#52B788" }}>✓ Reservado</div>
                    ) : (
                      <button onClick={() => { setReservando(c.id); setTimeout(() => { setReservado(c.id); setReservando(null); }, 1500); }}
                        className="px-4 py-2 rounded-full text-xs font-medium transition-all hover:scale-105"
                        style={{ backgroundColor: reservando === c.id ? "rgba(82,183,136,0.2)" : "#2D6A4F", color: "#f0f4f2" }}>
                        {reservando === c.id ? "Procesando..." : "Reservar"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl" style={{ backgroundColor: "rgba(82,183,136,0.04)", border: "1px solid rgba(82,183,136,0.12)" }}>
            <p className="text-xs font-mono tracking-widest uppercase mb-6 text-center" style={{ color: "rgba(144,224,239,0.5)" }}>Como funciona</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { paso: "01", titulo: "Tu comunidad reserva", desc: "Alguien de tus 126K seguidores ve la cabana y reserva directamente aqui." },
                { paso: "02", titulo: "El pago se procesa", desc: "El sistema cobra la reserva de forma segura. Sin que tu hagas nada." },
                { paso: "03", titulo: "Tu comision llega", desc: "Entre el 10% y el 18% de cada reserva va directo a tu cuenta. Automaticamente." },
              ].map((p) => (
                <div key={p.paso} className="text-center">
                  <div className="text-3xl font-light mb-3" style={{ color: "rgba(82,183,136,0.4)" }}>{p.paso}</div>
                  <h3 className="font-semibold mb-2" style={{ color: "#f0f4f2" }}>{p.titulo}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,244,242,0.35)" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}