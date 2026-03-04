'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ScrollHeading() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the container through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress (0→1) to horizontal translation
  // Full traverse: starts off-screen right, ends off-screen left
  const xRaw = useTransform(scrollYProgress, [0, 1], ['50%', '-100%']);

  // Smooth spring — responsive enough to keep pace with faster scroll range
  const x = useSpring(xRaw, { stiffness: 60, damping: 40, mass: 0.8, restDelta: 0.001 });

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16"
    >
      <motion.h2
        style={{ x, willChange: 'transform' }}
        className="whitespace-nowrap text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-extrabold uppercase tracking-[-0.03em] leading-none select-none"
      >
        <span
          className="text-white/20"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            WebkitTextStroke: '1.5px rgba(255,255,255,0.35)',
          }}
        >
          Featured{' '}
        </span>
        <span
          className="text-rainbow-gradient"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
          }}
        >
          Creative{' '}
        </span>
        <span
          className="text-white/20"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            WebkitTextStroke: '1.5px rgba(255,255,255,0.35)',
          }}
        >
          Projects
        </span>
      </motion.h2>
    </div>
  );
}
