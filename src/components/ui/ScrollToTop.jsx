import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        fixed bottom-6 right-6 z-50
        group flex h-14 w-14 items-center justify-center
        rounded-full
        bg-gradient-to-br from-[#f59e0b] to-[#d97706]
        text-white text-xl
        shadow-2xl shadow-yellow-500/40
        transition-all duration-300
        hover:scale-110 hover:shadow-yellow-500/60
      "
      aria-label="Scroll to top"
    >
      ↑

      {/* GOLD GLOW */}
      <span className="
        pointer-events-none absolute inset-0 rounded-full
        bg-yellow-400/20 blur-xl opacity-0
        transition group-hover:opacity-100
      " />
    </button>
  );
}
