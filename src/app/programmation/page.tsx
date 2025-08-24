"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import djInfos from "@/data/djInfos.json";

export default function ProgrammationPage() {
  const [selectedDay, setSelectedDay] = useState("tous");

  // Filtrage des DJs
  const filteredDjs =
    selectedDay === "tous"
      ? djInfos
      : djInfos.filter((dj) => dj.jourMix.toLowerCase() === selectedDay);

  // Tri par nom (ordre alphabétique)
  const sortedDjs = [...filteredDjs].sort((a, b) =>
    a.name.localeCompare(b.name, "fr", { sensitivity: "base" })
  );

  const jours = ["tous", "jeudi", "vendredi", "samedi"];

  return (
    <div>
      {/* Header */}
      <header className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src="/assets/prog.JPG"
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

      {/* Titre */}
      <div className="sticky top-0 z-20 bg-black pt-8 pb-4 shadow-md">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-anton uppercase font-bold">
            Programmation
          </h2>
        </div>

        {/* Filtres */}
        <div className="flex justify-center gap-4 mt-4">
          {jours.map((jour) => (
            <button
              key={jour}
              onClick={() => setSelectedDay(jour)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedDay === jour
                  ? "bg-white text-black border-white"
                  : "bg-black text-white border-gray-500 hover:bg-gray-800"
              }`}
            >
              {jour.charAt(0).toUpperCase() + jour.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid DJ */}
      <div className="relative z-10 bg-black">
        <div className="max-w-6xl mx-auto p-8 md:p-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sortedDjs.map((dj, index) => (
            <a
              key={index}
              href={dj.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:rotate-1"
            >
              <Image
                src={`/assets/dj/${dj.image}`}
                alt={dj.name}
                width={400}
                height={400}
                className="rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay avec nom + jour */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
                <p className="text-white text-xl font-bold uppercase">{dj.name}</p>
                <p className="text-gray-300 text-sm mt-2">{dj.jourMix}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
