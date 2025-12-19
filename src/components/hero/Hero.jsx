export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#020b1f]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#04142c] to-[#020b1f]" />

      {/* NAVBAR */}
      <header className="relative z-20 h-20 w-full bg-[#04142c] border-b border-white/10">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">

          {/* TEXT LOGO */}
          <div className="mr-auto flex h-full items-center">
            <div className="leading-none">
              <span
                className="
                  block
                  font-serif
                  text-[22px]
                  tracking-[0.35em]
                  uppercase
                  font-semibold
                  text-[#f5f3eb]
                "
              >
                Jeric’s
              </span>
              <span
                className="
                  block
                  font-serif
                  text-[12px]
                  tracking-[0.55em]
                  uppercase
                  text-yellow-500
                "
              >
                Scents
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
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
          h-[calc(100vh-5rem)]
          flex flex-col items-center justify-center
          px-6 text-center
          translate-y-[6vh]
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

        {/* SCROLL */}
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
