import PortfolioPrimaryButton from "@/components/atomic/atoms/PortfolioPrimaryButton/PortfolioPrimaryButton";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function LandingSection() {
  return (
    <SectionWrapper
      id="#landing-section"
      className="flex flex-col justify-center gap-y-6">
      <p className="font-light text-3xl md:text-5xl">Victor Camargo</p>

      <p className="font-semibold text-5xl md:text-7xl">Frontend Developer</p>

      <div className="flex flex-row mt-6">
        <PortfolioPrimaryButton variant="default" borderRadius="rounded-full">
          <a
            className=""
            href="/victor-camargo-resume.pdf"
            download="victor-camargo-resume">
            Download Resume
          </a>
        </PortfolioPrimaryButton>
      </div>
    </SectionWrapper>
  );
}
