import VictorFrameworkSubSection from "./VictorFrameworksSubSection";
import VictorMarkupAndStylingSubSection from "./VictorMarkupAndStylingSubSection";
import VictorProgrammingLanguagesSubSection from "./VictorProgrammingLanguagesSubSection";
import VictorToolsSubSection from "./VictorToolsSubSection";

export default function AllVictorSkillsSubSections() {
  const SVG_SIZE = 36;

  return (
    <div className="flex flex-col gap-y-6">
      <VictorProgrammingLanguagesSubSection svgSize={SVG_SIZE} />

      <VictorMarkupAndStylingSubSection svgSize={SVG_SIZE} />

      <VictorFrameworkSubSection svgSize={SVG_SIZE} />

      <VictorToolsSubSection svgSize={SVG_SIZE} />
    </div>
  );
}
