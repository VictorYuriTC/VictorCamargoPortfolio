import PortfolioNavbar from "@/components/atomic/organisms/PortfolioNavbar/PortfolioNavbar";
import SkillsSection from "@/components/pages/home/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <main className="">
      <PortfolioNavbar />

      <div className="flex flex-col items-center">
        <p className="mt-12 text-3xl font-light">Victor Camargo</p>

        <p className="mt-2 text-4xl font-semibold">Frontend Developer</p>

        <SkillsSection />

        <a
          className="rounded-lg py-3 px-5 bg-purple-700"
          href="/victor-camargo-resume.pdf"
          download="victor-camargo-resume">
          Download Resume
        </a>
      </div>
    </main>
  );
}
