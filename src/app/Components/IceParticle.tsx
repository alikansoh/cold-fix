'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Snowflake() {
  const [params, setParams] = useState<{
    fallDuration: number;
    startX: number;
    delay: number;
    size: number;
    opacity: number;
  } | null>(null);

  useEffect(() => {
    // generate random values only on client after mount
    setParams({
      fallDuration: 20 + Math.random() * 10, // slower: 20-30 sec
      startX: Math.random() * 100,
      delay: Math.random() * -30, // negative delay for staggered start
      size: 18 + Math.random() * 12,
      opacity: 0.3 + Math.random() * 0.4,
    });
  }, []);

  // Before client params are ready, render nothing (or a placeholder)
  if (!params) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: '-10vh',
        left: `${params.startX}vw`,
        fontSize: params.size,
        opacity: params.opacity,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 9999,
      }}
      animate={{
        y: ['-10vh', '110vh'],
        x: [0, 5, -5, 3, -3, 0],
        opacity: [params.opacity, params.opacity - 0.1, params.opacity],
        rotate: [0, 360],
      }}
      transition={{
        y: {
          duration: params.fallDuration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
          delay: params.delay,
        },
        x: {
          duration: params.fallDuration * 2,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
          delay: params.delay,
        },
        rotate: {
          duration: params.fallDuration * 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'loop',
          delay: params.delay,
        },
        opacity: {
          duration: params.fallDuration * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
          delay: params.delay,
        },
      }}
      aria-hidden="true"
    >
      ❄️
    </motion.div>
  );
}
