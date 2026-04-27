"use client";
import Link from "next/link";
import { useState } from "react";

export default function Carrito() {
  const [pedido, setPedido] = useState(false);

  return (
    <main style={{ backgroundColor: "#FAFAF8", color: "#0A0A0A", fontFamily: "Georgia, serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(250,250,248,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/mitais" className="text-xl tracking-[0.4em] uppercase font-light">Mitais</Link>
          <Link href="/mitais/coleccion" className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(10,10,10,0.4)" }}>Seguir comprando</Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {!pedido ? (
            <>
              <h1 className="text-4xl font-light mb-12" style={{ letterSpacing: "-0.02em" }}>Tu carrito</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  {[
                    { nombre: "Top Nanduti Blanco", precio: 290000, talla: "M", color: "Blanco", img: "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=200&q=80" },
                    { nombre: "Blusa Tejido Nanduti", precio: 320000, talla: "S", color: "Rojo", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=200&q=80" },
                  ].map((item) => (
                    <div key={item.nombre} className="flex gap-5 py-6" style={{ borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
                      <div className="w-24 h-28 overflow-hidden shrink-0">
                        <img src={item.img} alt={item.nombre} className="w-full h-full object-cover" style={{ filter: "brightness(0.9) saturate(0.8)" }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-light mb-1">{item.nombre}</h3>
                        <p className="text-[10px] mb-3" style={{ color: "rgba(10,10,10,0.35)", fontFamily: "Helvetica, sans-serif" }}>Talla {item.talla} · {item.color}</p>
                        <p className="text-sm font-light" style={{ fontFamily: "Helvetica, sans-serif" }}>{item.precio.toLocaleString()} Gs</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6" style={{ backgroundColor: "rgba(10,10,10,0.03)", border: "1px solid rgba(10,10,10,0.08)" }}>
                  <h3 className="text-base font-light mb-6">Resumen del pedido</h3>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between text-sm" style={{ fontFamily: "Helvetica, sans-serif" }}>
                      <span style={{ color: "rgba(10,10,10,0.45)" }}>Subtotal</span>
                      <span>610.000 Gs</span>
                    </div>
                    <div className="flex justify-between text-sm" style={{ fontFamily: "Helvetica, sans-serif" }}>
                      <span style={{ color: "rgba(10,10,10,0.45)" }}>Envio</span>
                      <span style={{ color: "#C41E3A" }}>Gratis</span>
                    </div>
                  </div>
                  <div className="flex justify-between py-4 mb-6" style={{ borderTop: "1px solid rgba(10,10,10,0.08)" }}>
                    <span className="font-light">Total</span>
                    <span className="font-light text-lg">610.000 Gs</span>
                  </div>
                  <button onClick={() => setPedido(true)} className="w-full py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
                    style={{ backgroundColor: "#0A0A0A", color: "#FAFAF8", fontFamily: "Helvetica, sans-serif" }}>
                    Finalizar pedido
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="text-6xl mb-6 font-light" style={{ color: "#C41E3A" }}>✓</div>
              <h2 className="text-4xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>Pedido confirmado</h2>
              <p className="text-base font-light mb-2" style={{ color: "rgba(10,10,10,0.45)", fontFamily: "Helvetica, sans-serif" }}>Gracias por tu compra. Recibirás una confirmación pronto.</p>
              <p className="text-sm mb-12" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>Pedido #MIT-2026-0847</p>
              <Link href="/mitais/coleccion" className="inline-flex px-10 py-4 text-[10px] tracking-[0.3em] uppercase transition-all hover:opacity-80"
                style={{ border: "1px solid rgba(10,10,10,0.3)", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif" }}>
                Seguir comprando
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}