"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    subtitle: "Pôles & Offres",
    title: "NOS OFFRES",
    image: "/g3.avif",
    link: "/offres",
  },
  {
    subtitle: "Accompagnement",
    title: "PARCOURS 360°",
    image: "/g.avif",
    link: "/parcours-360",
  },
  {
    subtitle: "Développement des compétences",
    title: "KANGAM ACADEMY",
    image: "/g2.jpg",
    link: "/academy",
  },
];

export default function DiscoverMore() {
  const watermarkSvg = `
    <svg width="40" height="80" viewBox="0 0 40 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0 L40 20 L20 40 L0 20 Z M20 40 L40 60 L20 80 L0 60 Z" stroke="#1f6eed" stroke-width="1.2" fill="none" opacity="0.35"/>
      <circle cx="20" cy="20" r="5" stroke="#1f6eed" stroke-width="0.8" fill="none" opacity="0.25"/>
      <circle cx="20" cy="60" r="5" stroke="#1f6eed" stroke-width="0.8" fill="none" opacity="0.25"/>
    </svg>
  `;

  const bgWatermarkStyle = {
    backgroundImage: `url("bg.jpg")`,
    backgroundRepeat: "repeat",
    backgroundSize: "40px 80px",
  };

  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-12 md:px-24 lg:px-36">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal de la section */}
        <h2
          className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          DÉCOUVREZ EN PLUS
        </h2>

        {/* Grille des 3 Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.link}
              className="group block relative rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-sm"
            >
              {/* Fond de la carte */}
              <div
                className="relative bg-[#1f6eed] p-5 pb-8 flex flex-col justify-between min-h-[440px]"
                style={bgWatermarkStyle}
              >
                {/* Dégradé du bas vers le blanc */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/95 pointer-events-none" />

                {/* Container de l'image */}
                <div className="relative w-full h-[260px] rounded-sm overflow-hidden z-10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Textes sous l'image */}
                <div className="relative z-10 pt-6 px-3">
                  <p className="text-xs md:text-sm font-semibold text-gray-700 tracking-wide mb-1">
                    {card.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-black tracking-tight uppercase leading-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
