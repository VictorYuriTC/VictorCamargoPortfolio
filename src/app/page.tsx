import PortfolioPrimaryButton from "@/components/atomic/atoms/PortfolioPrimaryButton/PortfolioPrimaryButton";
import PortfolioNavbar from "@/components/atomic/organisms/PortfolioNavbar/PortfolioNavbar";
import AboutSection from "@/components/pages/home/AboutSection/AboutSection";
import ResumeSection from "@/components/pages/home/ResumeSection/ResumeSection";
import SectionWrapper from "@/components/pages/home/SectionWrapper/SectionWrapper";
import SkillsSection from "@/components/pages/home/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <>
      <PortfolioNavbar />

      <main className="px-8 lg:px-16 xl:px-36">
        <div className="flex flex-col">
          <SectionWrapper className="flex flex-col justify-center gap-y-6">
            <p className="text-5xl font-light">Victor Camargo</p>

            <p className="text-7xl font-semibold">Frontend Developer</p>

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

          <ResumeSection />

          <SkillsSection />
        </div>
      </main>
    </>
  );
}
