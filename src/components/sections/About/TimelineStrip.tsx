'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase, GraduationCap, Rocket, Award } from 'lucide-react';

const milestones = [
  { 
    year: '2022', 
    title: 'The Curiosity Phase',
    description: 'Started exploring web development. Learned HTML, CSS, and JavaScript fundamentals and built small experimental projects.',
    icon: Code2,
    accent: '#a855f7', // purple
  },
  { 
    year: '2024', 
    title: 'Engineering Foundation',
    description: 'Took admission in B.Tech IT. Transitioned from basics to building structured full-stack applications with modern technologies.',
    icon: GraduationCap,
    accent: '#3b82f6', // blue
  },
  { 
    year: '2025', 
    title: 'Product Builder Mindset',
    description: 'Designed and developed ThinkVerse, a SaaS platform focused on structured idea management with auth, APIs, and analytics.',
    icon: Briefcase,
    accent: '#f97316', // orange
  },
  { 
    year: '2026', 
    title: 'AI-Powered Development',
    description: 'Started building Devory, an AI-driven student project platform. Focused on scalable architecture and intelligent workflows.',
    icon: Award,
    accent: '#ef4444', // red
  },
  { 
    year: '2027', 
    title: 'Scaling Vision',
    description: 'Moving towards advanced AI/ML systems, scalable SaaS infrastructure, and production-grade engineering practices.',
    icon: Rocket,
    accent: '#10b981', // emerald
  },
];

function TimelineCard({ milestone, index, total }: { milestone: typeof milestones[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-5 sm:gap-8 group"
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left: Node + Connector */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Node */}
        <div className="relative z-10">
          {/* Outer glow on hover */}
          <div 
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
            style={{ background: milestone.accent }}
          />
          {/* Node circle */}
          <div 
            className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300"
            style={{ 
              borderColor: `${milestone.accent}40`,
              background: `linear-gradient(135deg, ${milestone.accent}15, ${milestone.accent}08)`,
            }}
          >
            <milestone.icon 
              size={18}
              className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
              style={{ color: milestone.accent }}
              strokeWidth={1.8}
            />
          </div>
          {/* Pulse ring for current year */}
          {milestone.year === '2026' && (
            <motion.span
              className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: milestone.accent }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          )}
        </div>
        {/* Vertical connector */}
        {!isLast && (
          <motion.div
            className="w-[2px] flex-1 min-h-[40px]"
            style={{ 
              background: `linear-gradient(to bottom, ${milestone.accent}50, ${milestones[index + 1].accent}50)` 
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style-origin="top"
          />
        )}
      </div>

      {/* Right: Content Card */}
      <div className="flex-1 pb-8 sm:pb-10">
        <div 
          className="relative bg-[#141414] border border-white/[0.06] rounded-xl sm:rounded-2xl p-4 sm:p-6 group-hover:border-white/[0.1] transition-all duration-300 overflow-hidden"
        >
          {/* Top accent line */}
          <div 
            className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-[1px]"
            style={{ background: `linear-gradient(to right, transparent, ${milestone.accent}30, transparent)` }}
          />

          {/* Year badge + Title row */}
          <div className="flex items-center gap-3 mb-3">
            <span 
              className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wider"
              style={{ 
                background: `${milestone.accent}15`,
                color: milestone.accent,
                border: `1px solid ${milestone.accent}30`,
              }}
            >
              {milestone.year}
            </span>
            <h4 
              className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-white/90 transition-colors leading-tight"
              style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif' }}
            >
              {milestone.title}
            </h4>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
            {milestone.description}
          </p>

          {/* Subtle corner accent */}
          <div 
            className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ background: milestone.accent }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function DesktopTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="hidden lg:block">
      {/* Horizontal line */}
      <div className="relative mb-20">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-[10%] right-[10%] h-[1px]"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)' }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Nodes on the line */}
        <div className="grid grid-cols-5 relative z-10">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Node */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.12, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Outer glow ring */}
                <div 
                  className="absolute -inset-3 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ background: milestone.accent }}
                />
                {/* Outer decorative ring */}
                <div 
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ 
                    border: `1.5px solid ${milestone.accent}40`,
                  }}
                />
                {/* Main circle */}
                <div 
                  className="relative w-20 h-20 xl:w-24 xl:h-24 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                  style={{ 
                    borderColor: `${milestone.accent}40`,
                    background: `linear-gradient(135deg, ${milestone.accent}15, ${milestone.accent}06)`,
                    boxShadow: `0 0 30px ${milestone.accent}12, inset 0 0 20px ${milestone.accent}08`,
                  }}
                >
                  <milestone.icon 
                    size={28}
                    className="xl:w-8 xl:h-8 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: milestone.accent }}
                    strokeWidth={1.5}
                  />
                </div>
                {/* Current year pulse */}
                {milestone.year === '2026' && (
                  <motion.span
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: milestone.accent }}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                )}
                {/* Year label below node */}
                <div 
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-wider whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: milestone.accent }}
                >
                  {milestone.year}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cards below */}
      <div className="grid grid-cols-5 gap-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            className="group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-[#141414] border border-white/[0.06] rounded-2xl p-5 h-full group-hover:border-white/[0.1] transition-all duration-300 overflow-hidden">
              {/* Top accent */}
              <div 
                className="absolute top-0 left-4 right-4 h-[1px]"
                style={{ background: `linear-gradient(to right, transparent, ${milestone.accent}35, transparent)` }}
              />

              {/* Year */}
              <span 
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider mb-3"
                style={{ 
                  background: `${milestone.accent}12`,
                  color: milestone.accent,
                  border: `1px solid ${milestone.accent}25`,
                }}
              >
                {milestone.year}
              </span>

              {/* Title */}
              <h4 
                className="text-sm font-bold text-white mb-2 leading-tight group-hover:text-white/90 transition-colors"
                style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif' }}
              >
                {milestone.title}
              </h4>

              {/* Description */}
              <p className="text-[11px] text-white/40 leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                {milestone.description}
              </p>

              {/* Corner glow */}
              <div 
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ background: milestone.accent }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function TimelineStrip() {
  return (
    <div id="my-journey" className="relative py-12 sm:py-16 md:py-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12 sm:mb-16 md:mb-20"
      >
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-3 sm:mb-4">The Story So Far</p>
        <h3
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-white px-4 uppercase tracking-[-0.02em]"
          style={{
            fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
          }}
        >
          From Code to{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(to right, #a855f7, #3b82f6, #f97316, #ef4444, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Impact
          </span>
        </h3>
        <p 
          className="text-sm sm:text-base md:text-lg text-white/40 max-w-xl mx-auto px-4"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
        >
          Every line of code tells a story. Here&apos;s mine — from curious beginner to building products that matter.
        </p>
      </motion.div>

      {/* Timeline Content */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Desktop: Horizontal */}
        <DesktopTimeline />

        {/* Mobile & Tablet: Vertical Cards */}
        <div className="lg:hidden">
          {milestones.map((milestone, index) => (
            <TimelineCard 
              key={milestone.year} 
              milestone={milestone} 
              index={index} 
              total={milestones.length} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
