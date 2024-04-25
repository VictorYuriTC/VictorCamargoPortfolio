import SkillCard from "../SkillCard";
import SkillsSectionContainer from "../SkillsSectionContainer";

import gitHubIcon from "@/assets/github-tool.svg";
import gitIcon from "@/assets/git-tool.svg";
import androidStudioIcon from "@/assets/android-studio-tool.svg";
import xCodeIcon from "@/assets/xcode-tool.svg";
import GitHubToolSVG from "@/assets/svgs/GitHubToolSVG";

interface IVictorToolsSubSection {
  svgSize: number;
}

export default function VictorToolsSubSection(props: IVictorToolsSubSection) {
  return (
    <SkillsSectionContainer title="Tools">
      <SkillCard
        svgSize={props.svgSize}
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
        svgSize={props.svgSize}
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
        customIconComponent={
          <GitHubToolSVG
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
            src: androidStudioIcon,
            alt: "Android Studio logo",
          },
          name: "Android Studio",
        }}
      />

      <SkillCard
        svgSize={props.svgSize}
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
  );
}
