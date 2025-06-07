'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { Disc3, Ticket, MapPin, Instagram } from 'lucide-react';

const navItems = [
  { name: 'Programmation', href: '/programmation', color: 'bg-red-500', icon: Disc3 },
  { name: 'Billetterie', href: '/billetterie', color: 'bg-green-500', icon: Ticket },
  { name: 'Infos Pratiques', href: '/infos-pratiques', color: 'bg-yellow-500', icon: MapPin },
  { name: 'Instagram', href: 'https://www.instagram.com/maz.festival/', color: 'bg-purple-500', icon: Instagram },
];

export default function Navigation() {
  return (
    <nav className="w-full p-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name} target={item.name === 'Instagram' ? '_blank' : '_self'}>
            <motion.div
              className={`h-64 flex flex-col items-center justify-center text-white text-2xl font-bold uppercase rounded-lg ${item.color}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={48} className="mb-4" />
              {item.name}
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  );
}