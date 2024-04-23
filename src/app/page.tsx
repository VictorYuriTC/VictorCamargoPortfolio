import PortfolioNavbar from "@/components/atomic/organisms/PortfolioNavbar/PortfolioNavbar";
import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import ContactSection from "@/components/pages/home/ContactSection/ContactSection";
import ExperienceSection from "@/components/pages/home/ExperienceSection/ExperienceSection";
import LandingSection from "@/components/pages/home/LandingSection/LandingSection";
import ResumeSection from "@/components/pages/home/ResumeSection/ResumeSection";
import SkillsSection from "@/components/pages/home/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />

      <main className="px-8 lg:px-16 xl:px-36">
        <div className="flex flex-col pb-28 lg:pb-10">
          <LandingSection />

          <AboutSection />

          <ExperienceSection />

          <ResumeSection />

          <SkillsSection />

          <ContactSection />
        </div>
      </main>
    </>
  );
}
