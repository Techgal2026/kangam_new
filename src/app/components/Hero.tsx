"use client";

import { useState, useEffect } from "react";
import { Play, Pause, ArrowUpRight } from "lucide-react";

// Liste des slides du carrousel
const slides = [
  {
    image: "/h.jpeg",
    title: "TRANSFORMEZ VOS IDÉES EN ENTREPRISES PERFORMANTES",
    badge: "CONSEIL & STRUCTURATION",
  },
  {
    image: "/h2.jpeg",
    title: "ACCOMPAGNEMENT STRATÉGIQUE SUR MESURE",
    badge: "PARCOURS 360°",
  },
  {
    image: "/h3.webp",
    title: "DÉVELOPPEZ VOS COMPÉTENCES ENTREPRENEURIALES",
    badge: "KANGAM ACADEMY",
  },
];

const SLIDE_DURATION = 4000; // Durée par slide (4 secondes)

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Gestion du défilement automatique et de la barre de progression
  useEffect(() => {
    let slideTimer: NodeJS.Timeout;
    let progressTimer: NodeJS.Timeout;

    if (isPlaying) {
      const stepTime = 50; // Fréquence de rafraîchissement de la barre (ms)

      progressTimer = setInterval(() => {
        setProgress((prev) =>
          Math.min(prev + (stepTime / SLIDE_DURATION) * 100, 100),
        );
      }, stepTime);

      slideTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }, SLIDE_DURATION);
    }

    return () => {
      clearInterval(slideTimer);
      clearInterval(progressTimer);
    };
  }, [isPlaying, currentSlide]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Background filigrane
  const bgWatermarkStyle = {
    backgroundImage: `url('bg.jpg')`,
    backgroundRepeat: "repeat",
    backgroundSize: "60px 120px",
  };

  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#1f6eed] via-[#1855c4] to-[#124299] py-12 px-16 md:px-32 lg:px-48"
      style={bgWatermarkStyle}
    >
      {/* Overlay de dégradé vers le blanc */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto h-[500px] sm:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
        {/* CARROUSEL D'IMAGES EN FONDU */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-85 z-0"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Overlay sombre global */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />

        {/* CONTENU TEXTUEL DYNAMIQUE */}
        <div className="absolute inset-0 p-8 md:p-16 lg:p-20 flex flex-col justify-end items-start text-white z-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight tracking-wide drop-shadow-md">
            {slides[currentSlide].title}
          </h1>
          <br />

          <a
            href="#diagnostic"
            className="inline-flex items-center space-x-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-[#1855c4] transition-colors shadow-lg shadow-[#1f6eed]/30"
          >
            {" "}
            <span>Réserver un diagnostic</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* CONTRÔLES MÉDIA (Play/Pause & Barre de progression) */}
        <div className="absolute bottom-6 left-8 md:left-16 hidden sm:flex items-center space-x-4 text-white/80 z-20">
          <button
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Mettre en pause" : "Lancer le défilement"}
            className="p-2.5 border border-white/40 rounded-full hover:bg-white/20 backdrop-blur-md transition-colors"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Barre de temps d'attente animée */}
          <div className="w-24 h-1 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1f6eed] transition-all duration-75 ease-linear"
              style={{ width: isPlaying ? `${progress}%` : "0%" }}
            />
          </div>

          <span className="text-xs tracking-widest font-bold uppercase border-l border-white/30 pl-4">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  );
}
