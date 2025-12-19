export default function PerfumeCard({ perfume, onClick }) {
  return (
    <div
      onClick={() => onClick?.(perfume)}
      className="group cursor-pointer rounded-3xl
        bg-gradient-to-br from-[#0a1c36] via-[#06142a] to-[#020b1f]
        p-6 shadow-2xl transition
        hover:-translate-y-2
        hover:shadow-[0_0_45px_rgba(214,180,108,0.6)]"
    >
      <div className="relative mb-6 h-52 overflow-hidden rounded-2xl">
        <img
          src={perfume.image}
          className="absolute inset-0 h-full w-full object-contain
            transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={perfume.hoverImage}
          className="absolute inset-0 h-full w-full object-contain
            opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <h3 className="text-center font-serif text-[#f5e6b8]">
        {perfume.name}
      </h3>

      <p className="mt-2 text-center text-sm text-gray-400">
        {perfume.description}
      </p>
    </div>
  );
}
