'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

const STRIP_COUNT = 7;
const STRIP_DURATION = 0.85;
const STRIP_STAGGER = 0.12;

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

      {/* 7 seamless vertical strips */}
      <div
        className="absolute inset-0 z-[10] flex rounded-b-[40px] sm:rounded-b-[60px] overflow-hidden"
        style={{ gap: '0px' }}
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
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ transformOrigin: 'bottom center' }}
          >
            {/* Heading text — positioned full-viewport-width, clipped by strip overflow */}
            <div
              className="absolute top-0 h-full pointer-events-none select-none"
              style={{
                width: '100vw',
                left: `calc(-${i} * 100vw / ${STRIP_COUNT})`,
              }}
            >
              <div className="h-full">
                <div
                  className="text-center w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40 md:pt-48"
                >
                  {/* Available for Work badge */}
                  <div className="flex justify-center mb-4 sm:mb-5">
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
                  </div>
                  <div
                    className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[0.95] sm:leading-[0.95] md:leading-[0.95] text-white text-center"
                    style={{
                      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 900,
                      letterSpacing: '-0.03em',
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
                  </div>
                  <div
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.01em] leading-[1.1] mt-2 sm:mt-3 text-white/80"
                    style={{
                      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    Full Stack &amp; AI Developer
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Heading overlay — sits above strips so text isn't fragmented */}
      <motion.div
        className="absolute inset-0 z-[15] pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroComplete ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      >

      {/* Gradient transition to About — hidden during intro so no black shadow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#0F0E0E] pointer-events-none z-[3] rounded-b-[40px] sm:rounded-b-[60px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isIntroComplete ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        aria-hidden="true"
      />
        <div
          className="text-center w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40 md:pt-48"
        >
          {/* Available for Work badge */}
          <div className="flex justify-center mb-4 sm:mb-5">
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
          </div>
          <div
            className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[0.95] sm:leading-[0.95] md:leading-[0.95] text-white text-center"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.03em',
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
          </div>
          <div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.01em] leading-[1.1] mt-2 sm:mt-3 text-white/80"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
            }}
          >
            Full Stack &amp; AI Developer
          </div>
        </div>
      </motion.div>
    </>
  );
}
