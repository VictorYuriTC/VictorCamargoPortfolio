import { VictorExperienceType } from "./ExperienceCard/ExperienceCard";

export const allVictorExperiences: (VictorExperienceType & {
  id: number;
})[] = [
  {
    id: 1,
    type: "past",
    startDate: "November-2022",
    endDate: "August-2023",

    company: {
      name: { children: "AAK Tele-Science" },
      websiteLink: { href: "https://aakscience.com/" },
    },
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

    company: {
      name: { children: "Gigawrks" },
      websiteLink: { href: "https://gigawrks.com/" },
    },
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
    allExperiencePhotos: {
      photos: [
        {
          photo: {
            alt: "Gigawrks - Agents home screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-agents-home-screen.png",
          },
          type: "photo",
        },

        {
          photo: {
            alt: "Gigawrks - Clients home screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-clients-home-screen-1.png",
          },
          type: "photo",
        },

        {
          photo: {
            alt: "Gigawrks - Track transaction screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-track-transaction-screen.png",
          },
          type: "photo",
        },

        {
          photo: {
            alt: "Gigawrks - Chat screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-chat-screen.png",
          },
          type: "photo",
        },

        {
          photo: {
            alt: "Gigawrks - Notifications list screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-notifications-list-screen.png",
          },
          type: "photo",
        },
      ],
    },
  },
];
