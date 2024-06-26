import NextFrameworkSVG from "@/assets/svgs/NextFrameworkSVG";
import SkillCard from "../SkillCard";
import SkillsSectionContainer from "../SkillsSectionContainer";
import flutterIcon from "@/assets/flutter-framework.svg";
import reactIcon from "@/assets/react-framework.svg";
import nextIcon from "@/assets/next-framework.svg";
import DjangoSVG from "@/assets/svgs/DjangoSVG";
import { VictorSkillNameType } from "../../ExperienceSection/ExperienceCard/ExperienceSkillTag";
import JestSVG from "@/assets/svgs/JestSVG";
import AngularSVG from "@/assets/svgs/AngularSVG";

interface IVictorFrameworkSubSection {
  svgSize: number;
}

export default function VictorFrameworkSubSection(
  props: IVictorFrameworkSubSection
) {
  const getAltText = (frameworkName: VictorSkillNameType) => {
    return `${frameworkName} framework logo`;
  };

  return (
    <SkillsSectionContainer title="Frameworks">
      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: reactIcon,
            alt: getAltText("React"),
          },
          name: "React",
        }}
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: reactIcon,
            alt: getAltText("React Native"),
          },
          name: "React Native",
        }}
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: nextIcon,
            alt: getAltText("Next"),
          },
          name: "Next",
        }}
        customIconComponent={
          <NextFrameworkSVG
            width={props.svgSize}
            height={props.svgSize}
            className="fill-black dark:fill-white"
          />
        }
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: flutterIcon,
            alt: getAltText("Flutter"),
          },
          name: "Flutter",
        }}
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: "",
            alt: getAltText("Angular"),
          },
          name: "Angular",
        }}
        customIconComponent={
          <AngularSVG
            width={props.svgSize}
            height={props.svgSize}
            stroke="transparent"
            fill="transparent"
          />
        }
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: "",
            alt: getAltText("Django"),
          },
          name: "Django",
        }}
        customIconComponent={
          <DjangoSVG
            width={props.svgSize}
            height={props.svgSize}
            className="fill-black dark:fill-white"
          />
        }
      />

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: "",
            alt: getAltText("Jest"),
          },
          name: "Jest",
        }}
        customIconComponent={
          <JestSVG width={props.svgSize} height={props.svgSize} />
        }
      />
    </SkillsSectionContainer>
  );
}
