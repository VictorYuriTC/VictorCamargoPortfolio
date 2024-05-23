"use client";

import ExperienceCompanyName from "./ExperienceCompanyName";
import ExperienceDate from "./ExperienceDate";
import ExperienceSkillTag, { IVictorSkill } from "./ExperienceSkillTag";
import ExperienceRole, { IExperienceRole } from "./ExperienceRole";
import { LinkProps } from "next/link";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import AllExperiencePhotos, {
  IAllExperiencePhotos,
} from "./AllExperiencePhotos";
import ExperiencePhotosCarouselModal from "./ExperiencePhotosCarouselModal";
import { ImageProps } from "next/image";
import { IExperiencePhotoData } from "./ExperiencePhoto";

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

export interface ICompany {
  websiteLink?: LinkProps;
  name: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
}
export interface IPresentExperience {
  type: "present";
  role: IExperienceRole;
  company: ICompany;
  allSkills: IVictorSkill[];
  startDate: ExperienceDateType;
  companyLink?: LinkProps;
  allExperiencePhotos?: Omit<
    IAllExperiencePhotos,
    "setIsExperiencePhotosCarouselModalOpen" | "setFocusedPhoto"
  >;
}

export interface IPastExperience {
  type: "past";
  role: IExperienceRole;
  company: ICompany;
  allSkills: IVictorSkill[];
  startDate: ExperienceDateType;
  endDate: ExperienceDateType;
  companyLink?: LinkProps;
  allExperiencePhotos?: IAllExperiencePhotos;
}

export type VictorExperienceType = IPresentExperience | IPastExperience;

interface IExperienceCard {
  experience: VictorExperienceType;
}

export default function ExperienceCard(props: IExperienceCard) {
  const [
    isExperiencePhotosCarouselModalOpen,
    setIsExperiencePhotosCarouselModalOpen,
  ] = useState(false);

  const [focusedPhoto, setFocusedPhoto] = useState<IExperiencePhotoData | null>(
    null
  );

  return (
    <div className="group flex flex-col rounded duration-500 p-5 border border-gray-300 hover:border-purple-300 dark:border-gray-900 dark:hover:border-purple-700 hover:shadow-[0px_0px_7px_theme(colors.purple.500)]">
      <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 mb-4">
        {props.experience.allSkills.map((skill, index) => (
          <ExperienceSkillTag
            span={{
              className: "duration-500 bg-purple-700 group-hover:bg-purple-600",
            }}
            skill={skill}
            key={`name:${skill.name}-field:${skill.field}-index:${index}`}
          />
        ))}
      </div>

      <ExperienceRole>{props.experience.role.children}</ExperienceRole>

      <ExperienceCompanyName company={props.experience.company} />

      {props.experience.type === "past" && (
        <ExperienceDate
          type={props.experience.type}
          endDate={props.experience.endDate}
          allSkills={props.experience.allSkills}
          role={props.experience.role}
          startDate={props.experience.startDate}
          company={props.experience.company}
        />
      )}

      {props.experience.type === "present" && (
        <ExperienceDate
          type={props.experience.type}
          allSkills={props.experience.allSkills}
          role={props.experience.role}
          startDate={props.experience.startDate}
          company={props.experience.company}
        />
      )}

      {props.experience.allExperiencePhotos && (
        <AllExperiencePhotos
          setIsExperiencePhotosCarouselModalOpen={
            setIsExperiencePhotosCarouselModalOpen
          }
          setFocusedPhoto={setFocusedPhoto}
          photos={props.experience.allExperiencePhotos.photos}
        />
      )}

      {isExperiencePhotosCarouselModalOpen && focusedPhoto && (
        <ExperiencePhotosCarouselModal
          isOpen={isExperiencePhotosCarouselModalOpen}
          setIsOpen={setIsExperiencePhotosCarouselModalOpen}
          focusedPhoto={focusedPhoto}
          allCarouselPhotos={props.experience.allExperiencePhotos?.photos || []}
          setFocusedPhoto={setFocusedPhoto}
        />
      )}
    </div>
  );
}
