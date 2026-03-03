'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

// Staggered reveal variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroContent() {
  const { isIntroComplete } = useIntroAnimation();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <Container className="relative z-20 px-4 sm:px-6">
      <div className="pt-28 sm:pt-40 md:pt-48 pb-16 sm:pb-28 md:pb-32 text-center">
        {/* Invisible heading placeholder — reserves exact same space as the visual heading
           rendered inside HeroStrips for the strip-reveal effect. */}
        <div className="invisible px-2 sm:px-4" aria-hidden="true">
          <div className="text-[4rem] sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-[0.15em] leading-[1.0] sm:leading-[1.0] md:leading-[1.0] uppercase" style={{ fontFamily: 'var(--font-bebas-neue), Impact, "Arial Narrow", sans-serif' }}>
            Rameshwar Bhagwat
          </div>
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[0.08em] leading-[1.05] mt-2 sm:mt-3 uppercase" style={{ fontFamily: 'var(--font-bebas-neue), Impact, "Arial Narrow", sans-serif' }}>
            Full Stack &amp; AI Developer
          </div>
        </div>
        <h1 className="sr-only">Rameshwar Bhagwat — Full Stack &amp; AI Developer</h1>

        {/* Content below heading — animates in after strips complete */}
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-5 md:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isIntroComplete ? 'visible' : 'hidden'}
        >

        {/* Description - SEO optimized */}
        <motion.p
          variants={childVariants}
          className="text-xs sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 tracking-wide"
          style={{
            fontFamily: 'var(--font-bebas-neue), Impact, "Arial Narrow", sans-serif',
            fontWeight: 400,
            letterSpacing: '0.05em',
            backgroundImage: 'linear-gradient(to right, #f97316, #ef4444, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Building scalable AI-powered SaaS platforms and web applications.
          Specialized in React, Next.js, TypeScript, and Machine Learning integration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={childVariants} className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4 mt-5 sm:mt-8 px-4 sm:px-0 max-w-md sm:max-w-none mx-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('work')}
            aria-label="View my portfolio work"
            className="w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3"
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            shimmer={true}
            onClick={() => scrollToSection('contact')}
            aria-label="Get in touch with me"
            className="w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3"
          >
            Get In Touch
          </Button>
        </motion.div>
        </motion.div>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h3>Rameshwar Bhagwat Portfolio</h3>
          <p>
            Rameshwar Bhagwat is a Full Stack & AI Developer based in Yeola, Maharashtra, India. 
            Specializing in React, Next.js, TypeScript, and AI-powered web applications. 
            Rameshwar Bhagwat builds scalable SaaS platforms and machine learning systems.
            Available for full-time roles and freelance projects.
          </p>
          <ul>
            <li>Full Stack Development (MERN Stack)</li>
            <li>React & Next.js Expert</li>
            <li>AI & Machine Learning Integration</li>
            <li>TypeScript Development</li>
            <li>Open Source Contributor</li>
            <li>Technical Blog Writer</li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
