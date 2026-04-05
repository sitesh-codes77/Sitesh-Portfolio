'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import AboutHeader from './AboutHeader';
import ProfileCard from './ProfileCard';
import StatsGrid from './StatsGrid';
import TimelineStrip from './TimelineStrip';
import MarqueeBanner from './MarqueeBanner';
import ExpertiseShowcase from './ExpertiseShowcase';
import InfoCards from './InfoCards';
import GlowCard, { GlowCardGroup } from '@/components/ui/GlowCard';
import { PERSONAL_INFO } from '@/lib/constants';

export default function About() {

  return (
    <section 
      id="about" 
      className="relative pt-24 sm:pt-32 md:pt-40 pb-12 px-4 sm:px-6 bg-[#0F0E0E] overflow-x-clip"
      aria-label="About Sitesh Prusty - Full Stack & AI Developer"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* SEO Microdata - Enhanced */}
      <meta itemProp="name" content={PERSONAL_INFO.name} />
      <meta itemProp="jobTitle" content={PERSONAL_INFO.jobTitle} />
      <meta itemProp="description" content={PERSONAL_INFO.bio} />
      <meta itemProp="url" content="https://siteshprusty.dev" />
      <meta itemProp="email" content={PERSONAL_INFO.email} />
      <meta itemProp="telephone" content={PERSONAL_INFO.phone} />
      <meta itemProp="image" content={`https://siteshprusty.dev${PERSONAL_INFO.image}`} />
      
      {/* Address Schema */}
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="hidden">
        <meta itemProp="addressLocality" content={PERSONAL_INFO.location.city} />
        <meta itemProp="addressRegion" content={PERSONAL_INFO.location.state} />
        <meta itemProp="addressCountry" content={PERSONAL_INFO.location.countryCode} />
      </div>
      
      {/* Skills & Expertise */}
      <meta itemProp="knowsAbout" content="React" />
      <meta itemProp="knowsAbout" content="Next.js" />
      <meta itemProp="knowsAbout" content="TypeScript" />
      <meta itemProp="knowsAbout" content="JavaScript" />
      <meta itemProp="knowsAbout" content="Node.js" />
      <meta itemProp="knowsAbout" content="Full Stack Development" />
      <meta itemProp="knowsAbout" content="Web Development" />
      <meta itemProp="knowsAbout" content="MERN Stack" />
      <meta itemProp="knowsAbout" content="RESTful API" />
      <meta itemProp="knowsAbout" content="Database Design" />
      
      {/* Occupation Schema */}
      <div itemProp="hasOccupation" itemScope itemType="https://schema.org/Occupation" className="hidden">
        <meta itemProp="name" content="Full Stack Developer & Software Engineer" />
        <meta itemProp="occupationLocation" content="Daspalla, Nayagarh, Odisha, India" />
        <meta itemProp="skills" content="MERN Stack, Java DSA, Django, Flask, Node.js, MongoDB, Docker" />
        <meta itemProp="experienceRequirements" content="B.Tech 2nd Year (Sophomore)" />
      </div>
      
      {/* Educational Background */}
      <div itemProp="alumniOf" itemScope itemType="https://schema.org/EducationalOrganization" className="hidden">
        <meta itemProp="name" content="Computer Science" />
      </div>

      {/* Extended horizon glow from Hero - fading upward */}
      <div className="absolute top-0 left-0 w-full h-48 sm:h-64 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(255, 80, 30, 0.08) 0%, rgba(220, 60, 20, 0.04) 30%, rgba(180, 40, 15, 0.02) 60%, transparent 100%)',
            filter: 'blur(60px)',
            willChange: 'auto',
          }}
        />
      </div>

      {/* Subtle ambient glows */}
      <div 
        className="absolute top-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ willChange: 'auto' }}
      />
      <div 
        className="absolute bottom-1/4 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-primary/3 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ willChange: 'auto' }}
      />

      <Container>
        {/* Header */}
        <AboutHeader />

        {/* Hidden SEO Content */}
          <div className="sr-only">
            <h2>About Sitesh Prusty - Full Stack Developer & Software Engineer</h2>
            <p>
              Sitesh Prusty is a B.Tech Computer Science student in his 2nd year (4th semester) based in Daspalla, Nayagarh, Odisha, India. 
              Aiming to become an elite Full Stack Developer and Software Engineer, Sitesh is proficient in the MERN Stack (MongoDB, Express.js, React, Node.js), 
              Java for Data Structures and Algorithms (DSA), and Python with Django and Flask.
              Selected for the Cisco-backed 'thingqbator' incubation program, Sitesh is a key contributor to the startup and innovation ecosystem. 
              His featured projects include RoamReserve (an Airbnb clone) and Civil Intel (selected for Innovation Mela).
            </p>
            <h3>Sitesh Prusty - Core Skills and Expertise</h3>
            <ul>
              <li>Full Stack Development with MERN Stack (MongoDB, Express.js, React, Node.js)</li>
              <li>Backend frameworks: Django, Flask, Express.js</li>
              <li>Data Structures & Algorithms: Java focus for top-tier problem solving</li>
              <li>DevOps & Tools: Docker, CI/CD, Git, GitHub</li>
              <li>Frontend Development: React, JavaScript, Tailwind CSS, HTML5, CSS3</li>
              <li>Databases: MongoDB, SQL</li>
              <li>Product Architecture & System Design</li>
            </ul>
            <h3>Sitesh Prusty - Achievements and Journey</h3>
            <p>
              Sitesh Prusty is self-driven and disciplined, prioritizing real-world value over certificates. 
              Selected for the thingqbator incubation program at his college. 
              Developed RoamReserve, a full-scale Airbnb clone. 
              Launched Civil Intel, a startup project selected for the college Innovation Mela. 
              Transitioned from an Odia medium background to a global professional standard by building his portfolio and communication in English.
            </p>
            <h3>Education and Vision</h3>
            <p>
              Currently pursuing B.Tech in Computer Science (2nd year). 
              Actively learning DevOps (Docker/CI-CD) and exploring Blockchain and AI integration. 
              Ultimate motivation: providing a better life for parents through career excellence and technical innovation.
            </p>
            <h3>Contact Sitesh Prusty</h3>
            <address>
              <p>Location: Daspalla, Nayagarh, Odisha, India</p>
              <p>Email: siteshprusty@gmail.com</p>
              <p>Phone: +91 933764XXXX (to be added)</p>
              <p>Sitesh Prusty is building for the AI era and open to high-level technical challenges.</p>
            </address>
          </div>

          {/* Main Content Grid */}
          <GlowCardGroup className="max-w-7xl mx-auto">
            {/* Two-column layout: Profile Card | Right Content */}
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
              {/* Left Side - Contained Profile Card */}
              <div className="flex justify-center lg:justify-start">
                <ProfileCard />
              </div>

              {/* Right Side - Stats + Description + Info Cards */}
              <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8">
                {/* Stats Row */}
                <StatsGrid />

                {/* Description Block */}
                <GlowCard
                  className="bg-[#141414] border border-white/[0.06] rounded-xl xs:rounded-2xl sm:rounded-3xl"
                  glowColor="rgba(255, 100, 200, 0.6)"
                  glowSize={250}
                >
                  <motion.div
                    className="relative p-4 xs:p-5 sm:p-6 md:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Accent bar */}
                    <div className="absolute top-4 xs:top-5 sm:top-6 md:top-8 left-0 w-1 h-10 xs:h-12 sm:h-14 md:h-16 bg-gradient-to-b from-orange-500 to-pink-500 rounded-r-full" />
                    <div className="pl-3 xs:pl-4 sm:pl-5 space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-4">
                      <p
                        className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.5] xs:leading-[1.6] sm:leading-[1.7] font-normal text-white/90"
                        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
                      >
                        Sitesh Prusty build high-performance web applications with clean architecture and real-world value.
                      </p>
                      <p
                        className="text-xs xs:text-sm sm:text-base md:text-lg leading-[1.5] xs:leading-[1.6] sm:leading-[1.7] font-normal text-white/50"
                        style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
                      >
                        Specializing in the MERN stack, Java DSA, and DevOps, I blend technical discipline with innovative startup thinking.
                      </p>
                    </div>
                  </motion.div>
                </GlowCard>

                {/* Info Cards - Visitor + Contact */}
                <InfoCards />
              </div>
            </div>
          </GlowCardGroup>
      </Container>

      {/* Expertise Showcase — Split Screen Interactive */}
      <ExpertiseShowcase />

      {/* Marquee Banner — above timeline */}
      <MarqueeBanner />

      <Container>
          <div className="max-w-7xl mx-auto pt-8 sm:pt-12">
            {/* Timeline Strip */}
            <div className="mb-12 sm:mb-16">
              <TimelineStrip />
            </div>
          </div>
      </Container>
    </section>
  );
}
