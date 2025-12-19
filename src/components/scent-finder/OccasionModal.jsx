import PerfumeCard from "../collections/PerfumeCard";

export default function OccasionModal({
  occasion,
  perfumes,
  onBack,
  onSelectPerfume,
}) {
  if (!occasion) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onBack}
      />

      <div className="relative z-10 w-full max-w-7xl rounded-3xl
        bg-gradient-to-b from-[#0a1c36] to-[#04142c]
        p-10 shadow-2xl border border-white/10">

        <div className="mb-10">
          <button
            onClick={onBack}
            className="text-sm text-yellow-400 hover:underline"
          >
            ← Back to occasions
          </button>

          <h2 className="mt-4 font-serif text-3xl text-[#f5e6b8]">
            {occasion}
          </h2>
          <p className="text-sm text-gray-400">
            {perfumes.length} fragrances perfect for this occasion
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {perfumes.map((perfume) => (
            <PerfumeCard
              key={perfume.id}
              perfume={perfume}
              onClick={onSelectPerfume}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
