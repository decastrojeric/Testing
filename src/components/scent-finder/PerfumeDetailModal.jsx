export default function PerfumeDetailModal({ perfume, occasion, onBack }) {
  if (!perfume) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onBack}
      />

      <div className="relative z-10 w-full max-w-5xl rounded-3xl
        bg-gradient-to-b from-[#0a1c36] to-[#04142c]
        p-12 shadow-2xl border border-white/10">

        <button
          onClick={onBack}
          className="text-sm text-yellow-400 hover:underline"
        >
          ← Back to fragrances
        </button>

        <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden bg-black/40">
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-[380px] object-contain"
            />
          </div>

          {/* INFO */}
          <div>
            <h2 className="font-serif text-3xl text-[#f5e6b8]">
              {perfume.name}
            </h2>

            <p className="mt-4 text-gray-400">
              {perfume.description}
            </p>

            <div className="mt-6">
              <span className="inline-block rounded-full
                bg-yellow-500/10 px-4 py-1 text-xs text-yellow-300">
                Best for {occasion}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
