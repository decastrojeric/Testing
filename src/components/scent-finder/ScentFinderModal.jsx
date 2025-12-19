export default function ScentFinderModal({
  open,
  onClose,
  onSelectOccasion,
}) {
  if (!open) return null;

  const events = [
    { label: "Date Night", icon: "❤️", gradient: "from-pink-500 to-rose-600" },
    { label: "Party & Events", icon: "🎵", gradient: "from-purple-500 to-indigo-600" },
    { label: "Rainy & Cold", icon: "☁️", gradient: "from-sky-500 to-blue-600" },
    { label: "Special Occasion", icon: "🎁", gradient: "from-orange-500 to-red-600" },
    { label: "Summer", icon: "☀️", gradient: "from-amber-400 to-orange-500" },
    { label: "Versatile", icon: "✨", gradient: "from-emerald-500 to-teal-600" },
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-5xl rounded-3xl
        bg-gradient-to-b from-[#0b1c33] to-[#06142a]
        p-12 border border-white/10 shadow-2xl">

        {/* EXIT BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute right-8 top-8 text-yellow-400 text-xl
            transition hover:text-yellow-300
            hover:drop-shadow-[0_0_12px_rgba(214,180,108,0.9)]
          "
        >
          ✕
        </button>

        {/* TITLE */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.45em] uppercase text-[#d6b46c]">
            Find Your Perfect Scent
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#f5e6b8]">
            Choose an Occasion
          </h2>
        </div>

        {/* OPTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((item) => (
            <button
              key={item.label}
              onClick={() => onSelectOccasion(item.label)}
              className={`h-28 rounded-xl bg-gradient-to-r ${item.gradient}
                flex flex-col items-center justify-center gap-2
                text-white font-medium shadow-lg
                transition hover:scale-105`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm tracking-wide">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
