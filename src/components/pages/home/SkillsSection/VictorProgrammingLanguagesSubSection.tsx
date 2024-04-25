import SkillCard from "./SkillCard";
import SkillsSectionContainer from "./SkillsSectionContainer";

import javaScriptIcon from "@/assets/javascript-language.svg";
import typeScriptIcon from "@/assets/typescript-language.svg";
import dartIcon from "@/assets/dart-language.svg";
import pythonIcon from "@/assets/python-language.svg";
import microPythonIcon from "@/assets/micropython-language.svg";
import javaIcon from "@/assets/java-language.svg";
import MicroPythonLanguageSVG from "@/assets/svgs/MicroPythonLanguageSVG";

export default function VictorProgrammingLanguagesSubSection() {
  return (
    <SkillsSectionContainer title="Programming Languages">
      <SkillCard
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
        link={{
          href: "",
        }}
        skill={{
          name: "MicroPython",
          iconData: {
            src: microPythonIcon,
            alt: "MicroPython language logo",
          },
        }}
        customIconComponent={
          <div className="">
            <MicroPythonLanguageSVG
              width={40}
              height={40}
              className="fill-black dark:fill-white"
            />
          </div>
        }
      />

      <SkillCard
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
