import NextFrameworkSVG from "@/assets/svgs/NextFrameworkSVG";
import SkillCard from "../SkillCard";
import SkillsSectionContainer from "../SkillsSectionContainer";

import flutterIcon from "@/assets/flutter-framework.svg";
import reactIcon from "@/assets/react-framework.svg";
import nextIcon from "@/assets/next-framework.svg";

interface IVictorFrameworkSubSection {
  svgSize: number;
}

export default function VictorFrameworkSubSection(
  props: IVictorFrameworkSubSection
) {
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
            alt: "React.js framework logo",
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
            alt: "React Native framework logo",
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
            alt: "Next.js framework logo",
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
            alt: "Flutter framework logo",
          },
          name: "Flutter",
        }}
      />
    </SkillsSectionContainer>
  );
}
