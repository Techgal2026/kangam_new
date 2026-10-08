"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const offers = [
  {
    name: "START",
    badge: "Idéation",
    subtitle: "De l'idée à l'entreprise",
    target: "Porteurs de projets & futurs entrepreneurs",
    highlight: false,
    features: [
      "Idéation & validation de projet",
      "Étude de marché & TAM/SAM/SOM",
      "Modèle économique (Business Model)",
      "Business plan & dossier bancaire",
      "Accompagnement au lancement",
      "Coaching individuel personnalisé",
    ],
    ctaText: "Choisir cette offre",
    link: "/offres/start",
  },
  {
    name: "BOOST",
    badge: "Structuration",
    subtitle: "De l'activité à une entreprise structurée",
    target: "Entrepreneurs, TPE & PME en activité",
    highlight: false,
    features: [
      "Diagnostic complet d'entreprise",
      "Structuration organisationnelle",
      "Optimisation financière & gestion",
      "Stratégie commerciale & marketing",
      "Digitalisation & intégration CRM/Odoo",
      "Suivi mensuel des résultats",
    ],
    ctaText: "Choisir cette offre",
    link: "/offres/boost",
  },
  {
    name: "SCALE",
    badge: "Recommandé",
    subtitle: "De l'entreprise à la croissance",
    target: "PME en phase de fort développement",
    highlight: true, // Carte mise en avant
    features: [
      "Stratégie d'expansion & nouveaux marchés",
      "Partenariats stratégiques & B2B",
      "Performance commerciale & scaling",
      "Processus avancés & tableaux de bord",
      "Accès privilégié aux investisseurs",
      "Mentorat exécutif dédié",
    ],
    ctaText: "Booster ma croissance",
    link: "/offres/scale",
  },
  {
    name: "ACADEMY",
    badge: "Formation",
    subtitle: "Des compétences pour entreprendre",
    target: "Entrepreneurs, salariés & équipes",
    highlight: false,
    features: [
      "Parcours de formations pratiques",
      "Ateliers & Bootcamps intensifs",
      "Management, Vente & Digital",
      "Outils professionnels & cas réels",
      "Certification & attestation KANGAM",
      "Accès au réseau d'alumni",
    ],
    ctaText: "Découvrir l'Academy",
    link: "/offres/academy",
  },
];

export default function CommercialOffers() {
  // SVG du filigrane bleu personnalisé #1f6eed
  const watermarkSvg = `
    <svg width="60" height="120" viewBox="0 0 60 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 0 L60 30 L30 60 L0 30 Z M30 60 L60 90 L30 120 L0 90 Z" stroke="#1f6eed" stroke-width="1.5" fill="none" opacity="0.25"/>
      <circle cx="30" cy="30" r="8" stroke="#1f6eed" stroke-width="1" fill="none" opacity="0.2"/>
      <circle cx="30" cy="90" r="8" stroke="#1f6eed" stroke-width="1" fill="none" opacity="0.2"/>
    </svg>
  `;

  return (
    <section className="relative w-full bg-[#f8f9fa] py-20 px-12 md:px-24 lg:px-36 overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* En-tête */}
        <div className="max-w-7xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase mb-4">
            CHOISISSEZ LE PLAN ADAPTÉ
          </h2>
          <p className="text-sm md:text-base text-gray-800 font-medium leading-relaxed">
            Des formules d’accompagnement structurées et sur mesure pour chaque
            phase de maturité de votre entreprise.
          </p>
        </div>

        {/* Grille des 4 Cartes d'offres */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {offers.map((offer, index) => {
            const isHighlighted = offer.highlight;

            return (
              <div
                key={index}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl ${
                  isHighlighted
                    ? "bg-[#1f6eed]/90 backdrop-blur-md text-white shadow-xl shadow-[#1f6eed]/30 border-2 border-[#1f6eed] transform md:-translate-y-2"
                    : "bg-white/70 backdrop-blur-md text-gray-900 border border-gray-200/80 hover:border-[#1f6eed] hover:bg-white/90"
                }`}
              >
                <div>
                  {/* Badge & Titre de l'offre */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-black tracking-tight uppercase ${
                        isHighlighted ? "text-white" : "text-black"
                      }`}
                    >
                      {offer.name}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        isHighlighted
                          ? "bg-lime-400 text-black"
                          : "bg-blue-100/80 text-[#1f6eed]"
                      }`}
                    >
                      {offer.badge}
                    </span>
                  </div>

                  {/* Sous-titre */}
                  <p
                    className={`text-xs font-semibold mb-6 ${
                      isHighlighted ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {offer.subtitle}
                  </p>

                  {/* Intitulé principal */}
                  <div className="mb-6">
                    <span
                      className={`text-2xl font-black block leading-snug ${
                        isHighlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      KANGAM {offer.name}
                    </span>
                    <span
                      className={`text-xs font-medium block mt-1 ${
                        isHighlighted ? "text-blue-200" : "text-gray-500"
                      }`}
                    >
                      Cible : {offer.target}
                    </span>
                  </div>

                  {/* Bouton d'action */}
                  <Link
                    href={offer.link}
                    className={`w-full block text-center py-3 px-4 rounded-xl font-bold text-sm mb-6 transition-colors shadow-sm ${
                      isHighlighted
                        ? "bg-white text-[#1f6eed] hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {offer.ctaText}
                  </Link>

                  <p
                    className={`text-[11px] text-center mb-6 border-b pb-4 ${
                      isHighlighted
                        ? "text-blue-200 border-white/20"
                        : "text-gray-400 border-gray-200/60"
                    }`}
                  >
                    Accompagnement opérationnel orienté résultats
                  </p>

                  {/* Prestations */}
                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start space-x-2.5 text-xs"
                      >
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${
                            isHighlighted ? "text-lime-300" : "text-[#1f6eed]"
                          }`}
                        />
                        <span
                          className={`leading-tight ${
                            isHighlighted ? "text-blue-50" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pied de Carte */}
                <div
                  className={`pt-4 border-t flex items-center justify-between text-[11px] font-semibold ${
                    isHighlighted
                      ? "border-white/20 text-blue-100"
                      : "border-gray-200/60 text-gray-500"
                  }`}
                >
                  <span>Prestations :</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                      isHighlighted
                        ? "bg-white/20 text-white"
                        : "bg-gray-100/80 text-gray-700"
                    }`}
                  >
                    Sur mesure
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
