"use client";
import Link from "next/link";
import { useState } from "react";

export default function Carrito() {
  const [pedido, setPedido] = useState(false);

  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#F5F5F5", fontFamily: "system-ui, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/mitais" className="text-xl font-black uppercase tracking-[0.3em]">Mitais</Link>
          <Link href="/mitais/coleccion" className="text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(255,255,255,0.4)" }}>Seguir comprando</Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {!pedido ? (
            <>
              <h1 className="text-4xl font-black uppercase mb-12" style={{ letterSpacing: "-0.02em" }}>Tu carrito</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  {[
                    { nombre: "Remera Paraguay 1811", precio: 290000, talla: "L", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80" },
                    { nombre: "Jersey Rayas Rojo", precio: 350000, talla: "M", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200&q=80" },
                  ].map((item) => (
                    <div key={item.nombre} className="flex gap-5 py-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="w-24 h-28 overflow-hidden shrink-0">
                        <img src={item.img} alt={item.nombre} className="w-full h-full object-cover" style={{ filter: "brightness(0.8) saturate(0.7)" }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold uppercase mb-1">{item.nombre}</h3>
                        <p className="text-[10px] mb-3" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Helvetica, sans-serif" }}>Talla {item.talla}</p>
                        <p className="text-sm font-semibold" style={{ fontFamily: "Helvetica, sans-serif" }}>{item.precio.toLocaleString()} Gs</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <h3 className="text-sm font-bold uppercase mb-6 tracking-wide">Resumen</h3>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between text-sm" style={{ fontFamily: "Helvetica, sans-serif" }}>
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>Subtotal</span>
                      <span>640.000 Gs</span>
                    </div>
                    <div className="flex justify-between text-sm" style={{ fontFamily: "Helvetica, sans-serif" }}>
                      <span style={{ color: "rgba(255,255,255,0.4)" }}>Envio</span>
                      <span style={{ color: "#D50000" }}>Gratis</span>
                    </div>
                  </div>
                  <div className="flex justify-between py-4 mb-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="font-bold uppercase text-sm tracking-wide">Total</span>
                    <span className="font-bold text-lg">640.000 Gs</span>
                  </div>
                  <button onClick={() => setPedido(true)} className="w-full py-4 text-[10px] tracking-[0.3em] uppercase font-bold transition-all hover:opacity-80"
                    style={{ backgroundColor: "#F5F5F5", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif" }}>
                    Confirmar pedido
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"
                style={{ backgroundColor: "#D50000" }}>✓</div>
              <h2 className="text-4xl font-black uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>Pedido confirmado</h2>
              <p className="text-base mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Helvetica, sans-serif" }}>Gracias por tu compra. Te avisamos cuando salga.</p>
              <p className="text-sm mb-12" style={{ color: "rgba(255,255,255,0.2)", fontFamily: "Helvetica, sans-serif" }}>Pedido #MIT-2026-0847</p>
              <Link href="/mitais/coleccion" className="inline-flex px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-bold transition-all hover:opacity-80"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#F5F5F5", fontFamily: "Helvetica, sans-serif" }}>
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}