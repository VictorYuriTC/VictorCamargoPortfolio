import SkillCard from "./SkillCard";
import SkillsSectionContainer from "./SkillsSectionContainer";

import gitHubIcon from "@/assets/github-tool.svg";
import gitIcon from "@/assets/git-tool.svg";
import androidStudioIcon from "@/assets/android-studio-tool.svg";
import xCodeIcon from "@/assets/xcode-tool.svg";
import GitHubToolSVG from "@/assets/svgs/GitHubToolSVG";

export default function VictorToolsSubSection() {
  return (
    <SkillsSectionContainer title="Tools">
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
        customIconComponent={
          <GitHubToolSVG
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
  );
}
