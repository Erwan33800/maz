"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import AnimatedPassCard from "@/components/ui/AnimatedPassCard";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const passes = [
  {
    title: "Pass Kiffeur",
    subtitle: "Du jeudi au dimanche",
    price: "135€",
    href: "https://www.helloasso.com/associations/maz/evenements/maz-5?fbclid=PAZXh0bgNhZW0CMTEAAab89EeMrHh2h34TYZDswlizpZI1NRpznyfJ9MTyq4Scbe3k5zBDqAX5WX4_aem_2S9KMjqJY4wuxJCejYR7lw",
  },
  {
    title: "Pass Kiffeur en Équipe",
    subtitle: "4 personnes",
    price: "500€",
    href: "https://www.helloasso.com/associations/maz/evenements/maz-5?fbclid=PAZXh0bgNhZW0CMTEAAab89EeMrHh2h34TYZDswlizpZI1NRpznyfJ9MTyq4Scbe3k5zBDqAX5WX4_aem_2S9KMjqJY4wuxJCejYR7lw",
  },
];

export default function BilletteriePage() {
  return (
    <div>
      <header className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src="/assets/info.png"
          alt="Background"
          fill
          quality={100}
          className="object-cover z-0"
        />
        <div className="relative z-20 flex justify-center items-start h-full p-8">
          <Link href="/">
            <Image
              src="/assets/logo_maz.png"
              alt="logo"
              width={500}
              height={300}
              className="filter invert brightness-200"
            />
          </Link>
        </div>
        <div className="absolute top-8 right-8 z-30">
          <MobileMenu />
        </div>
      </header>

      <div className="sticky top-0 z-20 bg-black pt-8 pb-4 shadow-md">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-anton uppercase font-bold">
            Billetterie
          </h2>
        </div>
      </div>

      <div className="relative z-10 bg-black">
        <div className="max-w-4xl mx-auto p-8 md:p-16 text-center">

          {/* Texte intro */}
          <p className="text-2xl font-anton mb-10 text-white text-justify">
            On reste sur la même recette que les précédantes éditions, mais
            avec une nouveauté cette année on vous propose de prendre des pack
            en équipes et économiser quelques euros !
          </p>

          {/* Encadré "Inclus dans tous les pass" */}
          <div className="max-w-3xl mx-auto border-2 border-white rounded-lg p-6 mb-10">
            <h3 className="text-2xl font-anton mb-3 text-white">
              Inclus dans tous les pass
            </h3>
            <ul className="list-disc list-inside text-white text-left max-w-xl mx-auto space-y-2">
              <li className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />Accès aux concerts & animations</li>
              <li className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />Camping sur place (tentes non fournies)</li>
              <li className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />Sanitaires & Foodtrucks</li>
              <li className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />4 jours d’immersion (jeudi à dimanche)</li>
              <li className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />Bières incluses (à volonté*)</li>
              <li className="flex items-center text-white"><CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />Adhésion à l&apos;association MAZ</li>
            </ul>
          </div>

          {/* Cartes Pass côte à côte */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto mb-8">
            {passes.map((pass, i) => (
              <div key={i} className="sm:w-1/2">
                <AnimatedPassCard {...pass} />
              </div>
            ))}
          </div>

          {/* Bloc Mise en avant Pass Équipe + Bonus déguisement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 bg-yellow-100 text-black rounded-xl p-6 border-4 border-black shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-anton mb-4 text-center">
              🔥 Le bon plan : Le Pass Équipe !
            </h3>
            <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto">
              Formez une team de 4 personnes et économisez 40€ ! Le Pass Équipe
              vous donne accès à tous les avantages… mais avec encore plus de fun
              à partager. 👯‍♀️
            </p>
          </motion.div>


        </div>
      </div>

      <Footer />
    </div>
  );
}
