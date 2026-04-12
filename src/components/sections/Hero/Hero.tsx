'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';
import HeroStrips from './HeroStrips';
import StructuredData from '@/components/seo/StructuredData';
import { PERSONAL_INFO, SITE_URL, SOCIAL_LINKS, SEO_KEYWORDS } from '@/lib/constants';
import { useIntroAnimation } from '@/context/IntroAnimationContext';

const NeuralSphere = dynamic(
  () => import('./NeuralSphere'),
  { ssr: false }
);

export default function Hero() {
  const { isIntroComplete } = useIntroAnimation();

  return (
    <>
      <StructuredData />

      <section
        id="hero"
        className="relative overflow-hidden pb-0 rounded-b-[40px] sm:rounded-b-[60px] mb-0"
        style={{ height: '100vh' }}
        aria-label={`${PERSONAL_INFO.name} - Full Stack & AI Developer Portfolio`}
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* ─── Primary Schema.org Person Microdata ─── */}
        <meta itemProp="name" content={PERSONAL_INFO.name} />
        <meta itemProp="givenName" content="Sitesh" />
        <meta itemProp="familyName" content="Bhagwat" />
        <meta itemProp="jobTitle" content="Full Stack & AI Developer" />
        <meta itemProp="description" content={`${PERSONAL_INFO.name} is a Full Stack & AI Developer specializing in React, Next.js, TypeScript, Node.js, Python, and AI-powered product engineering. Featured projects include WebCraft and Safecoast.`} />
        <meta itemProp="url" content={SITE_URL} />
        <meta itemProp="email" content={PERSONAL_INFO.email} />
        <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
        <meta itemProp="image" content={`${SITE_URL}${PERSONAL_INFO.image}`} />
        <meta itemProp="knowsAbout" content="Full Stack Development, AI Engineering, React, Next.js, TypeScript, Node.js, Python, Machine Learning, Web Development, SaaS Development" />
        <meta itemProp="hasOccupation" content="Full Stack Developer" />

        {/* Social Links for Schema */}
        {SOCIAL_LINKS.map((link) => (
          <link key={link.name} itemProp="sameAs" href={link.url} />
        ))}

        {/* Address Schema */}
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
          <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
          <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
          <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
        </div>

        {/* ─── Hidden SEO Content for Search Engines ─── */}
        <div className="sr-only">
          <h1>Sitesh Prusty - Full Stack & AI Developer</h1>

          <h2>About Sitesh Prusty</h2>
          <p>
            Sitesh Prusty is a highly skilled Full Stack & AI Developer based in {PERSONAL_INFO.location.city}, {PERSONAL_INFO.location.state}, {PERSONAL_INFO.location.country}.
            With expertise in modern web technologies, Sitesh Prusty specializes in building scalable, high-performance web applications and AI-powered platforms.
          </p>

          <h2>Sitesh Prusty - Professional Skills</h2>
          <p>
            As a Full Stack Developer, Sitesh Prusty is proficient in:
          </p>
          <ul>
            <li>Frontend Development: React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS</li>
            <li>Backend Development: Node.js, Express.js, Python, FastAPI, REST APIs, GraphQL</li>
            <li>Database Technologies: MongoDB, PostgreSQL, MySQL, Redis, Prisma ORM</li>
            <li>AI & Machine Learning: TensorFlow, OpenAI, LangChain, AI Integration, ML APIs</li>
            <li>Cloud & DevOps: AWS, Google Cloud, Docker, Kubernetes, CI/CD, Vercel</li>
            <li>SaaS and AI Product Development: scalable architecture, performance optimization, and intelligent features</li>
          </ul>

          <h2>Featured Projects by Sitesh Prusty</h2>
          <ul>
            <li>WebCraft - Modern website solution designed for business growth and technical SEO readiness</li>
            <li>Safecoast - Coastal hazard intelligence platform focused on monitoring and risk awareness</li>
          </ul>

          <h2>Sitesh Prusty - Services</h2>
          <p>
            Sitesh Prusty offers professional services including:
          </p>
          <ul>
            <li>Full Stack Web Development by Sitesh Prusty</li>
            <li>AI-Powered Application Development by Sitesh Prusty</li>
            <li>SaaS Platform Development by Sitesh Prusty</li>
            <li>React & Next.js Development by Sitesh Prusty</li>
            <li>Custom Web Application Development by Sitesh Prusty</li>
            <li>API Development & Integration by Sitesh Prusty</li>
            <li>E-commerce Solutions by Sitesh Prusty</li>
            <li>Performance Optimization by Sitesh Prusty</li>
          </ul>

          <h2>Why Choose Sitesh Prusty?</h2>
          <p>
            Sitesh Prusty combines technical expertise with creative problem-solving to deliver exceptional digital solutions.
            Whether you need a Full Stack Developer for your startup, an AI Engineer to integrate machine learning capabilities,
            or a Web Developer to build your next big project, Sitesh Prusty has the skills and experience to bring your vision to life.
          </p>

          <h2>Contact Sitesh Prusty</h2>
          <p>
            Looking to hire a Full Stack Developer? Contact Sitesh Prusty at {PERSONAL_INFO.email} or {PERSONAL_INFO.phone}.
            Sitesh Prusty is available for freelance projects, full-time opportunities, and consulting work.
          </p>

          <h3>Keywords</h3>
          <p>{SEO_KEYWORDS.join(', ')}, Sitesh Prusty Portfolio, Sitesh Prusty Developer, Sitesh Prusty Full Stack,
          Sitesh Prusty AI Developer, Sitesh Prusty React Developer, Sitesh Prusty Next.js Expert,
          Hire Sitesh Prusty, Sitesh Prusty Web Developer, Sitesh Prusty Software Engineer,
          Best Full Stack Developer India, Top React Developer Maharashtra, AI Developer Yeola,
          Sitesh Prusty TypeScript, Sitesh Prusty Node.js, Sitesh Prusty Python Developer, WebCraft, Safecoast</p>
        </div>

        {/* ─── WebSite Schema for Search Appearance ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sitesh Prusty - Full Stack & AI Developer Portfolio",
              "alternateName": ["Sitesh Prusty", "Sitesh Prusty Developer", "Sitesh Prusty Portfolio"],
              "url": SITE_URL,
              "description": "Official portfolio of Sitesh Prusty, a Full Stack & AI Developer specializing in React, Next.js, TypeScript, and AI-powered web applications.",
              "author": {
                "@type": "Person",
                "name": "Sitesh Prusty",
                "jobTitle": "Full Stack & AI Developer",
                "url": SITE_URL
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${SITE_URL}/?search={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* ─── Professional Service Schema ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sitesh Prusty - Full Stack & AI Development Services",
              "description": "Professional Full Stack Development, AI Engineering, and Web Development services by Sitesh Prusty",
              "provider": {
                "@type": "Person",
                "name": "Sitesh Prusty",
                "jobTitle": "Full Stack & AI Developer"
              },
              "serviceType": ["Full Stack Development", "AI Engineering", "Web Development", "SaaS Development", "React Development", "Next.js Development"],
              "areaServed": "Worldwide",
              "url": SITE_URL
            })
          }}
        />

        <HeroStrips />
        <HeroBackground />

        {/* ── Single centering wrapper for sphere ── */}
        <div 
          className="absolute inset-0 z-[15] flex items-center justify-center"
          style={{ contain: 'layout style' }}
        >
          {/* Sphere — behind content, same center point */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isIntroComplete ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
            style={{ willChange: isIntroComplete ? 'auto' : 'opacity' }}
          >
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px] xl:w-[520px] xl:h-[520px]">
              <NeuralSphere />
            </div>
          </motion.div>
        </div>

        {/* Main content — uses SAME absolute inset-0 + flex center */}
        <HeroContent />
      </section>
    </>
  );
}
