import NextFrameworkSVG from "@/assets/svgs/NextFrameworkSVG";
import SkillCard from "../SkillCard";
import SkillsSectionContainer from "../SkillsSectionContainer";
import flutterIcon from "@/assets/flutter-framework.svg";
import reactIcon from "@/assets/react-framework.svg";
import nextIcon from "@/assets/next-framework.svg";
import DjangoSVG from "@/assets/svgs/DjangoSVG";
import { VictorSkillNameType } from "../../../../atomic/organisms/ExperienceCard/ExperienceSkillTag";
import JestSVG from "@/assets/svgs/JestSVG";
import AngularSVG from "@/assets/svgs/AngularSVG";
import MySQLSVG from "@/assets/svgs/MySQLSVG";
import SQLSVG from "@/assets/svgs/SQLSVG";
import PostgreSQL from "@/assets/svgs/PostgreSQL";

interface IVictorFrameworksAndDatabaseSubSection {
  svgSize: number;
}

export default function VictorFrameworksAndDatabaseSubSection(
  props: IVictorFrameworksAndDatabaseSubSection
) {
  const getAltText = (frameworkName: VictorSkillNameType) => {
    return `${frameworkName} framework logo`;
  };

  return (
    <SkillsSectionContainer title="Frameworks & Database">
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

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: "",
            alt: getAltText("SQL"),
          },
          name: "SQL",
        }}
        customIconComponent={
          <SQLSVG
            stroke="stroke-transparent"
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
            alt: getAltText("PostgreSQL"),
          },
          name: "PostgreSQL",
        }}
        customIconComponent={
          <PostgreSQL
            stroke="stroke-transparent"
            width={props.svgSize}
            height={props.svgSize}
            className="fill-white dark:fill-black"
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
            alt: getAltText("MySQL"),
          },
          name: "MySQL",
        }}
        customIconComponent={
          <MySQLSVG
            stroke="stroke-transparent"
            width={props.svgSize}
            height={props.svgSize}
            className="fill-black dark:fill-white"
          />
        }
      />
    </SkillsSectionContainer>
  );
}
