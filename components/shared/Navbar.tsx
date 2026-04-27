"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-[#0a0a14]/80 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#7b5bff] flex items-center justify-center">
            <span className="font-bold text-white text-xl">D</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold text-white">Demo Lab</span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase mt-0.5">by Buhring</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#demos" className="hover:text-white transition-colors">Demos</a>
          <a href="#process" className="hover:text-white transition-colors">Proceso</a>
          <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <a href="#contact" className="px-5 py-2.5 rounded-full bg-white text-[#0a0a14] text-sm font-semibold hover:bg-[#b094ff] transition-all duration-300">
          Hablemos
        </a>
      </nav>
    </header>
  );
}
