import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { allVictorExperiences } from "./allVictorExperiences";

export default function ExperienceSection() {
  return (
    <SectionWrapper>
      <SectionTitle hasDefaultMarginTop hasDefaultMarginBottom>
        Experience
      </SectionTitle>

      <div className="flex flex-col gap-y-8">
        {allVictorExperiences.toReversed().map((victorExperience) => (
          <ExperienceCard
            key={victorExperience.id}
            experience={victorExperience}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
