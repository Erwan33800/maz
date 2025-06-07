'use client';

import { motion } from 'framer-motion';

const circles = [
  { size: 'w-8 h-8', top: 'top-0', left: 'left-16' },
  { size: 'w-16 h-16', top: 'top-4', left: 'left-8' },
  { size: 'w-12 h-12', top: 'top-16', left: 'left-12' },
  { size: 'w-20 h-20', top: 'top-20', left: 'left-0' },
  { size: 'w-10 h-10', top: 'top-36', left: 'left-10' },
  { size: 'w-14 h-14', top: 'top-40', left: 'left-20' },
];

export default function CircleGraphic() {
  return (
    <div className="relative w-48 h-64">
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className={`absolute bg-white rounded-full ${circle.size} ${circle.top} ${circle.left}`}
          animate={{
            y: [0, -5 + i * 1.5, 0],
            x: [0, 3 - i * 1, 0],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}