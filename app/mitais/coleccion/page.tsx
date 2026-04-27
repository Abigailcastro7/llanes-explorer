"use client";
import Link from "next/link";
import { useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  img: string;
  nuevo: boolean;
  colores: string[];
  tallas: string[];
}

const productos: Producto[] = [
  { id: 1, nombre: "Top Nanduti Blanco", precio: 290000, categoria: "Tops", img: "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?w=600&q=90", nuevo: true, colores: ["Blanco", "Rojo"], tallas: ["XS", "S", "M", "L"] },
  { id: 2, nombre: "Vestido Guarani Azul", precio: 450000, categoria: "Vestidos", img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=90", nuevo: false, colores: ["Azul", "Blanco"], tallas: ["S", "M", "L", "XL"] },
  { id: 3, nombre: "Blusa Tejido Nanduti", precio: 320000, categoria: "Blusas", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=90", nuevo: true, colores: ["Rojo", "Blanco"], tallas: ["XS", "S", "M"] },
  { id: 4, nombre: "Camisa Bordado Rojo", precio: 310000, categoria: "Tops", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=90", nuevo: false, colores: ["Rojo"], tallas: ["S", "M", "L"] },
  { id: 5, nombre: "Falda Nanduti Azul", precio: 380000, categoria: "Faldas", img: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=90", nuevo: false, colores: ["Azul", "Rojo"], tallas: ["XS", "S", "M", "L", "XL"] },
  { id: 6, nombre: "Vestido Ceremonia", precio: 520000, categoria: "Vestidos", img: "https://images.unsplash.com/photo-1566479179817-b7b5b4dba28d?w=600&q=90", nuevo: true, colores: ["Blanco", "Azul"], tallas: ["S", "M", "L"] },
];

const categorias = ["Todas", "Tops", "Vestidos", "Blusas", "Faldas"];

export default function Coleccion() {
  const [filtro, setFiltro] = useState("Todas");
  const [productoActivo, setProductoActivo] = useState<number | null>(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [agregado, setAgregado] = useState(false);

  const filtered = filtro === "Todas" ? productos : productos.filter(p => p.categoria === filtro);
  const producto = productos.find(p => p.id === productoActivo);

  const handleAgregar = () => {
    if (!tallaSeleccionada) return;
    setAgregado(true);
    setTimeout(() => { setAgregado(false); setProductoActivo(null); setTallaSeleccionada(""); }, 2000);
  };

  return (
    <main style={{ backgroundColor: "#FAFAF8", color: "#0A0A0A", fontFamily: "Georgia, serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(250,250,248,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/mitais" className="text-xl tracking-[0.4em] uppercase font-light">Mitais</Link>
          <div className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(10,10,10,0.45)" }}>
            <Link href="/mitais/coleccion" className="text-black font-medium">Coleccion</Link>
            <Link href="/mitais" className="hover:text-black transition-colors">Inicio</Link>
          </div>
          <Link href="/mitais/carrito" className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(10,10,10,0.45)" }}>Carrito</Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[9px] tracking-[0.5em] uppercase mb-3" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>Primavera 2026</p>
            <h1 className="text-5xl font-light" style={{ letterSpacing: "-0.02em" }}>Coleccion completa</h1>
          </div>
          <div className="flex gap-0 mb-12" style={{ borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
            {categorias.map((c) => (
              <button key={c} onClick={() => setFiltro(c)}
                className="px-6 py-4 text-[10px] tracking-[0.3em] uppercase transition-all"
                style={{ fontFamily: "Helvetica, sans-serif", color: filtro === c ? "#0A0A0A" : "rgba(10,10,10,0.35)", borderBottom: filtro === c ? "1px solid #0A0A0A" : "1px solid transparent", marginBottom: "-1px" }}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(10,10,10,0.06)" }}>
            {filtered.map((p) => (
              <div key={p.id} onClick={() => setProductoActivo(p.id)} className="group cursor-pointer" style={{ backgroundColor: "#FAFAF8" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <img src={p.img} alt={p.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.9) saturate(0.85)" }} />
                  {p.nuevo && (
                    <div className="absolute top-4 left-4 px-3 py-1 text-[9px] tracking-[0.3em] uppercase"
                      style={{ backgroundColor: "#C41E3A", color: "#FAFAF8", fontFamily: "Helvetica, sans-serif" }}>Nuevo</div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "rgba(10,10,10,0.12)" }}>
                    <span className="text-[10px] tracking-[0.3em] uppercase px-6 py-3" style={{ backgroundColor: "#FAFAF8", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif" }}>Ver producto</span>
                  </div>
                </div>
                <div className="p-5" style={{ borderBottom: "1px solid rgba(10,10,10,0.06)" }}>
                  <p className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>{p.categoria}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-light">{p.nombre}</h3>
                    <span className="text-sm font-light" style={{ fontFamily: "Helvetica, sans-serif" }}>{p.precio.toLocaleString()} Gs</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {productoActivo && producto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(10,10,10,0.7)" }} onClick={() => setProductoActivo(null)}>
          <div className="w-full max-w-2xl mx-4 grid grid-cols-2 overflow-hidden" style={{ backgroundColor: "#FAFAF8" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ height: "500px" }}>
              <img src={producto.img} alt={producto.nombre} className="w-full h-full object-cover" style={{ filter: "brightness(0.9) saturate(0.85)" }} />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>{producto.categoria}</p>
                <h2 className="text-2xl font-light mb-2">{producto.nombre}</h2>
                <p className="text-xl font-light mb-6" style={{ fontFamily: "Helvetica, sans-serif" }}>{producto.precio.toLocaleString()} Gs</p>
                <div className="mb-6">
                  <p className="text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>Colores</p>
                  <div className="flex gap-2">
                    {producto.colores.map((c) => (
                      <span key={c} className="text-[10px] px-3 py-1.5" style={{ border: "1px solid rgba(10,10,10,0.2)", color: "rgba(10,10,10,0.5)", fontFamily: "Helvetica, sans-serif" }}>{c}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <p className="text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(10,10,10,0.3)", fontFamily: "Helvetica, sans-serif" }}>Talla</p>
                  <div className="flex gap-2 flex-wrap">
                    {producto.tallas.map((t) => (
                      <button key={t} onClick={() => setTallaSeleccionada(t)}
                        className="w-10 h-10 text-xs transition-all"
                        style={{ border: tallaSeleccionada === t ? "1px solid #0A0A0A" : "1px solid rgba(10,10,10,0.15)", color: tallaSeleccionada === t ? "#0A0A0A" : "rgba(10,10,10,0.4)", backgroundColor: tallaSeleccionada === t ? "rgba(10,10,10,0.05)" : "transparent", fontFamily: "Helvetica, sans-serif" }}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={handleAgregar}
                  className="py-4 text-[10px] tracking-[0.3em] uppercase transition-all"
                  style={{ backgroundColor: agregado ? "#C41E3A" : "#0A0A0A", color: "#FAFAF8", fontFamily: "Helvetica, sans-serif" }}>
                  {agregado ? "Agregado!" : tallaSeleccionada ? "Agregar al carrito" : "Selecciona una talla"}
                </button>
                <button onClick={() => setProductoActivo(null)} className="py-3 text-[10px] tracking-[0.3em] uppercase"
                  style={{ border: "1px solid rgba(10,10,10,0.15)", color: "rgba(10,10,10,0.4)", fontFamily: "Helvetica, sans-serif" }}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}