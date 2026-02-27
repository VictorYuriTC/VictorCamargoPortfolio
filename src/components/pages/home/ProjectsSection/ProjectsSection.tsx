import ExperienceCard from "@/components/atomic/organisms/ExperienceCard/ExperienceCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { allVictorProjects } from "./allVictorProjects";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="experience-section">
      <SectionTitle hasDefaultMarginTop hasDefaultMarginBottom>
        Personal Projects
      </SectionTitle>

      <div className="flex flex-col gap-y-8">
        {allVictorProjects
          ?.slice()
          ?.reverse()
          ?.map((victorExperience) => (
            <ExperienceCard
              key={victorExperience.id}
              experience={victorExperience}
            />
          ))}
      </div>
    </SectionWrapper>
  );
}
