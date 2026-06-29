import NextFrameworkSVG from "@/assets/svgs/NextFrameworkSVG";
import SkillCard from "../SkillCard";
import SkillsSectionContainer from "../SkillsSectionContainer";
import flutterIcon from "@/assets/flutter-framework.svg";
import reactIcon from "@/assets/react-framework.svg";
import nextIcon from "@/assets/next-framework.svg";
import vueIcon from "@/assets/svgs/VueSVG";
import DjangoSVG from "@/assets/svgs/DjangoSVG";
import { VictorSkillNameType } from "../../../../atomic/organisms/ExperienceCard/ExperienceSkillTag";
import JestSVG from "@/assets/svgs/JestSVG";
import AngularSVG from "@/assets/svgs/AngularSVG";
import MySQLSVG from "@/assets/svgs/MySQLSVG";
import SQLSVG from "@/assets/svgs/SQLSVG";
import PostgreSQL from "@/assets/svgs/PostgreSQL";
import VueSVG from "@/assets/svgs/VueSVG";
import { VictorFrameworksAndDatabaseEnum } from "@/typing/enums/VictorFrameworksAndDatabaseEnum/VictorFrameworksAndDatabaseEnum";
import QuasarSVG from "@/assets/svgs/QuasarSVG";

interface IVictorFrameworksAndDatabaseSubSection {
  svgSize: number;
}

export default function VictorFrameworksAndDatabaseSubSection(
  props: IVictorFrameworksAndDatabaseSubSection,
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
            alt: getAltText(VictorFrameworksAndDatabaseEnum.React),
          },
          name: VictorFrameworksAndDatabaseEnum.React,
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
            alt: getAltText(VictorFrameworksAndDatabaseEnum.Vue),
          },
          name: VictorFrameworksAndDatabaseEnum.Vue,
        }}
        customIconComponent={
          <VueSVG
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
            src: reactIcon,
            alt: getAltText(VictorFrameworksAndDatabaseEnum.ReactNative),
          },
          name: VictorFrameworksAndDatabaseEnum.ReactNative,
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
            alt: getAltText(VictorFrameworksAndDatabaseEnum.Quasar),
          },
          name: VictorFrameworksAndDatabaseEnum.Quasar,
        }}
        customIconComponent={
          <QuasarSVG
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
            src: nextIcon,
            alt: getAltText(VictorFrameworksAndDatabaseEnum.Next),
          },
          name: VictorFrameworksAndDatabaseEnum.Next,
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
            alt: getAltText(VictorFrameworksAndDatabaseEnum.Flutter),
          },
          name: VictorFrameworksAndDatabaseEnum.Flutter,
        }}
      />

      {false && (
        <SkillCard
          svgSize={props.svgSize}
          link={{
            href: "",
          }}
          skill={{
            iconData: {
              src: "",
              alt: getAltText(VictorFrameworksAndDatabaseEnum.Angular),
            },
            name: VictorFrameworksAndDatabaseEnum.Angular,
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
      )}

      <SkillCard
        svgSize={props.svgSize}
        link={{
          href: "",
        }}
        skill={{
          iconData: {
            src: "",
            alt: getAltText(VictorFrameworksAndDatabaseEnum.Django),
          },
          name: VictorFrameworksAndDatabaseEnum.Django,
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
            alt: getAltText(VictorFrameworksAndDatabaseEnum.Jest),
          },
          name: VictorFrameworksAndDatabaseEnum.Jest,
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
            alt: getAltText(VictorFrameworksAndDatabaseEnum.SQL),
          },
          name: VictorFrameworksAndDatabaseEnum.SQL,
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
            alt: getAltText(VictorFrameworksAndDatabaseEnum.PostgreSQL),
          },
          name: VictorFrameworksAndDatabaseEnum.PostgreSQL,
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
            alt: getAltText(VictorFrameworksAndDatabaseEnum.MySQL),
          },
          name: VictorFrameworksAndDatabaseEnum.MySQL,
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
