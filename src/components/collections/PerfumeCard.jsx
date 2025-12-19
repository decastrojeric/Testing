export default function PerfumeCard({ perfume }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1c36] via-[#06142a] to-[#020b1f] p-6 shadow-2xl transition hover:-translate-y-2">
      <div className="relative mb-6 h-52 w-full overflow-hidden rounded-2xl">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="absolute inset-0 h-full w-full object-contain transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={perfume.hoverImage}
          alt={perfume.name}
          className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <h3 className="text-center text-lg font-serif text-[#f5f3eb]">
        {perfume.name}
      </h3>
      <p className="mt-2 text-center text-sm text-[#b8b3a1]">
        {perfume.description}
      </p>
    </div>
  );
}
