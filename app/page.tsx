import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/home/Hero";
import { DemoCatalog } from "@/components/home/DemoCatalog";
import { Process } from "@/components/home/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a14]">
      <Navbar />
      <Hero />
      <DemoCatalog />
      <Process />
      <section id="contact" className="py-24 px-6 bg-[#0a0a14]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tienes una <span style={{ background: "linear-gradient(90deg, #9477ff, #5dd3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>idea?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Cuentame tu concepto y en dias tienes una demo lista para presentar.</p>
          <a href="mailto:hola@buhring.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7b5bff] text-white font-semibold hover:bg-[#6645e6] transition-all duration-300 hover:scale-105">
            Empecemos
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
