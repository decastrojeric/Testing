export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#020b1f]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#04142c] to-[#020b1f]" />

      {/* TOP BAR */}
      <header className="relative z-20 h-16 w-full border-b border-white/10
        bg-gradient-to-r from-[#020b1f] via-[#04142c] to-[#020b1f]">
        
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">

          {/* BRAND TEXT — LEFT */}
          <div
            className="mr-auto text-[#f5e6b8] text-xl tracking-wide select-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Jeric&apos;s Scents
          </div>

          {/* NAVIGATION — CENTER/RIGHT */}
          <nav className="flex gap-12 text-sm font-medium text-gray-300">
            <button onClick={() => scrollTo("perfume")} className="hover:text-white transition">
              Collections
            </button>
            <button onClick={() => scrollTo("men")} className="hover:text-white transition">
              Men&apos;s
            </button>
            <button onClick={() => scrollTo("women")} className="hover:text-white transition">
              Women&apos;s
            </button>
            <button onClick={() => scrollTo("unisex")} className="hover:text-white transition">
              Unisex
            </button>
          </nav>

        </div>
      </header>

      {/* HERO BODY */}
      <div
        className="
          relative z-10
          mx-auto max-w-5xl
          h-[calc(100vh-4rem)]
          flex flex-col items-center justify-center
          px-6 text-center
          translate-y-[6vh] md:translate-y-[7vh]
        "
      >
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold">
          <span className="block text-[#f5f3eb]">Discover Your</span>
          <span className="block text-yellow-500">Signature Scent</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-300">
          Immerse yourself in our curated collection of luxury fragrances.
        </p>

        <a
          href="#perfume"
          className="mt-8 rounded-full bg-orange-500 px-10 py-4 text-white shadow-lg transition hover:bg-orange-400"
        >
          Explore Collections
        </a>

        {/* SCROLL TO EXPLORE */}
        <button
          onClick={() => scrollTo("perfume")}
          className="mt-10 flex flex-col items-center gap-2 text-yellow-400 opacity-80 hover:opacity-100 transition"
        >
          <span className="text-xs tracking-[0.35em]">
            SCROLL TO EXPLORE
          </span>
          <span className="text-2xl animate-bounce">↓</span>
        </button>

      </div>
    </section>
  );
}
