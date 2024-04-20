import SkillCard from "./SkillCard";

import javaScriptIcon from "@/assets/javascript-language.svg";
import typeScriptIcon from "@/assets/typescript-language.svg";
import dartIcon from "@/assets/dart-language.svg";
import pythonIcon from "@/assets/python-language.svg";

import flutterIcon from "@/assets/flutter-framework.svg";
import reactIcon from "@/assets/react-framework.svg";

import gitHubIcon from "@/assets/github-tool.svg";
import gitIcon from "@/assets/git-tool.svg";
import androidStudioIcon from "@/assets/android-studio-tool.svg";
import xCodeIcon from "@/assets/xcode-tool.svg";

import SkillsSectionContainer from "./SkillsSectionContainer";

export default function SkillsSection() {
  return (
    <div className="flex flex-col">
      <SkillsSectionContainer
        divWrapper={{
          className: "mt-12",
        }}
        title="Programming Languages">
        <SkillCard
          skill={{
            name: "JavaScript",
            iconData: {
              src: javaScriptIcon,
              alt: "JavaScript language logo",
            },
          }}
        />

        <SkillCard
          skill={{
            name: "TypeScript",
            iconData: {
              src: typeScriptIcon,
              alt: "TypeScript language logo",
            },
          }}
        />

        <SkillCard
          skill={{
            name: "Dart",
            iconData: {
              src: dartIcon,
              alt: "Dart language logo",
            },
          }}
        />

        <SkillCard
          skill={{
            name: "Python",
            iconData: {
              src: pythonIcon,
              alt: "Python language logo",
            },
          }}
        />
      </SkillsSectionContainer>

      <SkillsSectionContainer
        divWrapper={{
          className: "mt-12",
        }}
        title="Frameworks">
        <SkillCard
          skill={{
            iconData: {
              src: reactIcon,
              alt: "React framework logo",
            },
            name: "React",
          }}
        />

        <SkillCard
          skill={{
            iconData: {
              src: dartIcon,
              alt: "React Native framework logo",
            },
            name: "React Native",
          }}
        />

        <SkillCard
          skill={{
            iconData: {
              src: flutterIcon,
              alt: "Flutter framework logo",
            },
            name: "Flutter",
          }}
        />
      </SkillsSectionContainer>

      <SkillsSectionContainer
        divWrapper={{
          className: "mt-12",
        }}
        title="Frameworks">
        <SkillCard
          skill={{
            iconData: {
              src: gitHubIcon,
              alt: "GitHub logo",
            },
            name: "GitHub",
          }}
        />

        <SkillCard
          skill={{
            iconData: {
              src: gitIcon,
              alt: "Git logo",
            },
            name: "Git",
          }}
        />

        <SkillCard
          skill={{
            iconData: {
              src: androidStudioIcon,
              alt: "Android Studio logo",
            },
            name: "Android Studio",
          }}
        />

        <SkillCard
          skill={{
            iconData: {
              src: xCodeIcon,
              alt: "XCode logo",
            },
            name: "XCode",
          }}
        />
      </SkillsSectionContainer>
    </div>
  );
}
