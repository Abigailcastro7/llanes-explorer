"use client";
import { useState } from "react";
import { demos, categories } from "@/lib/mock-data/demos";
import { DemoCard } from "./DemoCard";

export function DemoCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? demos : demos.filter((d) => d.category === activeCategory);
  return (
    <section id="demos" className="py-24 px-6 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Demos <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>disponibles</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">Cada demo es un producto visual completo, listo para presentar a clientes.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat.value} onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.value ? "bg-[#7b5bff] text-white" : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"}`}>
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((demo) => <DemoCard key={demo.slug} demo={demo} />)}
        </div>
      </div>
    </section>
  );
}
