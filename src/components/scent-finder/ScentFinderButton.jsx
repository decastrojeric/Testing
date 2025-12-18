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
      className="fixed left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-orange-500 px-5 py-4 text-white shadow-lg hover:bg-orange-600 transition"
    >
      Scent Finder
    </button>
  );
}
