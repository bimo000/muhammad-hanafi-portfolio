import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Sidebar } from "@/components/layout/sidebar";
import AboutSkills from "@/components/sections/about-skills";
import { ExperienceContact } from "@/components/sections/experience-contact";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Reveal } from "@/components/motion/reveal";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { DesignMarquee } from "@/components/sections/design-marquee";
import { CreativeCursor } from "@/components/motion/creative-cursor";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <ScrollProgress />

      <Sidebar />
      <MobileNav />

      <main className="pt-[72px] lg:pl-[190px] lg:pt-0">
        <Hero />

        <div className="space-y-6 p-4 sm:p-6 lg:p-8">
          <Reveal>
            <AboutSkills />
          </Reveal>

          <Reveal delay={0.08}>
            <FeaturedWork />
          </Reveal>

          <Reveal delay={0.1}>
            <ExperienceContact />
          </Reveal>
        </div>

        <Reveal>
          <Footer />
        </Reveal>
      </main>
    </div>
  );
}
