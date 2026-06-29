import { VictorFrameworksAndDatabaseEnum } from "@/typing/enums/VictorFrameworksAndDatabaseEnum/VictorFrameworksAndDatabaseEnum";
import { VictorLibrariesEnum } from "@/typing/enums/VictorLibrariesEnum/VictorLibrariesEnum";
import { VictorMarkupAndStyleSheetLanguagesEnum } from "@/typing/enums/VictorMarkupAndStyleSheetLanguagesEnum/VictorMarkupAndStyleSheetLanguagesEnum";
import { VictorProgrammingLanguagesEnum } from "@/typing/enums/VictorProgrammingLanguagesEnum/VictorProgrammingLanguagesEnum";
import { VictorToolsEnum } from "@/typing/enums/VictorToolsEnum/VictorToolsEnum";
import { HtmlHTMLAttributes } from "react";

export type VictorSkillNameType =
  | VictorProgrammingLanguagesEnum
  | VictorMarkupAndStyleSheetLanguagesEnum
  | VictorFrameworksAndDatabaseEnum
  | VictorToolsEnum
  | VictorLibrariesEnum;

export interface IVictorSkill {
  name: VictorSkillNameType;
  field: "backend" | "frontend";
}

export interface IExperienceSkillTag {
  skill: IVictorSkill;
  span?: HtmlHTMLAttributes<HTMLSpanElement>;
}

export default function ExperienceSkillTag(props: IExperienceSkillTag) {
  const { className, ...spanProps } = props.span ?? {};

  return (
    <span
      {...spanProps}
      className={`inline-flex flex-row justify-center items-center py-1 px-3 rounded-full text-base  whitespace-nowrap font-base text-purple-800 border bg-purple-100 border-purple-200  dark:text-white dark:border-purple-900 dark:bg-purple-950 transition-colors duration-500 group-hover:bg-purple-200 group-hover:border-purple-300 dark:group-hover:bg-purple-900 dark:group-hover:border-purple-800 ${className ?? ""}`}>
      {props.skill.name}
    </span>
  );
}
