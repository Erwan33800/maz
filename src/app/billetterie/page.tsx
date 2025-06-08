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
          <h1 className="text-6xl font-anton text-white">MAZ</h1>
        </div>
        <div className="absolute top-8 right-8 z-30">
          <MobileMenu />
        </div>
      </header>

      <div className="sticky top-0 z-20 bg-black pt-8 pb-4 shadow-md">
        <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-5xl font-anton uppercase font-bold">Billetterie</h2>
        </div>
      </div>

      <div className="relative z-10 bg-black">
        <div className="max-w-4xl mx-auto p-8 md:p-16 text-center">
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-white">Pass Kiffeur (3 soirs)</h3>
              <p className="text-5xl font-anton mt-2 text-white">135€</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-white">Pass Kiffeur en Équipe (pour 4)</h3>
              <p className="text-5xl font-anton mt-2 text-white">500€</p>
            </div>
          </div>

          <Link href="https://www.helloasso.com/associations/maz/evenements/maz-5?fbclid=PAZXh0bgNhZW0CMTEAAab89EeMrHh2h34TYZDswlizpZI1NRpznyfJ9MTyq4Scbe3k5zBDqAX5WX4_aem_2S9KMjqJY4wuxJCejYR7lw" target="_blank" rel="noopener noreferrer">
            <span className="mt-12 inline-block bg-green-500 text-white font-bold uppercase py-4 px-8 rounded-lg text-2xl hover:bg-green-600 transition-colors">
              Acheter sur HelloAsso
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}