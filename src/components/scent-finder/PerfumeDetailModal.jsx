import React, { useEffect, useRef } from "react";

export default function PerfumeDetailModal({ perfume, occasion, onBack }) {
  const closeRef = useRef(null);
  const modalRef = useRef(null);
  const prevActiveRef = useRef(null);
  const titleId = `perfume-title-${perfume?.id ?? perfume?.name?.replace(/\s+/g, "-").toLowerCase()}`;

  if (!perfume) return null;

  useEffect(() => {
    // preserve previous focus and move focus into the dialog
    prevActiveRef.current = document.activeElement;
    closeRef.current?.focus?.();

    // lock body + document scroll while modal is open (helps iOS)
    const originalBodyOverflow = document.body.style.overflow;
    const originalDocOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onBack();
    };

    // Basic focus trap for Tab / Shift+Tab
    const trapTab = (e) => {
      if (e.key !== "Tab") return;
      const el = modalRef.current;
      if (!el) return;
      const focusable = el.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("keydown", trapTab);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("keydown", trapTab);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalDocOverflow;
      try {
        prevActiveRef.current?.focus?.();
      } catch (err) {
        // ignore
      }
    };
  }, [onBack]);

  return (
    <div className="fixed inset-0 z-[220] flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onBack}
      />

      {/* MODAL */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{ paddingTop: 'calc(1rem + env(safe-area-inset-top))', paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))', touchAction: 'pan-y' }}
        className="relative z-10 w-full max-w-5xl rounded-3xl
          bg-black
          p-6 md:p-12 mx-4 md:mx-0 my-6 md:my-0 border border-white/10 shadow-2xl
          max-h-[90vh] overflow-auto"
      >
        {/* focus sentinel (start) */}
        <div tabIndex={0} onFocus={() => closeRef.current?.focus?.()} />

        {/* CLOSE */}
        <button
          ref={closeRef}
          onClick={onBack}
          aria-label="Close perfume details"
          className="absolute right-4 top-4 min-w-[44px] min-h-[44px] p-2 md:p-3 rounded-full text-yellow-400 text-xl
            transition hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="mb-6 flex flex-col md:flex-row items-start gap-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 overflow-hidden rounded-xl bg-white/5 p-3 md:p-4 mx-auto md:mx-0">
            <img src={perfume.image} alt={perfume.name} className="w-full h-full object-contain" />
          </div>

          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] text-yellow-400 uppercase">{occasion ?? ""}</p>
            <h2 id={titleId} className="mt-2 font-serif text-2xl md:text-3xl text-[#f5e6b8]">{perfume.name}</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-full md:max-w-2xl">{perfume.description}</p>
            <button
              onClick={onBack}
              aria-label="Back to results"
              className="mt-4 inline-flex items-center gap-2 text-yellow-400 text-sm hover:text-yellow-300 p-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              ← Back to results
            </button>
          </div>
        </div>

        {/* focus sentinel (end) */}
        <div tabIndex={0} onFocus={() => closeRef.current?.focus?.()} />

        {/* SCENT NOTES */}
        {perfume.notes && (
          <div className="mt-4">
            <h4 className="font-serif text-lg md:text-xl text-[#f5e6b8] mb-4">Scent Notes</h4>

            <ul className="space-y-4 text-sm md:text-base text-gray-400">
              <li>
                <span className="text-yellow-400">✦</span>{" "}
                <strong className="text-gray-200">Top Notes:</strong>{" "}
                {perfume.notes.top}
              </li>
              <li>
                <span className="text-yellow-400">✦</span>{" "}
                <strong className="text-gray-200">Middle Notes:</strong>{" "}
                {perfume.notes.middle}
              </li>
              <li>
                <span className="text-yellow-400">✦</span>{" "}
                <strong className="text-gray-200">Base Notes:</strong>{" "}
                {perfume.notes.base}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
