import ExperienceCompanyName, {
  IExperienceCompanyName,
} from "./ExperienceCompanyName";
import ExperienceDate from "./ExperienceDate";
import ExperienceSkillTag, { IVictorSkill } from "./ExperienceSkillTag";
import ExperienceRole, { IExperienceRole } from "./ExperienceRole";
import { LinkProps } from "next/link";

export type MonthType =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type YearType = "2022" | "2023" | "2024";

export type ExperienceDateType = `${MonthType}-${YearType}`;

export interface IPresentExperience {
  type: "present";
  role: IExperienceRole;
  companyName: IExperienceCompanyName;
  allSkills: IVictorSkill[];
  startDate: ExperienceDateType;
  companyLink?: LinkProps;
}

export interface IPastExperience {
  type: "past";
  role: IExperienceRole;
  companyName: IExperienceCompanyName;
  allSkills: IVictorSkill[];
  startDate: ExperienceDateType;
  endDate: ExperienceDateType;
  companyLink?: LinkProps;
}

export type VictorExperienceType = IPresentExperience | IPastExperience;

interface IExperienceCard {
  experience: VictorExperienceType;
}

export default function ExperienceCard(props: IExperienceCard) {
  return (
    <div className="group flex flex-col rounded duration-500 p-5 border border-gray-300 hover:border-purple-300 dark:border-gray-900 dark:hover:border-purple-700 hover:shadow-[0px_0px_7px_theme(colors.purple.500)]">
      <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 mb-4">
        {props.experience.allSkills.map((skill, index) => (
          <ExperienceSkillTag
            span={{
              className: "duration-500 bg-purple-700 group-hover:bg-purple-600",
            }}
            skill={skill}
            key={`index`}
          />
        ))}
      </div>

      <ExperienceRole>{props.experience.role.children}</ExperienceRole>

      <ExperienceCompanyName>
        {props.experience.companyName.children}
      </ExperienceCompanyName>

      {props.experience.type === "past" && (
        <ExperienceDate
          type={props.experience.type}
          endDate={props.experience.endDate}
          allSkills={props.experience.allSkills}
          companyName={props.experience.companyName}
          role={props.experience.role}
          startDate={props.experience.startDate}
        />
      )}

      {props.experience.type === "present" && (
        <ExperienceDate
          type={props.experience.type}
          allSkills={props.experience.allSkills}
          companyName={props.experience.companyName}
          role={props.experience.role}
          startDate={props.experience.startDate}
        />
      )}
    </div>
  );
}
