export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a14] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#7b5bff] flex items-center justify-center">
              <span className="font-bold text-white text-sm">D</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white">Demo Lab</span>
              <span className="text-[10px] text-white/40 tracking-widest uppercase mt-0.5">by Buhring</span>
            </div>
          </div>
          <p className="text-white/40 text-sm text-center">Una herramienta de ventas para transformar ideas en experiencias digitales.</p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#demos" className="hover:text-white transition-colors">Demos</a>
            <a href="#process" className="hover:text-white transition-colors">Proceso</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">© 2026 Buhring. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
