import HtmlSVG from "@/assets/svgs/HtmlSVG";
import SkillCard from "../SkillCard";
import SkillsSectionContainer from "../SkillsSectionContainer";
import CssSVG from "@/assets/svgs/CssSVG";
import TailwindSVG from "@/assets/svgs/TailwindSVG";
import BootstrapSVG from "@/assets/svgs/BootstrapSVG";
import StyledComponentsSVG from "@/assets/svgs/StyledComponentsSVG";

import htmlIcon from "@/assets/html.svg";
import cssIcon from "@/assets/css.svg";

interface IVictorMarkupAndStylingSubSection {
  svgSize: number;
}

export default function VictorMarkupAndStylingSubSection(
  props: IVictorMarkupAndStylingSubSection
) {
  return (
    <SkillsSectionContainer title="Markup & Styling">
      <SkillCard
        svgSize={props.svgSize}
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
          name: "CSS",
          iconData: {
            src: cssIcon,
            alt: "CSS language logo",
          },
        }}
        customIconComponent={
          <CssSVG
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
          name: "Tailwind",
          iconData: {
            src: "",
            alt: "Tailwind styling logo",
          },
        }}
        customIconComponent={
          <TailwindSVG
            width={props.svgSize}
            height={props.svgSize}
            className="fill-white"
          />
        }
      />

      <SkillCard
        svgSize={props.svgSize}
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
          <BootstrapSVG
            width={props.svgSize}
            height={props.svgSize}
            className="fill-white"
          />
        }
      />

      <SkillCard
        svgSize={props.svgSize}
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
          <StyledComponentsSVG
            width={props.svgSize}
            height={props.svgSize}
            className="fill-white"
          />
        }
      />
    </SkillsSectionContainer>
  );
}
