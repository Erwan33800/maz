'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative min-h-screen w-full bg-[#1a73e8] flex items-center text-white p-8">
      <div className="w-full max-w-7xl mx-auto flex justify-center items-center gap-16">
        <div className="text-left">
          <h1 className="text-9xl font-anton">MAZ</h1>
          <p className="text-5xl font-anton mt-4">25—28 SEPTEMBRE</p>
          <p className="text-5xl font-anton">(2025)</p>
          <div className="mt-8 text-lg">
            <p>Marmande, Nouvelle-Aquitaine</p>
            <p>5ème édition</p>
          </div>
        </div>
        <Image
          src="/assets/coureur.png"
          alt="Silhouette d'un coureur"
          width={400}
          height={400}
          className="invert"
        />
      </div>
    </header>
  );
}