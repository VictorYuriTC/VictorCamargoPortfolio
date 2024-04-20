import SkillCardIcon, { ISkillIcon } from "./SkillCardIcon";

export interface ISkill {
  name: string;
  iconData: ISkillIcon;
}

export interface ISkillCard {
  skill: ISkill;
}

export default function SkillCard(props: ISkillCard) {
  return (
    <div className="flex flex-col items-center">
      <SkillCardIcon iconData={props.skill.iconData} name={props.skill.name} />

      <span className="font-semibold mt-1">{props.skill.name}</span>
    </div>
  );
}
