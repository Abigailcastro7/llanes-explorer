// ============================================
// CATALOGO DE DEMOS DEL DEMO LAB
// ============================================

export type DemoStatus = "live" | "soon" | "beta";

export type DemoCategory =
  | "Travel"
  | "Marketplace"
  | "Health"
  | "Booking"
  | "Fintech"
  | "AI";

export interface Demo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: DemoCategory;
  status: DemoStatus;
  accent: string;
  metrics: { label: string; value: string }[];
  href: string;
  featured?: boolean;
}

// ============================================
// LISTA DE DEMOS
// ============================================
export const demos: Demo[] = [
  {
    slug: "llanes",
    name: "Llanes Explorer",
    tagline: "Turismo y experiencias premium",
    description: "Plataforma para creadores de contenido que ofrecen rutas exclusivas, destinos curados y experiencias seleccionadas. Mapas interactivos, itinerarios premium y comunidad.",
    category: "Travel",
    status: "live",
    accent: "#7B5BFF",
    metrics: [
      { label: "Destinos", value: "+120" },
      { label: "Rutas", value: "48" },
      { label: "Rating", value: "4.9" },
    ],
    href: "/llanes",
    featured: true,
  },
  {
    slug: "freelancers",
    name: "Crafted",
    tagline: "Marketplace de talento creativo",
    description: "Conecta marcas con freelancers verificados. Perfiles cinematograficos, propuestas en 24h y pagos protegidos.",
    category: "Marketplace",
    status: "soon",
    accent: "#FF6B9D",
    metrics: [
      { label: "Profesionales", value: "12K" },
      { label: "Categorias", value: "48" },
      { label: "Match", value: "94%" },
    ],
    href: "/freelancers",
  },
  {
    slug: "fitness",
    name: "Pulse",
    tagline: "Entrenamiento adaptativo",
    description: "Rutinas que evolucionan con tu cuerpo. Coach IA, seguimiento de habitos y comunidad de retos semanales.",
    category: "Health",
    status: "soon",
    accent: "#00D9A0",
    metrics: [
      { label: "Usuarios", value: "85K" },
      { label: "Rutinas", value: "320" },
      { label: "Retencion", value: "78%" },
    ],
    href: "/fitness",
  },
  {
    slug: "reservas",
    name: "Counter",
    tagline: "Reservas para hosteleria",
    description: "Sistema de reservas, mesas y comandas en tiempo real. Disenado para restaurantes que quieren parecer Michelin sin el coste.",
    category: "Booking",
    status: "soon",
    accent: "#FFB547",
    metrics: [
      { label: "Locales", value: "450" },
      { label: "Reservas/dia", value: "8.2K" },
      { label: "Show-up", value: "92%" },
    ],
    href: "/reservas",
  },
  {
    slug: "fintech",
    name: "Ledger",
    tagline: "Finanzas para creadores",
    description: "Dashboard financiero, facturacion automatica y pagos internacionales. Pensado para freelancers y agencias pequenas.",
    category: "Fintech",
    status: "soon",
    accent: "#5DD3FF",
    metrics: [
      { label: "Transacciones", value: "2M" },
      { label: "Paises", value: "32" },
      { label: "Comision", value: "0.4%" },
    ],
    href: "/fintech",
  },
  {
    slug: "ai-assistant",
    name: "Quill",
    tagline: "Asistente IA para equipos",
    description: "Chat IA conectado a tus documentos, calendarios y herramientas. Respuestas con contexto real de tu empresa.",
    category: "AI",
    status: "soon",
    accent: "#B094FF",
    metrics: [
      { label: "Equipos", value: "1.2K" },
      { label: "Integraciones", value: "60+" },
      { label: "Ahorro", value: "11h/sem" },
    ],
    href: "/ai-assistant",
  },
];

// ============================================
// CATEGORIAS PARA FILTROS
// ============================================
export const categories: { value: DemoCategory | "All"; label: string }[] = [
  { value: "All", label: "Todas" },
  { value: "Travel", label: "Viajes" },
  { value: "Marketplace", label: "Marketplace" },
  { value: "Health", label: "Salud" },
  { value: "Booking", label: "Reservas" },
  { value: "Fintech", label: "Fintech" },
  { value: "AI", label: "IA" },
];