'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronLeft } from 'lucide-react';
import Portal from '../ui/Portal';

const mainLinks = [
  { name: 'Accueil', href: '/' },
  { name: '2025', isSubmenu: true },
];

const links2025 = [
  { name: 'Line up', href: '/programmation' },
  { name: 'Infos pratiques', href: '/infos-pratiques' },
  { name: 'Billetterie', href: '/billetterie' },
  { name: 'Boutique', href: '/merch' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [show2025, setShow2025] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const handleClose = () => {
    setIsOpen(false);
    setShow2025(false);
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
              <button onClick={handleClose} className="absolute top-8 right-8 text-white">
                <X size={40} />
              </button>

              <AnimatePresence mode="wait">
                {show2025 ? (
                  <motion.nav
                    key="2025-menu"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-6"
                  >
                    {/* Bouton retour */}
                    <button
                      onClick={() => setShow2025(false)}
                      className="flex items-center gap-2 text-gray-400 hover:text-white mb-4"
                    >
                      <ChevronLeft size={24} />
                      <span className="text-lg font-anton">Retour</span>
                    </button>

                    {/* Titre 2025 */}
                    <h2 className="text-3xl font-anton text-yellow-400 mb-4">Édition 2025</h2>

                    {/* Liens 2025 */}
                    {links2025.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-3xl font-anton text-white uppercase hover:text-yellow-400"
                        onClick={handleClose}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.nav>
                ) : (
                  <motion.nav
                    key="main-menu"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-8"
                  >
                    {mainLinks.map((link) => (
                      link.isSubmenu ? (
                        <button
                          key={link.name}
                          onClick={() => setShow2025(true)}
                          className="text-4xl font-anton text-white uppercase hover:text-yellow-400"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="text-4xl font-anton text-white uppercase hover:text-yellow-400"
                          onClick={handleClose}
                        >
                          {link.name}
                        </Link>
                      )
                    ))}
                  </motion.nav>
                )}
              </AnimatePresence>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}
