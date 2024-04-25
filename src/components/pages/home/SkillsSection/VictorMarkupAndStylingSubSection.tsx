import HtmlSVG from "@/assets/svgs/HtmlSVG";
import SkillCard from "./SkillCard";
import SkillsSectionContainer from "./SkillsSectionContainer";
import CssSVG from "@/assets/svgs/CSSSVG";
import TailwindSVG from "@/assets/svgs/TailwindSVG";
import BootstrapSVG from "@/assets/svgs/BootstrapSVG";
import StyledComponentsSVG from "@/assets/svgs/StyledComponentsSVG";

import htmlIcon from "@/assets/html.svg";
import cssIcon from "@/assets/css.svg";

export default function VictorMarkupAndStylingSubSection() {
  return (
    <SkillsSectionContainer title="Markup & Styling">
      <SkillCard
        link={{
          href: "",
        }}
        skill={{
          name: "HTML",
          iconData: {
            src: htmlIcon,
            alt: "HTML language logo",
          },
        }}
        customIconComponent={
          <HtmlSVG
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
          name: "CSS",
          iconData: {
            src: cssIcon,
            alt: "CSS language logo",
          },
        }}
        customIconComponent={
          <CssSVG
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
          name: "Tailwind",
          iconData: {
            src: "",
            alt: "Tailwind styling logo",
          },
        }}
        customIconComponent={
          <TailwindSVG width={40} height={40} className="fill-white" />
        }
      />

      <SkillCard
        link={{
          href: "",
        }}
        skill={{
          name: "Bootstrap",
          iconData: {
            src: "",
            alt: "Bootstrap styling logo",
          },
        }}
        customIconComponent={
          <BootstrapSVG width={40} height={40} className="fill-white" />
        }
      />

      <SkillCard
        link={{
          href: "",
        }}
        skill={{
          name: "Styled-Components",
          iconData: {
            src: "",
            alt: "Styled-Components styling logo",
          },
        }}
        customIconComponent={
          <StyledComponentsSVG width={40} height={40} className="fill-white" />
        }
      />
    </SkillsSectionContainer>
  );
}
