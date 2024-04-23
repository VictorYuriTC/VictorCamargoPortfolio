import { VictorFrameworksEnum } from "@/typing/enums/VictorFrameworksEnum/VictorFrameworksEnum";
import { VictorLibrariesEnum } from "@/typing/enums/VictorLibrariesEnum/VictorLibrariesEnum";
import { VictorProgrammingLanguagesEnum } from "@/typing/enums/VictorProgrammingLanguagesEnum/VictorProgrammingLanguagesEnum";
import { VictorToolsEnum } from "@/typing/enums/VictorToolsEnum/VictorToolsEnum";
import { HtmlHTMLAttributes } from "react";

export type VictorSkillNameType =
  | keyof typeof VictorProgrammingLanguagesEnum
  | keyof typeof VictorFrameworksEnum
  | keyof typeof VictorToolsEnum
  | keyof typeof VictorLibrariesEnum;

export interface IVictorSkill {
  name: VictorSkillNameType;
  field: "backend" | "frontend";
}

export interface IExperienceSkillTag {
  skill: IVictorSkill;
  span?: HtmlHTMLAttributes<HTMLSpanElement>;
}

export default function ExperienceSkillTag(props: IExperienceSkillTag) {
  return (
    <span
      className={`flex flex-row justify-center items-center py-1 px-3 rounded-full text-base font-light bg-purple-800 ${props.span?.className}`}>
      {props.skill.name}
    </span>
  );
}
