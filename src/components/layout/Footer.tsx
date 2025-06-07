import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg">Maz Festival</p>
          <p>&copy; {new Date().getFullYear()} - Tous droits réservés.</p>
        </div>
        <div className="flex gap-8">
          <Link href="https://www.instagram.com/maz.festival/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </Link>
          <Link href="https://www.helloasso.com/associations/maz/evenements/maz-5?fbclid=PAZXh0bgNhZW0CMTEAAab89EeMrHh2h34TYZDswlizpZI1NRpznyfJ9MTyq4Scbe3k5zBDqAX5WX4_aem_2S9KMjqJY4wuxJCejYR7lw" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Billetterie
          </Link>
        </div>
      </div>
    </footer>
  );
}