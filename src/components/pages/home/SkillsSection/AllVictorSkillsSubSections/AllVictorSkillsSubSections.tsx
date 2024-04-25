import VictorFrameworkSubSection from "../VictorFrameworksSubSection";
import VictorMarkupAndStylingSubSection from "../VictorMarkupAndStylingSubSection";
import VictorProgrammingLanguagesSubSection from "../VictorProgrammingLanguagesSubSection";
import VictorToolsSubSection from "../VictorToolsSubSection";

export default function AllVictorSkillsSubSections() {
  return (
    <div className="flex flex-col gap-y-12">
      <VictorProgrammingLanguagesSubSection />

      <VictorMarkupAndStylingSubSection />

      <VictorFrameworkSubSection />

      <VictorToolsSubSection />
    </div>
  );
}
