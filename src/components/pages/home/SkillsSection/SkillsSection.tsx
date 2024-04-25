import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import AllVictorSkillsSubSections from "./AllVictorSkillsSubSections/AllVictorSkillsSubSections";

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills-section">
      <SectionTitle hasDefaultMarginTop hasDefaultMarginBottom>
        Skills
      </SectionTitle>

      <AllVictorSkillsSubSections />
    </SectionWrapper>
  );
}
