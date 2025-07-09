import { motion } from 'framer-motion';

const iceVariants = {
  fall: {
    y: ['-10vh', '110vh'], // start above viewport, fall below
    x: [0, 20, -20, 15, -15, 0], // slight horizontal drift
    rotate: [0, 360],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 8,
        ease: 'linear',
      },
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 8,
        ease: 'easeInOut',
      },
      rotate: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 8,
        ease: 'linear',
      },
    },
  },
};

export function IceParticle({ style }) {
  return (
    <motion.div
      className="ice-particle"
      variants={iceVariants}
      animate="fall"
      style={{
        position: 'absolute',
        top: 0,
        left: `${Math.random() * 100}vw`, // random horizontal start
        width: 20,
        height: 20,
        opacity: 0.8,
        ...style,
      }}
    >
      {/* Simple ice shard - you can replace with a better SVG if you want */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#A0E7E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="5" y1="7" x2="19" y2="7" />
        <line x1="5" y1="17" x2="19" y2="17" />
      </svg>
    </motion.div>
  );
}
