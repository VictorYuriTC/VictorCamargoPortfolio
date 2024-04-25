import NextFrameworkSVG from "@/assets/svgs/NextFrameworkSVG";
import SkillCard from "./SkillCard";
import SkillsSectionContainer from "./SkillsSectionContainer";

import flutterIcon from "@/assets/flutter-framework.svg";
import reactIcon from "@/assets/react-framework.svg";
import nextIcon from "@/assets/next-framework.svg";

export default function VictorFrameworkSubSection() {
  return (
    <SkillsSectionContainer title="Frameworks">
      <SkillCard
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
            width={40}
            height={40}
            className="fill-black dark:fill-white"
          />
        }
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
  );
}
