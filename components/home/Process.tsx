const steps = [
  { number: "01", title: "Tienes una idea", description: "Me cuentas tu concepto de negocio y a quien va dirigido." },
  { number: "02", title: "Construimos la demo", description: "En dias, no meses. Una demo visual completa." },
  { number: "03", title: "La presentas a clientes", description: "Validas la idea y cierras ventas antes de gastar en desarrollo." },
  { number: "04", title: "Desarrollamos el producto", description: "Con validacion confirmada, construimos la version completa." },
];
export function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-[#11111c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            De idea a <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>venta real</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">El metodo Buhring para validar ideas sin perder tiempo ni dinero.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="p-6 rounded-2xl bg-[#1a1a24] border border-white/5 hover:border-[#7b5bff]/30 transition-all duration-300">
              <div className="text-4xl font-bold mb-4" style={{ background: "linear-gradient(90deg, #7b5bff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{step.number}</div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
