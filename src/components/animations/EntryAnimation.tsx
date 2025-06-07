'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function EntryAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  // This effect will handle the disappearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Also hide after 5 seconds automatically
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-row items-center justify-center gap-16 bg-[#1a73e8]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.h1
            className="text-9xl font-anton text-white"
            variants={childVariants}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            MAZ
          </motion.h1>
          <motion.div
            variants={childVariants}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          >
            <Image
              src="/assets/plongeur.png"
              alt="Silhouette d'un plongeur"
              width={200}
              height={200}
              className="invert"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}