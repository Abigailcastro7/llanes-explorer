import Link from "next/link";

interface Plato {
  name: string;
  desc: string;
  precio: string;
  nuevo?: boolean;
}

const menu: { entrantes: Plato[]; principales: Plato[]; postres: Plato[] } = {
  entrantes: [
    { name: "Tartar de atun rojo", desc: "Aguacate, soja, sesamo tostado y chips de wonton", precio: "18", nuevo: true },
    { name: "Croquetas de jamon iberico", desc: "Bechamel artesanal, jamon de bellota 100%", precio: "12" },
    { name: "Burrata con tomate", desc: "Tomate rosa de Barbastro, albahaca fresca, AOVE", precio: "14" },
    { name: "Steak tartar clasico", desc: "Solomillo picado a cuchillo, mostaza Dijon, alcaparras", precio: "22" },
  ],
  principales: [
    { name: "Risotto de trufa negra", desc: "Arroz carnaroli, parmesano 24 meses, trufa de Soria", precio: "24", nuevo: true },
    { name: "Cochinillo confitado", desc: "72h de coccion lenta, pure de manzana, jus de asado", precio: "28" },
    { name: "Lubina a la sal", desc: "Lubina salvaje, ensalada de hinojo, vinagreta citrica", precio: "26" },
    { name: "Pasta fresca con bogavante", desc: "Tagliatelle caseros, bogavante gallego, bisque", precio: "32" },
  ],
  postres: [
    { name: "Coulant de chocolate", desc: "Valrhona 70%, helado de vainilla bourbon, caramelo salado", precio: "9" },
    { name: "Tarta de queso al horno", desc: "Queso manchego curado, mermelada de frutos rojos", precio: "8" },
    { name: "Tiramisu de la casa", desc: "Mascarpone, cafe espresso, amaretto", precio: "8" },
  ],
};

export default function Menu() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/counter" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFB547] flex items-center justify-center">
              <span className="text-black font-bold text-sm">C</span>
            </div>
            <span className="text-white font-bold tracking-widest uppercase">Counter</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <Link href="/counter/menu" className="text-[#FFB547] font-medium">Carta</Link>
            <Link href="/counter" className="hover:text-white transition-colors">Inicio</Link>
          </div>
          <Link href="/counter/reservas" className="px-5 py-2.5 rounded-full bg-[#FFB547] text-black text-sm font-bold hover:bg-[#ffc76a] transition-colors">
            Reservar mesa
          </Link>
        </nav>
      </header>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FFB547] text-xs font-mono tracking-widest uppercase mb-4">Temporada primavera 2026</p>
            <h1 className="text-5xl font-bold text-white mb-4">Nuestra <span style={{ color: "#FFB547" }}>carta</span></h1>
            <p className="text-white/50">Producto de temporada, tecnica contemporanea.</p>
          </div>

          {[
            { titulo: "Entrantes", emoji: "🥗", platos: menu.entrantes },
            { titulo: "Principales", emoji: "🍽️", platos: menu.principales },
            { titulo: "Postres", emoji: "🍫", platos: menu.postres },
          ].map((sec) => (
            <div key={sec.titulo} className="mb-16">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <span className="text-2xl">{sec.emoji}</span>
                <h2 className="text-2xl font-bold text-white">{sec.titulo}</h2>
              </div>
              <div className="flex flex-col gap-4">
                {sec.platos.map((p) => (
                  <div key={p.name} className="flex items-start justify-between gap-4 p-5 rounded-xl bg-[#111008] border border-white/5 hover:border-[#FFB547]/20 transition-all">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold">{p.name}</h3>
                        {p.nuevo && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFB547]/20 text-[#FFB547] font-mono uppercase tracking-widest">Nuevo</span>
                        )}
                      </div>
                      <p className="text-sm text-white/40">{p.desc}</p>
                    </div>
                    <div className="text-xl font-bold text-[#FFB547] shrink-0">{p.precio}€</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center p-8 rounded-2xl border border-[#FFB547]/20 bg-[#111008]">
            <p className="text-white/50 text-sm mb-6">Menu degustacion disponible para grupos de 4 o mas personas</p>
            <Link href="/counter/reservas" className="inline-flex px-8 py-4 rounded-full bg-[#FFB547] text-black font-bold hover:bg-[#ffc76a] transition-all hover:scale-105">
              Reservar mesa
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
