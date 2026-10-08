import Image from "next/image";
import Link from "next/link";

export default function About() {
  // SVG de filigrane géométrique discret aux nuances bleues (couleur identitaire KANGAM)
  const watermarkSvg = `
    <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 40 L40 0 L80 40 L40 80 Z M40 10 L70 40 L40 70 L10 40 Z" stroke="#1f6eed" stroke-width="1" fill="none" opacity="0.12"/>
      <circle cx="40" cy="40" r="12" stroke="#1f6eed" stroke-width="1" fill="none" opacity="0.10"/>
      <path d="M20 20 L60 60 M60 20 L20 60" stroke="#1f6eed" stroke-width="0.75" opacity="0.08"/>
    </svg>
  `;

  const bgWatermarkStyle = {
    backgroundColor: "#EFF6FF", // Fond bleu très clair / pastel
    backgroundImage: `url("bg.jpg")`,
    backgroundRepeat: "repeat",
    backgroundSize: "80px 80px",
  };

  return (
    <section className="w-full py-12 px-6 md:px-16 lg:px-24 bg-white">
      <div
        className="relative max-w-7xl mx-auto rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[420px]"
        style={bgWatermarkStyle}
      >
        {/* Overlay : Blanc à gauche vers Transparent à droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

        {/* Colonne Gauche : Contenu textuel KANGAM (Padding augmenté) */}
        <div className="relative z-10 p-8 md:p-16 lg:p-20 flex flex-col justify-center items-start text-black">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] mb-6">
            TRANSFORMEZ VOS IDÉES, <br />
            STRUCTUREZ ET ACCÉLÉREZ <br />
            VOTRE ENTREPRISE
          </h2>

          <p className="text-sm md:text-base font-normal text-gray-900 leading-relaxed max-w-lg mb-8">
            Vous avez une idée ? Nous vous aidons à en faire une activité
            viable. Vous avez une entreprise ? Nous vous aidons à la structurer,
            la professionnaliser et développer votre impact durable.
          </p>

          <Link
            href="/a-propos"
            className="bg-black hover:bg-blue-700 text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200 inline-block shadow-sm"
          >
            Découvrir le cabinet
          </Link>
        </div>

        {/* Colonne Droite : Image de mise en valeur (Padding augmenté) */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16 flex items-center justify-center">
          <div className="relative w-full h-full min-h-[300px] md:min-h-[380px] p-2 md:p-3 rounded-sm shadow-sm">
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <Image
                src="/logo.jpg"
                alt="Accompagnement entrepreneurial KANGAM"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
