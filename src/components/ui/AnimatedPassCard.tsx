// components/ui/AnimatedPassCard.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PassCardProps {
  title: string;
  subtitle: string;
  price: string;
  href: string;
}

export default function AnimatedPassCard({
    title,
    subtitle,
    price,
    href,
  }: PassCardProps) {
    return (
      <motion.div
        className="bg-gray-800 px-6 py-4 rounded-lg text-left shadow-md hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Accéder à la billetterie pour le ${title}`}
        >
          <h3 className="text-2xl font-bold text-white font-anton">{title}</h3>
          <p className="text-base text-white mt-1">{subtitle}</p>
          <p className="text-4xl font-anton mt-2 text-white">{price}</p>
        </Link>
      </motion.div>
    );
  }
  
