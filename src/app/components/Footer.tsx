"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  // SVG du filigrane bleu personnalisé avec #1f6eed
  const watermarkSvg = `
    <svg width="60" height="120" viewBox="0 0 60 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 0 L60 30 L30 60 L0 30 Z M30 60 L60 90 L30 120 L0 90 Z" stroke="#1f6eed" stroke-width="1.5" fill="none" opacity="0.35"/>
      <circle cx="30" cy="30" r="8" stroke="#1f6eed" stroke-width="1" fill="none" opacity="0.25"/>
      <circle cx="30" cy="90" r="8" stroke="#1f6eed" stroke-width="1" fill="none" opacity="0.25"/>
    </svg>
  `;

  const bgWatermarkStyle = {
    backgroundImage: `url("bg.jpg")`,
    backgroundRepeat: "repeat",
    backgroundSize: "60px 120px",
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#1f6eed] pt-20 pb-8 px-12 md:px-24 lg:px-36 overflow-hidden text-black"
      style={bgWatermarkStyle}
    >
      {/* Overlay de dégradé du haut vers le blanc appliqué sur tout le fond/filigrane */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Structure principale en 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Bloc 1 : Logo & Identité KANGAM */}
          <div className="flex flex-col items-start justify-start">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="flex items-center gap-2 font-bold tracking-tighter text-black">
                <span className="text-4xl font-black leading-none text-black">
                  KANGAM
                </span>
                <span className="text-[10px] border-l-2 border-black pl-2 leading-tight text-black font-extrabold uppercase">
                  CONSEIL &<br />
                  ACCOMPAGNEMENT
                  <br />
                  ENTREPRENEURIAL
                </span>
              </div>
            </Link>
          </div>

          {/* Bloc 2 : Nos Offres */}
          <div>
            <h3 className="text-lg font-black uppercase text-black tracking-tight mb-4">
              NOS OFFRES
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold text-black/90">
              <li>
                <Link href="/offres/start" className="hover:underline">
                  KANGAM START
                </Link>
              </li>
              <li>
                <Link href="/offres/boost" className="hover:underline">
                  KANGAM BOOST
                </Link>
              </li>
              <li>
                <Link href="/offres/scale" className="hover:underline">
                  KANGAM SCALE
                </Link>
              </li>
              <li>
                <Link href="/offres/academy" className="hover:underline">
                  KANGAM ACADEMY
                </Link>
              </li>
              <li>
                <Link href="/offres/projects" className="hover:underline">
                  KANGAM PROJECTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloc 3 : Le Cabinet */}
          <div>
            <h3 className="text-lg font-black uppercase text-black tracking-tight mb-4">
              LE CABINET
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold text-black/90">
              <li>
                <Link href="/a-propos" className="hover:underline">
                  À propos de KANGAM
                </Link>
              </li>
              <li>
                <Link href="/parcours-360" className="hover:underline">
                  Le Parcours 360°
                </Link>
              </li>
              <li>
                <Link href="/expertises" className="hover:underline">
                  Pôles d'expertise
                </Link>
              </li>
              <li>
                <Link href="/notre-approche" className="hover:underline">
                  Notre Approche & Vision
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:underline">
                  Actualités & Publications
                </Link>
              </li>
              <li>
                <Link href="/carrieres" className="hover:underline">
                  Rejoindre KANGAM
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloc 4 : Contact & Communauté */}
          <div>
            <h3 className="text-lg font-black uppercase text-black tracking-tight mb-2">
              COMMUNAUTÉ KANGAM
            </h3>
            <p className="text-xs font-semibold text-black/80 mb-4">
              Dakar, Sénégal
            </p>
            <ul className="space-y-2.5 text-sm font-semibold text-black/90">
              <li>
                <Link href="/diagnostic" className="hover:underline">
                  Prendre Rendez-vous
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Nous Contacter
                </Link>
              </li>
              <li>
                <a href="mailto:contact@kangam.com" className="hover:underline">
                  contact@kangam.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre Blanche Inférieure (Liens partenaires & Réseaux sociaux) */}
        <div className="w-full bg-white rounded-lg shadow-sm px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Liens secondaires à gauche */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-gray-800">
            <Link href="/" className="hover:text-[#1f6eed] transition-colors">
              Kangam.com
            </Link>
            <Link
              href="/academy"
              className="hover:text-[#1f6eed] transition-colors"
            >
              Kangam Academy
            </Link>
            <Link
              href="/diagnostic"
              className="hover:text-[#1f6eed] transition-colors"
            >
              Diagnostic En Ligne
            </Link>
            <Link
              href="/mentions-legales"
              className="hover:text-[#1f6eed] transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-[#1f6eed] transition-colors"
            >
              Politique de Confidentialité
            </Link>
          </div>

          {/* Icônes Réseaux Sociaux à droite */}
          <div className="flex items-center space-x-4 text-black">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-[#1f6eed] transition-colors"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-[#1f6eed] transition-colors"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-[#1f6eed] transition-colors"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="hover:text-[#1f6eed] transition-colors"
            >
              <FaTiktok size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#1f6eed] transition-colors"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-[#1f6eed] transition-colors"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
