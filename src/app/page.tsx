import PortfolioPrimaryButton from "@/components/atomic/atoms/PortfolioPrimaryButton/PortfolioPrimaryButton";
import PortfolioNavbar from "@/components/atomic/organisms/PortfolioNavbar/PortfolioNavbar";
import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import ContactSection from "@/components/pages/home/ContactSection/ContactSection";
import ExperienceSection from "@/components/pages/home/ExperienceSection/ExperienceSection";
import ResumeSection from "@/components/pages/home/ResumeSection/ResumeSection";
import SectionWrapper from "@/components/pages/home/SectionWrapper/SectionWrapper";
import SkillsSection from "@/components/pages/home/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />

      <main className="px-8 lg:px-16 xl:px-36">
        <div className="flex flex-col pb-28 lg:pb-10">
          <SectionWrapper className="flex flex-col justify-center gap-y-6">
            <p className="font-light text-3xl md:text-5xl">Victor Camargo</p>

            <p className="font-semibold text-5xl md:text-7xl">
              Frontend Developer
            </p>

            <div className="flex flex-row mt-6">
              <PortfolioPrimaryButton borderRadius="rounded-full">
                <a
                  className=""
                  href="/victor-camargo-resume.pdf"
                  download="victor-camargo-resume">
                  Download Resume
                </a>
              </PortfolioPrimaryButton>
            </div>
          </SectionWrapper>

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
