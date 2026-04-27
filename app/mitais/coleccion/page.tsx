"use client";
import Link from "next/link";
import { useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  img: string;
  tag: string;
  tallas: string[];
  color: string;
  desc: string;
}

const productos: Producto[] = [
  { id: 1, nombre: "Remera Paraguay 1811", precio: 290000, categoria: "Remeras", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=90", tag: "Nuevo", tallas: ["S", "M", "L", "XL", "XXL"], color: "#D50000", desc: "Remera con escudo paraguayo bordado. Tela 100% algodon premium." },
  { id: 2, nombre: "Polo Crochet PY", precio: 320000, categoria: "Polos", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=90", tag: "Agotandose", tallas: ["XS", "S", "M", "L"], color: "#0033A0", desc: "Polo tejido a crochet con detalles de la bandera paraguaya." },
  { id: 3, nombre: "Jersey Rayas Rojo", precio: 350000, categoria: "Jerseys", img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=90", tag: "Nuevo", tallas: ["S", "M", "L", "XL"], color: "#D50000", desc: "Jersey inspirado en la seleccion paraguaya. Edicion limitada." },
  { id: 4, nombre: "Remera Azul 1811", precio: 290000, categoria: "Remeras", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=90", tag: "", tallas: ["S", "M", "L", "XL", "XXL"], color: "#0033A0", desc: "Remera azul con Paraguay bordado en tipografia serif." },
  { id: 5, nombre: "Baseball Jersey White", precio: 380000, categoria: "Jerseys", img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=90", tag: "Nuevo", tallas: ["S", "M", "L"], color: "#0033A0", desc: "Baseball jersey estilo vintage con numero 10 y logo Mitais." },
  { id: 6, nombre: "Polo Rayas Paraguay", precio: 310000, categoria: "Polos", img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=90", tag: "", tallas: ["XS", "S", "M", "L", "XL"], color: "#D50000", desc: "Polo con rayas rojas y blancas, detalle bandera en el pecho." },
];

const categorias = ["Todas", "Remeras", "Polos", "Jerseys"];

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
    <main style={{ backgroundColor: "#0A0A0A", color: "#F5F5F5", fontFamily: "system-ui, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 py-5" style={{ backgroundColor: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link href="/mitais" className="text-xl font-black uppercase tracking-[0.3em]">Mitais</Link>
          <div className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(255,255,255,0.4)" }}>
            <Link href="/mitais/coleccion" className="text-white font-bold">Coleccion</Link>
            <Link href="/mitais" className="hover:text-white transition-colors">Inicio</Link>
          </div>
          <Link href="/mitais/carrito" className="text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "Helvetica, sans-serif", color: "rgba(255,255,255,0.4)" }}>Carrito</Link>
        </nav>
      </header>

      <div className="pt-28 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[9px] tracking-[0.5em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Helvetica, sans-serif" }}>Drop 01 · Paraguay 2026</p>
            <h1 className="text-5xl font-black uppercase" style={{ letterSpacing: "-0.02em" }}>Coleccion</h1>
          </div>
          <div className="flex gap-0 mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {categorias.map((c) => (
              <button key={c} onClick={() => setFiltro(c)}
                className="px-6 py-4 text-[10px] tracking-[0.25em] uppercase transition-all font-semibold"
                style={{ fontFamily: "Helvetica, sans-serif", color: filtro === c ? "#F5F5F5" : "rgba(255,255,255,0.3)", borderBottom: filtro === c ? "2px solid #D50000" : "2px solid transparent", marginBottom: "-1px" }}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div key={p.id} onClick={() => setProductoActivo(p.id)} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-3" style={{ aspectRatio: "3/4" }}>
                  <img src={p.img} alt={p.nombre} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "brightness(0.75) saturate(0.7) contrast(1.05)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)" }} />
                  {p.tag && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-bold"
                      style={{ backgroundColor: p.color, color: "#F5F5F5", fontFamily: "Helvetica, sans-serif" }}>
                      {p.tag}
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: "rgba(10,10,10,0.3)" }}>
                    <span className="text-[10px] tracking-[0.3em] uppercase px-6 py-3 font-bold" style={{ backgroundColor: "#F5F5F5", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif" }}>Ver detalles</span>
                  </div>
                </div>
                <h3 className="text-sm font-bold mb-1 uppercase tracking-wide">{p.nombre}</h3>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Helvetica, sans-serif" }}>{p.precio.toLocaleString()} Gs</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {productoActivo && producto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.85)" }} onClick={() => setProductoActivo(null)}>
          <div className="w-full max-w-2xl mx-4 grid grid-cols-2 overflow-hidden" style={{ backgroundColor: "#111111" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ height: "520px" }}>
              <img src={producto.img} alt={producto.nombre} className="w-full h-full object-cover" style={{ filter: "brightness(0.8) saturate(0.7) contrast(1.05)" }} />
            </div>
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-6 h-1 mb-4" style={{ backgroundColor: producto.color }} />
                <p className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Helvetica, sans-serif" }}>{producto.categoria}</p>
                <h2 className="text-xl font-black uppercase mb-2" style={{ letterSpacing: "-0.01em" }}>{producto.nombre}</h2>
                <p className="text-lg font-bold mb-3" style={{ color: "#F5F5F5", fontFamily: "Helvetica, sans-serif" }}>{producto.precio.toLocaleString()} Gs</p>
                <p className="text-xs mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Helvetica, sans-serif", lineHeight: "1.7" }}>{producto.desc}</p>
                <div className="mb-8">
                  <p className="text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Helvetica, sans-serif" }}>Talla</p>
                  <div className="flex gap-2 flex-wrap">
                    {producto.tallas.map((t) => (
                      <button key={t} onClick={() => setTallaSeleccionada(t)}
                        className="w-10 h-10 text-xs font-bold transition-all"
                        style={{ border: tallaSeleccionada === t ? "2px solid #F5F5F5" : "1px solid rgba(255,255,255,0.15)", color: tallaSeleccionada === t ? "#F5F5F5" : "rgba(255,255,255,0.4)", backgroundColor: tallaSeleccionada === t ? "rgba(255,255,255,0.1)" : "transparent", fontFamily: "Helvetica, sans-serif" }}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={handleAgregar}
                  className="py-4 text-[10px] tracking-[0.3em] uppercase font-bold transition-all"
                  style={{ backgroundColor: agregado ? "#D50000" : "#F5F5F5", color: "#0A0A0A", fontFamily: "Helvetica, sans-serif" }}>
                  {agregado ? "Agregado!" : tallaSeleccionada ? "Agregar al carrito" : "Selecciona una talla"}
                </button>
                <button onClick={() => setProductoActivo(null)} className="py-3 text-[10px] tracking-[0.3em] uppercase"
                  style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.4)", fontFamily: "Helvetica, sans-serif" }}>
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