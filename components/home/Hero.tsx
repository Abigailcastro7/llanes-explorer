export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a14]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7b5bff]/20 blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7b5bff]/50 text-[#b094ff] text-xs font-mono tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7b5bff] animate-pulse" />
          Demo Lab · by Buhring · v.2026
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Ideas que{" "}
          <span style={{ background: "linear-gradient(90deg, #9477ff 0%, #b094ff 40%, #5dd3ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            parecen reales
          </span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Demos visuales de alta fidelidad para validar ideas de negocio y cerrar ventas antes de desarrollar el producto real.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#demos" className="px-8 py-4 rounded-full bg-[#7b5bff] text-white font-semibold hover:bg-[#6645e6] transition-all duration-300 hover:scale-105">Ver demos</a>
          <a href="#contact" className="px-8 py-4 rounded-full border border-white/10 text-white/80 font-semibold hover:border-[#7b5bff]/50 hover:text-white transition-all duration-300">Tengo una idea</a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[{ value: "6+", label: "Demos activas" }, { value: "100%", label: "Visual y funcional" }, { value: "0", label: "Backend real" }].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-2xl font-bold text-white">{m.value}</div>
              <div className="text-xs text-white/40 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
