"use client";

import { useState, useEffect } from "react";

const steps = [
  { num: "01", title: "CLARIFIER" },
  { num: "02", title: "VALIDER" },
  { num: "03", title: "STRUCTURER" },
  { num: "04", title: "LANCER" },
  { num: "05", title: "PILOTER" },
  { num: "06", title: "DÉVELOPPER" },
  { num: "07", title: "DIGITALISER" },
  { num: "08", title: "FINANCER" },
  { num: "09", title: "PÉRENNISER" },
];

export default function FriseAnimee() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Animation automatique (boucle toutes les 2.5 secondes)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#f8f9fa] py-12 px-12 md:px-24 lg:px-36">
      <div className="max-w-7xl mx-auto">
        {/* Titre de la section */}
        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-black mb-12">
          LE PARCOURS KANGAM 360°
        </h2>

        {/* Zone Frise avec scroll horizontal sur mobile */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="relative min-w-[768px] pt-2 pb-6 px-6">
            {/* Ligne grise de fond (centrée verticalement sur le rond de 48px -> top 26px) */}
            <div className="absolute top-[26px] left-12 right-12 h-[2px] bg-gray-200 z-0" />

            {/* Ligne bleue animée */}
            <div
              className="absolute top-[26px] left-12 h-[2px] bg-[#1f6eed] z-0 transition-all duration-700 ease-in-out"
              style={{
                width: `calc(${(activeIndex / (steps.length - 1)) * 100}% - ${(activeIndex / (steps.length - 1)) * 24}px)`,
              }}
            />

            {/* Ronds et Titres */}
            <div className="relative z-10 flex justify-between items-center">
              {steps.map((step, idx) => {
                const isActive = idx === activeIndex;
                const isPassed = idx < activeIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="flex flex-col items-center focus:outline-none group"
                  >
                    {/* Pastille numérique */}
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                        isActive
                          ? "bg-[#1f6eed] text-white scale-110 shadow-lg shadow-blue-500/30"
                          : isPassed
                            ? "bg-[#1f6eed] text-white"
                            : "bg-white text-gray-400 border border-gray-200"
                      }`}
                    >
                      {step.num}
                    </div>

                    {/* Libellé sous le cercle */}
                    <span
                      className={`mt-3 text-xs font-bold tracking-wider transition-colors duration-300 ${
                        isActive || isPassed
                          ? "text-[#1f6eed]"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
