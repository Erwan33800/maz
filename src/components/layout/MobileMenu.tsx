'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Portal from '../ui/Portal';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Infos Pratiques', href: '/infos-pratiques' },
  { name: 'Billetterie', href: '/billetterie' },
  { name: 'Programmation', href: '/programmation' },
  { name: 'Boutique', href: '/merch' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <>
      {/* Bouton menu sticky en haut à droite de l'écran */}
      {!isOpen && (
        <button
          key="open-button"
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 md:top-8 md:right-8 z-50 text-white"
        >
          <Menu size={40} />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <Portal>
            <motion.div
              key="menu-overlay"
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
                <X size={40} />
              </button>
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-4xl font-anton text-white uppercase hover:text-yellow-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}
