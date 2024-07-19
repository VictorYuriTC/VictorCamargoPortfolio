import SkillCard from "../SkillCard";
import SkillsSectionContainer from "../SkillsSectionContainer";

import javaScriptIcon from "@/assets/javascript-language.svg";
import typeScriptIcon from "@/assets/typescript-language.svg";
import dartIcon from "@/assets/dart-language.svg";
import pythonIcon from "@/assets/python-language.svg";
import microPythonIcon from "@/assets/micropython-language.svg";
import javaIcon from "@/assets/java-language.svg";
import MicroPythonLanguageSVG from "@/assets/svgs/MicroPythonLanguageSVG";

interface IVictorProgrammingLanguagesSubSection {
  svgSize: number;
}

export default function VictorProgrammingLanguagesSubSection(
  props: IVictorProgrammingLanguagesSubSection
) {
  return (
    <SkillsSectionContainer title="Programming Languages">
      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          name: "JavaScript",
          iconData: {
            src: javaScriptIcon,
            alt: "JavaScript language logo",
          },
        }}
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          name: "TypeScript",
          iconData: {
            src: typeScriptIcon,
            alt: "TypeScript language logo",
          },
        }}
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          name: "Dart",
          iconData: {
            src: dartIcon,
            alt: "Dart language logo",
          },
        }}
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          name: "Python",
          iconData: {
            src: pythonIcon,
            alt: "Python language logo",
          },
        }}
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          name: "Java",
          iconData: {
            src: javaIcon,
            alt: "Java language logo",
          },
        }}
      />
    </SkillsSectionContainer>
  );
}
