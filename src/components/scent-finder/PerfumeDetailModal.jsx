export default function PerfumeDetailModal({ perfume, occasion, onBack }) {
  if (!perfume) return null;

  return (
    <div className="fixed inset-0 z-[220] flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onBack}
      />

      {/* MODAL CARD (NOT FULLSCREEN) */}
      <div
        className="
          relative z-10
          w-full max-w-5xl
          max-h-[85vh]
          overflow-y-auto
          rounded-3xl
          bg-gradient-to-br from-[#061a33] via-[#04162c] to-[#020b1a]
          border border-white/10
          shadow-[0_40px_120px_rgba(0,0,0,0.8)]
          p-12
        "
      >
        {/* BACK BUTTON */}
        <button
          onClick={onBack}
          className="
            mb-8 inline-flex items-center gap-2
            text-yellow-400 text-sm
            transition
            hover:text-yellow-300
            hover:drop-shadow-[0_0_10px_rgba(214,180,108,0.9)]
          "
        >
          ← Back to fragrances
        </button>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <div className="h-[420px] rounded-2xl bg-black/40 flex items-center justify-center">
            <img
              src={perfume.hoverImage}
              alt={perfume.name}
              className="h-full object-contain"
            />
          </div>

          {/* DETAILS */}
          <div>
            <h2 className="font-serif text-4xl text-[#f5e6b8]">
              {perfume.name}
            </h2>

            <span
              className="
                inline-block mt-4 px-4 py-1 text-xs rounded-full
                bg-yellow-500/10 text-yellow-300
                border border-yellow-400/20
              "
            >
              Best for {occasion}
            </span>

            <p className="mt-6 text-gray-300 leading-relaxed">
              {perfume.description}
            </p>

            {/* OPTIONAL NOTES SECTION (DESIGN MATCH SA IMAGE) */}
            <div className="mt-10">
              <h4 className="font-serif text-lg text-[#f5e6b8] mb-4">
                Scent Notes
              </h4>

              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <span className="text-yellow-400">✦</span>{" "}
                  <strong className="text-gray-200">Top Notes:</strong>{" "}
                  Bergamot, Pepper
                </li>
                <li>
                  <span className="text-yellow-400">✦</span>{" "}
                  <strong className="text-gray-200">Middle Notes:</strong>{" "}
                  Lavender, Sichuan Pepper, Elemi
                </li>
                <li>
                  <span className="text-yellow-400">✦</span>{" "}
                  <strong className="text-gray-200">Base Notes:</strong>{" "}
                  Ambroxan, Cedar, Labdanum
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
