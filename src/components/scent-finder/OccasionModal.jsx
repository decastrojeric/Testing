import PerfumeCard from "../collections/PerfumeCard";

export default function OccasionModal({
  occasion,
  perfumes,
  onBack,
  onSelectPerfume,
}) {
  if (!occasion) return null;

  return (
    <div className="fixed inset-0 z-[210] flex items-center justify-center">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* MODAL */}
      <div
        className="
          relative z-10
          w-full max-w-6xl
          rounded-3xl
          bg-gradient-to-b from-[#0b1f3d] to-[#06142b]
          p-12
          border border-white/10
        "
      >
        {/* HEADER */}
        <p className="text-xs tracking-[0.3em] text-yellow-400 uppercase">
          Find Your Perfect Scent
        </p>
        <h2 className="mt-2 font-serif text-3xl text-[#f5e6b8]">
          {occasion}
        </h2>

        {/* BACK */}
        <button
          onClick={onBack}
          className="mt-6 text-yellow-400 text-sm hover:text-yellow-300"
        >
          ← Back to occasions
        </button>

        {/* PERFUME GRID — SAME WIDTH AS CHOOSE AN OCCASION */}
        <div className="mt-12 flex justify-center">
          <div
            className="
              w-full
              max-w-4xl          /* 👈 MATCH THIS WITH OCCASION GRID */
              flex flex-wrap
              justify-center
              gap-8

              [&>div]:w-[200px] /* scent finder only card size */
            "
          >
            {perfumes.slice(0, 4).map((p) => (
              <PerfumeCard
                key={p.id}
                perfume={p}
                onClick={() => onSelectPerfume(p)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
