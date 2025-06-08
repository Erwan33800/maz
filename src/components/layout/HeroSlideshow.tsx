'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import '../../app/embla.css';

const slides = [
  'sceno.jpg', 'foule.jpg', 'chorale.JPG', 'crab.jpg', 'debut.jpg',
  'duffy.jpg', 'futanque.jpg', 'dudu.jpg',
  'ro.JPG', 'setpopu.jpg', 'petanque.jpg',
];

export default function HeroSlideshow() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 4000 })]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Menu mobile en haut à droite */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-30">
        <MobileMenu />
      </div>

      <div className="embla" ref={emblaRef}>
        {/* Conteneur des slides */}
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div className="embla__slide relative h-full" key={index}>
              <Image
                src={`/assets/slides/${slide}`}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contenu superposé UNIQUE par-dessus le carousel */}
      <div className="absolute inset-0 flex items-center justify-center text-white p-4 sm:p-6 md:p-8 bg-black/10 backdrop-blur-[4px]">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-12">
          <div className="text-center lg:text-left">
            <Image
              src="/assets/logo_maz2.png"
              alt="logo"
              width={300}
              height={300}
              className="filter invert brightness-200"
            />
            <p className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-anton mt-2 sm:mt-4">25—28 SEPTEMBRE</p>
            <p className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-anton">(2025)</p>
            <div className="mt-4 sm:mt-6 text-xl sm:text-base md:text-xl font-medium">
              <p>Marmande, Nouvelle-Aquitaine</p>
              <p>5ᵉ édition</p>
              <p>Thème Paris Sportif</p>
            </div>
          </div>
          <Image
            src="/assets/coureur.png"
            alt="Silhouette d'un coureur"
            width={500}
            height={500}
            className="invert"
          />
        </div>
      </div>
    </div>
  );
}
