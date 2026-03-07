'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

const STRIP_COUNT = 11;
const STRIP_DURATION = 0.9;
const STRIP_STAGGER = 0.08;

// Center strip animates first, then outward
function getStripDelay(index: number): number {
  const center = Math.floor(STRIP_COUNT / 2);
  return Math.abs(index - center) * STRIP_STAGGER;
}

export default function HeroStrips() {
  const { isIntroComplete, completeIntro } = useIntroAnimation();
  const shouldReduceMotion = useReducedMotion();
  const hasCompleted = useRef(false);

  const maxDelay = getStripDelay(0); // outer strips have max delay
  const totalTime = (maxDelay + STRIP_DURATION) * 1000;

  useEffect(() => {
    if (hasCompleted.current) return;

    if (shouldReduceMotion) {
      completeIntro();
      hasCompleted.current = true;
      return;
    }

    // Lock scroll during strip animation
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      completeIntro();
      hasCompleted.current = true;
    }, totalTime + 200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, [completeIntro, shouldReduceMotion, totalTime]);

  return (
    <>
      {/* Base dark background — always visible behind strips */}
      <div
        className="absolute inset-0 z-0 rounded-b-[40px] sm:rounded-b-[60px] bg-[#0F0E0E]"
        aria-hidden="true"
      />

      {/* Light overlay — clean white backdrop during intro, fades out after */}
      <motion.div
        className="absolute inset-0 z-0 rounded-b-[40px] sm:rounded-b-[60px]"
        initial={{ opacity: 1 }}
        animate={{ opacity: isIntroComplete ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          background: '#ffffff',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* 11 seamless vertical strips - NO TEXT INSIDE, NO GAPS */}
      <div
        className="absolute inset-0 z-[10] flex rounded-b-[40px] sm:rounded-b-[60px] overflow-hidden"
        style={{ gap: '0' }}
        aria-hidden="true"
      >
        {Array.from({ length: STRIP_COUNT }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 relative overflow-hidden bg-[#0F0E0E]"
            initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : STRIP_DURATION,
              delay: shouldReduceMotion ? 0 : getStripDelay(i),
              ease: [0.6, 0, 0.4, 1],
            }}
            style={{ 
              transformOrigin: 'top center',
              willChange: 'transform',
              margin: 0,
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Heading overlay — appears AFTER strips complete with animation */}
      <motion.div
        className="absolute inset-0 z-[15] pointer-events-none select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isIntroComplete ? 1 : 0,
          y: isIntroComplete ? 0 : 20
        }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        aria-hidden="true"
      >
        <div
          className="text-center w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40 md:pt-48"
        >
          {/* Available for Work badge */}
          <motion.div 
            className="flex justify-center mb-4 sm:mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isIntroComplete ? 1 : 0,
              scale: isIntroComplete ? 1 : 0.9
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-transparent">
              <motion.span
                className="text-xs sm:text-sm font-medium"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.4) 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))',
                }}
                animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                Available for Work
              </motion.span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] leading-[1.05] sm:leading-[1.05] md:leading-[1.05] text-white text-center"
            style={{
              fontFamily: 'var(--font-space-grotesk), "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isIntroComplete ? 1 : 0,
              y: isIntroComplete ? 0 : 30
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div>Hi, I&apos;m</div>
            <span
              style={{
                background: 'linear-gradient(135deg, #FF0000 0%, #FF1493 50%, #FF8C00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Rameshwar Bhagwat
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-[0.02em] leading-[1.3] mt-3 sm:mt-4"
            style={{
              fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", -apple-system, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isIntroComplete ? 1 : 0,
              y: isIntroComplete ? 0 : 20
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <motion.span
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.4) 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
              }}
              animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              Full Stack &amp; AI Developer
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient transition to About — hidden during intro so no black shadow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#0F0E0E] pointer-events-none z-[3] rounded-b-[40px] sm:rounded-b-[60px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </>
  );
}
