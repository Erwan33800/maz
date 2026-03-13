'use client';

import React from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import '../../app/embla.css';
import { Fascinate } from 'next/font/google';



const fascinate = Fascinate({
  weight: '400',
  subsets: ['latin'],
})

export default function ThanksLayout() {

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Menu burger */}
      <div className="absolute top-8 right-8 z-30">
        <MobileMenu />
      </div>

      <div className="embla">
        {/* Conteneur des slides */}
        <div className="h-full">
            <div className="relative h-full">
              <Image
                src={`/assets/maz_merci.jpeg`}
                alt={`background`}
                fill
                className="object-cover"
              />
            </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white p-4 sm:p-6 md:p-8 bg-black/10 backdrop-blur-[4px]">       
          <div className="text-center">
            <div className={fascinate.className}>
                <p className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-anton mt-2 sm:mt-4">16-19 JUILLET</p>
                <p className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-anton">(2026)</p>
            </div>
            <div className="mt-4 sm:mt-6 text-xl sm:text-base md:text-xl">
              <p>Retour à Arudy (64)</p>
              <p>6ᵉ édition</p>
              <p>Thème et infos TBA</p>
            </div>
          </div>
      </div>
    </div>
  );
}
