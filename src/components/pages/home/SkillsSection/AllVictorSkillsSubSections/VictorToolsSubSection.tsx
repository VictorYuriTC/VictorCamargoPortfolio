import SkillCard from "../SkillCard";
import SkillsSectionContainer from "../SkillsSectionContainer";

import gitHubIcon from "@/assets/github-tool.svg";
import gitIcon from "@/assets/git-tool.svg";
import androidStudioIcon from "@/assets/android-studio-tool.svg";
import xCodeIcon from "@/assets/xcode-tool.svg";
import GitHubToolSVG from "@/assets/svgs/GitHubToolSVG";
import AWSSVG from "@/assets/svgs/AWSSVG";
import { VictorToolsEnum } from "@/typing/enums/VictorToolsEnum/VictorToolsEnum";
import N8NSVG from "@/assets/svgs/N8NSVG";
import SupabaseSVG from "@/assets/svgs/SupabaseSVG";
import GitLabSVG from "@/assets/svgs/GitLab";

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
            src: "",
            alt: "AWS logo",
          },
          name: VictorToolsEnum.AWS,
        }}
        customIconComponent={
          <AWSSVG width={props.svgSize} height={props.svgSize} />
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
            alt: "N8N logo",
          },
          name: VictorToolsEnum.N8N,
        }}
        customIconComponent={
          <N8NSVG width={props.svgSize} height={props.svgSize} />
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
            alt: "Supabase logo",
          },
          name: VictorToolsEnum.Supabase,
        }}
        customIconComponent={
          <SupabaseSVG width={props.svgSize} height={props.svgSize} />
        }
      />

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
          name: VictorToolsEnum.Git,
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
          name: VictorToolsEnum.GitHub,
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
            src: "",
            alt: "GitLab logo",
          },
          name: VictorToolsEnum.GitLab,
        }}
        customIconComponent={
          <GitLabSVG
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
          name: VictorToolsEnum.AndroidStudio,
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
          name: VictorToolsEnum.XCode,
        }}
      />
    </SkillsSectionContainer>
  );
}
