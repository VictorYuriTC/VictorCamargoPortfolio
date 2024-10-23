import PortfolioPrimaryButton from "@/components/atomic/atoms/PortfolioPrimaryButton/PortfolioPrimaryButton";
import { VictorFrameworksAndDatabaseEnum } from "@/typing/enums/VictorFrameworksAndDatabaseEnum/VictorFrameworksAndDatabaseEnum";
import { VictorLibrariesEnum } from "@/typing/enums/VictorLibrariesEnum/VictorLibrariesEnum";
import { VictorMarkupAndStyleSheetLanguagesEnum } from "@/typing/enums/VictorMarkupAndStyleSheetLanguagesEnum/VictorMarkupAndStyleSheetLanguagesEnum";
import { VictorProgrammingLanguagesEnum } from "@/typing/enums/VictorProgrammingLanguagesEnum/VictorProgrammingLanguagesEnum";
import { VictorToolsEnum } from "@/typing/enums/VictorToolsEnum/VictorToolsEnum";
import { HtmlHTMLAttributes } from "react";

export type VictorSkillNameType =
  | keyof typeof VictorProgrammingLanguagesEnum
  | keyof typeof VictorMarkupAndStyleSheetLanguagesEnum
  | keyof typeof VictorFrameworksAndDatabaseEnum
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
    <PortfolioPrimaryButton
      variant="small"
      borderRadius="rounded-full"
      className={`flex flex-row justify-center items-center py-1 px-3 rounded-full text-base font-light text-white ${props.span?.className}`}>
      {props.skill.name}
    </PortfolioPrimaryButton>
  );
}
