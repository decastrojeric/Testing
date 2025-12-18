export default function Hero() {
  return (
    <section className="relative isolate h-[85vh] md:h-screen w-full overflow-hidden bg-[#020b1f]">

      {/* GOLD AMBIENT LIGHT */}
      <div
        className="absolute -top-1/2 left-1/2 z-0 h-[120vh] w-[120vh] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,185,120,0.9), rgba(255,185,120,0.15), transparent 70%)",
        }}
      />

      {/* HERO GRADIENT */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black via-[#04142c] to-[#020b1f]" />

      {/* GRID */}
      <div
        className="hidden sm:block absolute inset-0 z-[2]
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:60px_60px] opacity-30"
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 py-12 text-center">

        <div className="mb-10 rounded-full bg-gradient-to-br from-black via-[#04142c] to-[#020b1f] p-6 shadow-2xl">
          <img
            src="/branding.png"
            alt="Father and Son"
            className="w-28 md:w-32"
            draggable={false}
          />
        </div>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 px-6 py-2 text-sm text-yellow-400">
          ✨ Premium Fragrance Experience
        </div>

        <h1 className="font-serif text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          <span className="block text-[#f5f3eb]">Discover Your</span>
          <span className="block text-yellow-500">Signature Scent</span>
        </h1>

        <p className="mt-10 max-w-2xl text-base text-gray-300 md:text-lg">
          Immerse yourself in our curated collection of luxury fragrances.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="rounded-full bg-orange-500 px-10 py-4 font-medium text-white shadow-lg shadow-orange-500/40 hover:bg-orange-400 transition">
            Explore Collections
          </button>

          <button className="rounded-full border border-yellow-500/40 px-10 py-4 text-yellow-400 hover:bg-yellow-500/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
