import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';

const SectionTitle = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="text-3xl font-bold font-anton uppercase mt-12 mb-6 scroll-mt-24">
    {children}
  </h2>
);

const StyledLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <span className="inline-block bg-gray-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
      {children}
    </span>
  </Link>
);

export default function InfosPratiquesPage() {
  return (
    <div>
      {/* Top Section (3/4 screen) with Background Image */}
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

      {/* Bottom Section (1/4 screen) - Sticky */}
      <div className="sticky top-0 z-20 bg-black pt-8 pb-10 shadow-md">
        <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-anton uppercase font-bold">Infos Pratiques</h2>
        </div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto p-8 md:p-16">
          <div className="text-lg space-y-4 mb-12 text-justify">
            <p>Du 25 au 28 septembre 2025</p>
            <p>Lieu : Pas loin de Marmande, environ 1h15 de Bordeaux !</p>
            <p>Thème 2025 : WINAMAZ – Paris Sportifs</p>
            <p>Préparez vos déguisements les plus culottés, vos slogans d’équipe et vos meilleurs chants de vestiaire, car cette année, le festival sent la sueur, le panache et les shots de vin dans les vestiaires.</p>
          </div>

          <section>
            <SectionTitle id="camping">CAMPING</SectionTitle>
            <div className="text-lg space-y-4 text-justify">
              <p>Tout le monde dort sur place, et tout le monde dort en tente !</p>
              <p>Pas de mobil-home, pas de palace, que des sardines joyeuses dans leurs toiles colorées.</p>
              <p>Prévois ta tente, ton matelas, ta lampe frontale, et ton plus beau pyjama sportif.</p>
              <p>Des sanitaires propres seront sur place, ainsi que de quoi se restaurer et se ravitailler tout le week-end.</p>
            </div>
          </section>

          <section>
            <SectionTitle id="acces">ACCÈS & NAVETTES</SectionTitle>
            <div className="text-lg space-y-4 text-justify">
              <p>📍 L&#39;adresse te sera communiquée quelques jours avant le festival.</p>
              <p>Depuis la gare de Bordeaux, une navette sera dispo :</p>
              <ul className="list-disc list-inside">
                <li>Jeudi 25 sept. (aller)</li>
                <li>Dimanche 28 sept. (retour)</li>
              </ul>
              <StyledLink href="https://forms.gle/z6e1QFwYKzPRbQFY7">Réserve ta place en navette</StyledLink>
              <p className='pt-2'>(Penses à bien t’inscrire à l’avance, les places sont limitées !)</p>
            </div>
          </section>

          <section>
            <SectionTitle id="stands">STANDS, BAR & FOLIES LOCALES</SectionTitle>
            <div className="text-lg space-y-4 text-justify">
              <p>Comme chaque année, nos stands redoublent de créativité pour rendre le festival encore plus zinzin. Voici quelques-uns des incontournables de l’an dernier :</p>
              <ul className="list-disc list-inside">
                <li>Les Chocoladies et leur cueillette magique 🌿</li>
                <li>Le Bar des 3 Béliers devenu mythique avec ses shots de vin et son ambiance d’avant-match</li>
                <li>Les célèbres druides et leur potion magique tant désirée !</li>
              </ul>
              <p>Tu veux proposer un stand cette année ?</p>
              <StyledLink href="https://forms.gle/FPhyGtnGrZ9FUHK59">Inscrire son stand</StyledLink>
              <p className='pt-2'>Toutes les idées sont bienvenues : sportifs, loufoques, détente ou déjantées. L’essentiel, c’est de participer !</p>
            </div>
          </section>

          <section>
            <SectionTitle id="deguisements">DÉGUISEMENTS & THÈME : PARIS SPORTIF</SectionTitle>
            <div className="text-lg space-y-4 text-justify">
              <p>C’est pas une compétition, mais... si, un peu quand même.</p>
              <p>Déguisements d’équipes, supporters farfelus, arbitres corrompus, mascottes dérangées : fais parler ta créativité !</p>
              <p>Une publication Instagram est là pour te donner des idées de tenues sportivo-grotesques.</p>
            </div>
          </section>

          <section>
            <SectionTitle id="connecte">RESTE CONNECTÉ</SectionTitle>
            <div className="text-lg space-y-4 text-justify">
              <p>Tout au long de l’été, retrouve :</p>
              <ul className="list-disc list-inside">
                <li>Des présentations de DJ</li>
                <li>Des infos sur le camping et la bouffe</li>
                <li>Des focus sur les stands et les activités</li>
                <li>Des conseils pour le covoit’ et les navettes</li>
              </ul>
              <StyledLink href="https://www.instagram.com/maz.festival/">Notre insta !</StyledLink>
              <p>Suis-nous sur Instagram pour ne rien rater.</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}