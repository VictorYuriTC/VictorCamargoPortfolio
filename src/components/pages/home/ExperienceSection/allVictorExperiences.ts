import { VictorExperienceType } from "./ExperienceCard/ExperienceCard";

export const allVictorExperiences: (VictorExperienceType & {
  id: number;
})[] = [
  {
    id: 1,
    type: "past",
    startDate: "November-2022",
    endDate: "August-2023",
    companyName: { children: "AAK Tele-Science" },
    role: { children: "Frontend Developer" },
    allSkills: [
      {
        field: "frontend",
        name: "React",
      },
      {
        field: "frontend",
        name: "JavaScript",
      },
      {
        field: "frontend",
        name: "TypeScript",
      },

      {
        field: "frontend",
        name: "CSS",
      },

      {
        field: "frontend",
        name: "CSS Modules",
      },

      {
        field: "frontend",
        name: "Styled-Components",
      },

      {
        field: "frontend",
        name: "Recoil",
      },

      {
        field: "frontend",
        name: "React TanStack Query",
      },
    ],
  },

  {
    id: 2,
    type: "present",
    startDate: "June-2023",
    companyName: { children: "Gigawrks" },
    role: { children: "Frontend Developer" },
    allSkills: [
      {
        field: "frontend",
        name: "React Native",
      },

      {
        field: "frontend",
        name: "TypeScript",
      },

      {
        field: "frontend",
        name: "StyleSheet",
      },

      {
        field: "frontend",
        name: "Tailwind",
      },

      {
        field: "frontend",
        name: "Redux",
      },

      {
        field: "frontend",
        name: "Android Studio",
      },

      {
        field: "frontend",
        name: "XCode",
      },

      {
        field: "frontend",
        name: "React TanStack Query",
      },
    ],
  },
];
