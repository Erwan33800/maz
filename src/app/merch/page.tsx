"use client"

import { useEffect } from "react"
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';

export default function MerchPage() {
    useEffect(() => {
    const handleMessage = (e: MessageEvent<{ height?: number }>) => {
        const dataHeight = e.data?.height
        const haWidgetElement = document.getElementById("haWidget") as HTMLIFrameElement
        if (dataHeight && haWidgetElement) {
        haWidgetElement.style.height = `${dataHeight}px`
        }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
    }, [])

  return (
    <div>
        <header className="relative h-[75vh] w-full overflow-hidden">
            <Image
            src="/assets/slides/sceno.JPG"
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
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-anton uppercase font-bold">Boutique</h2>
            </div>
        </div>

        <div className="relative z-10 bg-black">
            <div className="max-w-4xl mx-auto p-8 md:p-16">
                <p className="text-2xl text-center text-justify">
                    Retrouvez notre sélection exclusive de t-shirts et accessoires.<br/>
                    Nos t-shirts sont de coupe oversize et taillent très grand : pensez à choisir votre taille en conséquence pour un confort optimal.
                </p>                
            </div>                     
        </div>

        <div className="flex flex-col justify-center items-center p-4 space-y-6">
            <div className="w-full max-w-4xl">
                <iframe
                id="haWidget"
                title="Boutique Maz Festival"
                src="https://www.helloasso.com/associations/maz/boutiques/merch-maz-5/widget"
                loading="lazy"
                style={{ width: "100%", border: "none" }}
                ></iframe>
            </div>

            <a
                href="https://www.helloasso.com/associations/maz/boutiques/merch-maz-5"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-bold uppercase rounded-2xl shadow-md hover:bg-gray-200 transition"
            >
                Voir la boutique sur HelloAsso
            </a>
        </div>

        <Footer />
    </div>
  )
}
