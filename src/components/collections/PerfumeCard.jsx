import { useState } from "react";

export default function PerfumeCard({
  perfume,
  onClick,
  compact = false,
  largeImage = false,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick?.(perfume)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group cursor-pointer rounded-3xl
        bg-gradient-to-br from-[#0a1c36] via-[#06142a] to-[#020b1f]
        ${compact ? "p-3" : "p-5"}
        shadow-2xl transition
        hover:-translate-y-2
        hover:shadow-[0_0_45px_rgba(214,180,108,0.6)]
        flex flex-col`}
    >
      {/* IMAGE */}
      <div
        className={`relative overflow-hidden rounded-2xl mb-4
          ${compact ? "h-28 sm:h-36" : largeImage
            ? "h-40 sm:h-56 md:h-64 lg:h-72"
            : "h-36 sm:h-44 md:h-52"}`}
      >
        <img
          src={hovered ? perfume.hoverImage : perfume.image}
          alt={perfume.name}
          loading="lazy"
          draggable={false}
          className={`h-full w-full transition-transform duration-500
            ${largeImage ? "object-cover" : "object-contain"}
            group-hover:scale-105`}
        />
      </div>

      <h3 className={`text-center font-serif text-[#f5e6b8] ${compact ? "text-sm" : "text-base"}`}>
        {perfume.name}
      </h3>

      {!compact && (
        <p className="mt-2 text-center text-sm text-gray-400 hidden sm:block">
          {perfume.description}
        </p>
      )}
    </div>
  );
}
