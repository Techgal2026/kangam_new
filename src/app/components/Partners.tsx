import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    name: "World Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/The_World_Bank_logo.svg",
  },
  {
    name: "PNUD / UNDP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/UNDP_logo.svg",
  },
  {
    name: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
  },
  {
    name: "Mastercard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    name: "Visa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  },
  {
    name: "PwC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg",
  },
  {
    name: "African Development Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/African_Development_Bank_logo.svg",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "McKinsey & Company",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/McKinsey_%26_Company_Logo.svg",
  },
];

export default function Partners() {
  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-12 md:px-24 lg:px-36">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase mb-10">
          PARTENAIRES
        </h2>

        {/* Grille de 5 colonnes sur desktop avec padding et gouttières ajustées */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg p-6 h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-[80%] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
