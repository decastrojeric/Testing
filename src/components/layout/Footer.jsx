export default function Footer() {
  return (
    <footer className="relative bg-black text-[#b8b3a1]">

      {/* GOLD HORIZONTAL LINE (TOP) */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d6b46c] to-transparent" />

      {/* TOP SECTION */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="mb-4 font-serif text-lg text-[#f5e6b8]">
              Jeric's Scents
            </h3>

            <p className="max-w-xs text-sm leading-relaxed text-[#9fa6b2]">
              Exceptional fragrances that celebrate life’s most precious
              moments. Experience luxury in every bottle.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-4">
              {["f", "ig", "x"].map((icon, i) => (
                <span
                  key={i}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/10
                    text-xs font-semibold tracking-wide
                    text-[#d6b46c]
                    hover:bg-[#d6b46c] hover:text-black
                    transition
                  "
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* COLLECTIONS */}
          <div>
            <h4 className="mb-4 font-serif text-[#f5e6b8]">
              Collections
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "Perfume Collections",
                "Men's Collection",
                "Women's Collection",
                "Unisex Collection",
                
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#f5e6b8] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="mb-4 font-serif text-[#f5e6b8]">
              Support
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                "FAQs",
                
                
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#f5e6b8] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 font-serif text-[#f5e6b8]">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-[#d6b46c]">✉</span>
                info@jericsscents.com
              </li>

              <li className="flex items-center gap-3">
                <span className="text-[#d6b46c]">☎</span>
                +1 (555) 123-4567
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 text-[#d6b46c]">📍</span>
                <span>
                  123 Lemery,Batangas 
                  
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="h-px w-full bg-white/10" />

      {/* BOTTOM BAR */}
      <div
        className="
          mx-auto max-w-7xl
          flex flex-col gap-4
          px-6 py-6
          text-xs
          md:flex-row md:items-center md:justify-between
        "
      >
        <span>
          Made with <span className="text-[#d6b46c]">♥</span> by Jeric's Scents
        </span>

        <span>
          © {new Date().getFullYear()} Jeric's Scents. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
