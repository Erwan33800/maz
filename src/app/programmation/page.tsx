import Image from 'next/image';
import MobileMenu from '@/components/layout/MobileMenu';

export default function ProgrammationPage() {
  return (
    <div>
      <header className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src="/assets/prog.JPG"
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
            <h2 className="text-5xl font-anton uppercase font-bold">Programmation</h2>
        </div>
      </div>

      <div className="relative z-10 bg-black">
        <div className="max-w-4xl mx-auto p-8 md:p-16">
          <p className="text-2xl text-center">La programmation sera dévoilée prochainement...</p>
        </div>
      </div>
    </div>
  );
}