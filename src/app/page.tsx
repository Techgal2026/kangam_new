import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grillesc from "./components/Grillesc";
import Parcours from "./components/Parcours";
import CommercialOffers from "./components/CommercialOffer";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import About from "./components/About";
<link
  href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap"
  rel="stylesheet"
></link>;

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Grillesc />
      <Parcours />
      <CommercialOffers />
      <Partners />
      <Footer />
    </div>
  );
}
