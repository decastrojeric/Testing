import { useEffect, useState } from "react";

export default function ScentFinderButton({ onClick }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="
        fixed left-4 top-1/2 z-50 -translate-y-1/2
        flex items-center gap-3
        rounded-full px-6 py-4
        bg-gradient-to-r from-[#f59e0b] to-[#d97706]
        text-white font-medium
        shadow-2xl shadow-yellow-500/40
        transition-all duration-300
        hover:scale-105
      "
    >
      ✨ Scent Finder
    </button>
  );
}
