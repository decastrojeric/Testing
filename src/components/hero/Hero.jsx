export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0702] to-black" />
      <div className="absolute left-1/2 top-[35%] -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-[#d6b46c]/30 blur-[170px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />

      {/* NAVBAR */}
      <header className="relative z-20 h-20 w-full border-b border-white/10">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">
          {/* LOGO */}
          <div className="mr-auto">
            <span className="block font-serif text-[22px] tracking-[0.35em] uppercase text-[#f5e6b8] drop-shadow-[0_0_12px_rgba(214,180,108,0.6)]">
              Jeric’s
            </span>
            <span className="block font-serif text-[12px] tracking-[0.55em] uppercase text-[#d6b46c]">
              Scents
            </span>
          </div>

          {/* NAV */}
          <nav className="flex gap-12 text-sm text-gray-300">
            {[
              { label: "Collections", id: "perfume" },
              { label: "Men's", id: "men" },
              { label: "Women's", id: "women" },
              { label: "Unisex", id: "unisex" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative group tracking-wide transition-colors duration-300 hover:text-[#f5e6b8]"
              >
                <span className="relative z-10">{item.label}</span>

                {/* GOLD UNDERLINE */}
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-[#d6b46c] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

                {/* GLOW */}
                <span className="pointer-events-none absolute inset-0 rounded-md bg-[#d6b46c]/20 blur-lg opacity-0 transition group-hover:opacity-100" />
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <div className="relative z-10 flex h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
         
        {/* TOP LINE + ICON */}
        <div className="mb-2 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-[#d6b46c]" />
          <span className="text-[#d6b46c] text-xs">✦</span>
          <div className="h-px w-20 bg-[#d6b46c]" />
        </div>

        {/* EST TEXT */}
        <p className="mb-8 text-[11px] tracking-[0.45em] text-[#d6b46c]">
          EST. 2025 • LUXURY FRAGRANCES
        </p>

        {/* TITLE */}
        <h1 className="font-serif font-extrabold leading-none">
          <span className="block text-[42px] md:text-[64px] text-[#f5e6b8]">
            Discover Your
          </span>
          <span className="block mt-3 text-[72px] md:text-[100px] lg:text-[112px] text-[#f5e6b8] drop-shadow-[0_0_60px_rgba(214,180,108,0.6)]">
            Signature Scent
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-10 max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed">
          Immerse yourself in our curated collection of luxury fragrances,
          crafted for those who appreciate timeless elegance.
        </p>

        {/* DO NOT CHANGE */}
        <a
          href="#perfume"
          className="mt-14 rounded-full bg-orange-500 px-12 py-4 text-white shadow-xl transition hover:bg-orange-400"
        >
          Explore Collections
        </a>

        {/* DO NOT CHANGE */}
        <button
          onClick={() => scrollTo("perfume")}
          className="mt-12 flex flex-col items-center gap-2 text-[#d6b46c] opacity-80 hover:opacity-100 transition"
        >
          <span className="text-[10px] tracking-[0.45em]">
            SCROLL TO EXPLORE
          </span>
          <span className="text-2xl animate-bounce">↓</span>
        </button>
      </div>
    </section>
  );
}
