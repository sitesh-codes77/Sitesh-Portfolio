'use client';

import ParticleBackground from '@/components/background/ParticleBackground';

export default function HeroBackground() {
  return (
    <div className="contents" style={{ zIndex: 2 }}>
      {/* Floating Particles */}
      <ParticleBackground />
    </div>
  );
}
