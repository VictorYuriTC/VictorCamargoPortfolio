import { LinkProps } from "next/link";
import SkillCardIcon from "./SkillCardIcon";
import { IPortfolioIcon } from "@/typing/interfaces/IPortfolioIcon/IPortfolioIcon";
import { VictorSkillNameType } from "../../../atomic/organisms/ExperienceCard/ExperienceSkillTag";
import { ReactNode } from "react";

export interface ISkill {
  name: VictorSkillNameType;
  iconData: IPortfolioIcon;
}

export interface ISkillCard {
  skill: ISkill;
  link: LinkProps;
  customIconComponent?: ReactNode;
  svgSize: number;
}

export default function SkillCard(props: ISkillCard) {
  return (
    <button className="flex flex-col items-center rounded p-2 duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
      {props.customIconComponent}
      {!props.customIconComponent && (
        <SkillCardIcon
          iconData={props.skill.iconData}
          name={props.skill.name}
          svgSize={props.svgSize}
        />
      )}

      <span className="text-base font-semibold mt-1">{props.skill.name}</span>
    </button>
  );
}
