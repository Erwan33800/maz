import Link from 'next/link';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Infos Pratiques', href: '/infos-pratiques' },
  { name: 'Billetterie', href: '/billetterie' },
  { name: 'Programmation', href: '/programmation' },
];

export default function GlobalNav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a73e8] text-white z-40">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        <Link href="/" className="text-3xl font-anton">
          MAZ
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="font-bold hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
        {/* Add a mobile menu button here later if needed */}
      </div>
    </nav>
  );
}