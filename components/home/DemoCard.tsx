import Link from "next/link";
import { Demo } from "@/lib/mock-data/demos";

export function DemoCard({ demo }: { demo: Demo }) {
  const statusConfig = { live: { label: "Live", color: "#00D9A0" }, soon: { label: "Proximamente", color: "#FFB547" }, beta: { label: "Beta", color: "#5DD3FF" } };
  const status = statusConfig[demo.status];
  return (
    <Link href={demo.href} className="group flex flex-col rounded-2xl border border-white/8 bg-[#11111c] overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
      <div className="relative h-48 flex items-center justify-center" style={{ backgroundColor: demo.accent + "15" }}>
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: demo.accent }}>
          {demo.name[0]}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-white/40 uppercase tracking-widest font-mono">{demo.category}</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: status.color }} />
            <span className="text-xs" style={{ color: status.color }}>{status.label}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{demo.name}</h3>
        <p className="text-sm text-white/50 mb-4">{demo.tagline}</p>
        <div className="grid grid-cols-3 gap-3 mt-auto pt-4 border-t border-white/5">
          {demo.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-base font-bold text-white">{m.value}</div>
              <div className="text-[10px] text-white/30 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
