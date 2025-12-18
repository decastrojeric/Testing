export default function PerfumeCard({ perfume, onClick }) {
  return (
    <div
      onClick={() => onClick && onClick(perfume)}
      className="group relative cursor-pointer overflow-hidden rounded-3xl 
      bg-gradient-to-br from-[#0a1c36] via-[#06142a] to-[#020b1f]
      p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-yellow-500/20"
    >
      {/* GOLD GLOW */}
      <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-yellow-500/20 blur-3xl opacity-0 transition group-hover:opacity-100" />

      {/* PERFUME BOTTLE PLACEHOLDER */}
      <div className="relative mx-auto mb-8 h-40 w-28 rounded-xl bg-gradient-to-b from-[#c98a1a] to-[#a46b10] shadow-lg">
        <div className="absolute top-2 left-1/2 h-2 w-12 -translate-x-1/2 rounded bg-orange-400" />
        <div className="absolute top-6 left-2 h-6 w-1 rounded bg-white/50" />
      </div>

      {/* NAME */}
      <h3 className="text-center text-lg font-serif text-[#f5f3eb]">
        {perfume.name}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-center text-sm text-[#b8b3a1] leading-relaxed">
        {perfume.description}
      </p>
    </div>
  );
}
