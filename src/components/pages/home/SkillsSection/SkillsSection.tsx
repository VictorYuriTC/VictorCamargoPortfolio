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
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

export default function SkillsSection() {
  return (
    <SectionWrapper className="mt-16 lg:mt-4 xl:mt-0">
      <SectionTitle>Skills</SectionTitle>

      <SkillsSectionContainer
        divWrapper={{
          className: "mt-12",
        }}
        title="Programming Languages">
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
      </SkillsSectionContainer>

      <SkillsSectionContainer
        divWrapper={{
          className: "mt-12",
        }}
        title="Frameworks">
        <SkillCard
          link={{
            href: "",
          }}
          skill={{
            iconData: {
              src: reactIcon,
              alt: "React framework logo",
            },
            name: "React",
          }}
        />

        <SkillCard
          link={{
            href: "",
          }}
          skill={{
            iconData: {
              src: dartIcon,
              alt: "React Native framework logo",
            },
            name: "React Native",
          }}
        />

        <SkillCard
          link={{
            href: "",
          }}
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
        title="Tools">
        <SkillCard
          link={{
            href: "",
          }}
          skill={{
            iconData: {
              src: gitIcon,
              alt: "Git logo",
            },
            name: "Git",
          }}
        />

        <SkillCard
          link={{
            href: "",
          }}
          skill={{
            iconData: {
              src: gitHubIcon,
              alt: "GitHub logo",
            },
            name: "GitHub",
          }}
        />

        <SkillCard
          link={{
            href: "",
          }}
          skill={{
            iconData: {
              src: androidStudioIcon,
              alt: "Android Studio logo",
            },
            name: "Android Studio",
          }}
        />

        <SkillCard
          link={{
            href: "",
          }}
          skill={{
            iconData: {
              src: xCodeIcon,
              alt: "XCode logo",
            },
            name: "XCode",
          }}
        />
      </SkillsSectionContainer>
    </SectionWrapper>
  );
}
