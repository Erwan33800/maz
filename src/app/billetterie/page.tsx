import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';

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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-anton uppercase font-bold">Billetterie</h2>
        </div>
      </div>

      <div className="relative z-10 bg-black">
        <div className="max-w-4xl mx-auto p-8 md:p-16 text-center">
          <p className="text-2xl font-anton mb-10 text-white text-justify">On reste sur la même recette que les précédantes éditions, mais avec une nouveauté cette année on vous propose de prendre des pack en équipes et économiser quelques euros !</p>
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <Link href="https://www.helloasso.com/associations/maz/evenements/maz-5?fbclid=PAZXh0bgNhZW0CMTEAAab89EeMrHh2h34TYZDswlizpZI1NRpznyfJ9MTyq4Scbe3k5zBDqAX5WX4_aem_2S9KMjqJY4wuxJCejYR7lw" target="_blank" rel="noopener noreferrer">
                <h3 className="text-3xl font-bold text-white">Pass Kiffeur</h3>
                <p className="text-2xl font-anton mt-2 text-white">Du jeudi au dimanche</p>
                <p className="text-5xl font-anton mt-2 text-white">135€</p>              
              </Link>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <Link href="https://www.helloasso.com/associations/maz/evenements/maz-5?fbclid=PAZXh0bgNhZW0CMTEAAab89EeMrHh2h34TYZDswlizpZI1NRpznyfJ9MTyq4Scbe3k5zBDqAX5WX4_aem_2S9KMjqJY4wuxJCejYR7lw" target="_blank" rel="noopener noreferrer">
                <h3 className="text-3xl font-bold text-white">Pass Kiffeur en Équipe</h3>
                <p className="text-2xl font-anton mt-2 text-white">4 personnes</p>
                <p className="text-5xl font-anton mt-2 text-white">500€</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}