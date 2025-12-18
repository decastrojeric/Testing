export default function PerfumeCard({ perfume, onClick }) {
  return (
    <div
      className="cursor-pointer rounded-xl bg-white/5 p-6 backdrop-blur hover:scale-105 transition"
      onClick={() => onClick && onClick(perfume)}
    >
      <h3 className="text-lg text-[#f5f3eb]">{perfume.name}</h3>
      <p className="mt-2 text-sm text-[#b8b3a1]">
        {perfume.description}
      </p>
    </div>
  );
}
