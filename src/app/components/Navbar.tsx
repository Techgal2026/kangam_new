"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      {/* Top Banner Supérieure avec marges élargies */}
      <div className="flex items-center justify-between px-16 md:px-32 lg:px-48 py-2 text-xs md:text-sm text-white bg-black/90 backdrop-blur-sm border-b border-white/10">
        <p className="font-medium tracking-wide flex items-center gap-2">
          <span>
            KANGAM — Conseil, Formation & Accompagnement Entrepreneurial
          </span>
        </p>
        <div className="hidden sm:flex items-center space-x-6">
          <a
            href="#expertises"
            className="flex items-center space-x-1.5 hover:text-[#1f6eed] transition-colors"
          >
            <Briefcase size={14} />
            <span>Nos Pôles d'Expertise</span>
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-1.5 hover:text-[#1f6eed] transition-colors"
          >
            <Mail size={14} />
            <span>Contact</span>
          </a>
        </div>
      </div>

      {/* Barre de navigation principale avec marges adaptées */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-12 md:px-24 lg:px-36 h-20 flex items-center justify-between">
          {/* Logo KANGAM */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center gap-2 font-bold tracking-tighter text-black">
              <span className="text-3xl font-black leading-none text-black">
                KANGAM
              </span>
              <span className="text-[10px] border-l-2 border-[#1f6eed] pl-2 leading-tight text-gray-700 font-semibold uppercase">
                CONSEIL &<br />
                ACCOMPAGNEMENT
                <br />
                ENTREPRENEURIAL
              </span>
            </div>
          </Link>

          {/* Liens de navigation */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-800">
            <Link
              href="/a-propos"
              className="hover:text-[#1f6eed] transition-colors"
            >
              À Propos
            </Link>

            {/* Menu Déroulant Offres */}
            <div
              className="relative group py-6"
              onMouseEnter={() => setIsOffersOpen(true)}
              onMouseLeave={() => setIsOffersOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-[#1f6eed] transition-colors">
                <span>Nos Offres</span>
                <ChevronDown size={16} />
              </button>

              {isOffersOpen && (
                <div className="absolute top-full -left-4 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                  <Link
                    href="/offres/start"
                    className="block px-4 py-2.5 hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-sm font-bold text-gray-900">
                      KANGAM START
                    </div>
                    <div className="text-xs text-gray-500">
                      De l'idée à l'entreprise
                    </div>
                  </Link>
                  <Link
                    href="/offres/boost"
                    className="block px-4 py-2.5 hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-sm font-bold text-gray-900">
                      KANGAM BOOST
                    </div>
                    <div className="text-xs text-gray-500">
                      Structuration TPE/PME
                    </div>
                  </Link>
                  <Link
                    href="/offres/scale"
                    className="block px-4 py-2.5 hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-sm font-bold text-gray-900">
                      KANGAM SCALE
                    </div>
                    <div className="text-xs text-gray-500">
                      Accélération & Croissance
                    </div>
                  </Link>
                  <Link
                    href="/offres/academy"
                    className="block px-4 py-2.5 hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-sm font-bold text-gray-900">
                      KANGAM ACADEMY
                    </div>
                    <div className="text-xs text-gray-500">
                      Formations & Bootcamps
                    </div>
                  </Link>
                  <Link
                    href="/offres/projects"
                    className="block px-4 py-2.5 hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-sm font-bold text-gray-900">
                      KANGAM PROJECTS
                    </div>
                    <div className="text-xs text-gray-500">
                      Programmes sur mesure
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/parcours-360"
              className="hover:text-[#1f6eed] transition-colors"
            >
              Parcours 360°
            </Link>
            <Link
              href="/academy"
              className="hover:text-[#1f6eed] transition-colors"
            >
              Academy
            </Link>
          </div>

          {/* Boutons d'action */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/diagnostic"
              className="px-6 py-2.5 bg-black text-white rounded-full font-semibold hover:bg-[#1858bd] transition-colors shadow-md shadow-[#1f6eed]/20"
            >
              Prendre RDV
            </Link>

            <button className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-full font-medium hover:bg-gray-50 text-sm">
              <span>FR</span>
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
            <Link
              href="/a-propos"
              className="block text-gray-800 font-semibold py-1"
            >
              À Propos
            </Link>
            <div className="space-y-2 pl-2 border-l-2 border-[#1f6eed]">
              <span className="text-xs font-bold text-gray-400 uppercase">
                Nos Offres
              </span>
              <Link
                href="/offres/start"
                className="block text-sm text-gray-700"
              >
                KANGAM START
              </Link>
              <Link
                href="/offres/boost"
                className="block text-sm text-gray-700"
              >
                KANGAM BOOST
              </Link>
              <Link
                href="/offres/scale"
                className="block text-sm text-gray-700"
              >
                KANGAM SCALE
              </Link>
              <Link
                href="/offres/academy"
                className="block text-sm text-gray-700"
              >
                KANGAM ACADEMY
              </Link>
              <Link
                href="/offres/projects"
                className="block text-sm text-gray-700"
              >
                KANGAM PROJECTS
              </Link>
            </div>
            <Link
              href="/parcours-360"
              className="block text-gray-800 font-semibold py-1"
            >
              Parcours 360°
            </Link>
            <Link
              href="/diagnostic"
              className="block w-full text-center py-2.5 bg-[#1f6eed] text-white rounded-full font-semibold"
            >
              Prendre RDV
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
