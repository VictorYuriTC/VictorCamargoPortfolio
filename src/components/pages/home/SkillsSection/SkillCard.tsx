import Link, { LinkProps } from "next/link";
import SkillCardIcon, { ISkillIcon } from "./SkillCardIcon";

export interface ISkill {
  name: string;
  iconData: ISkillIcon;
}

export interface ISkillCard {
  skill: ISkill;
  link: LinkProps;
}

export default function SkillCard(props: ISkillCard) {
  return (
    <Link
      href={props.link?.href}
      className="flex flex-col items-center rounded p-2 duration-300 hover:bg-gray-800">
      <SkillCardIcon iconData={props.skill.iconData} name={props.skill.name} />

      <span className="font-semibold mt-1">{props.skill.name}</span>
    </Link>
  );
}
