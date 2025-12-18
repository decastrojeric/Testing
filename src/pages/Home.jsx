export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#061a33] via-[#04162c] to-[#020f1f]">
      <div className="relative w-full max-w-5xl mx-auto px-6">
        {/* Center card */}
        <div className="bg-[#071b34]/90 backdrop-blur-md rounded-xl py-24 px-6 text-center shadow-2xl">
          
          {/* Brand Name */}
          <h1
            className="text-5xl md:text-7xl font-[cursive] text-[#f5f1d8]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Father <span className="italic font-light">and</span> Son
          </h1>

          {/* Subtitle */}
          <p className="mt-10 text-lg text-[#d6cfae] tracking-wide">
            Timeless Elegance in Every Drop
          </p>

          {/* Button */}
          <div className="mt-14">
            <button className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-white font-medium shadow-lg shadow-orange-500/40 hover:bg-orange-400 transition">
              ✨ Discover Your Scent
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
