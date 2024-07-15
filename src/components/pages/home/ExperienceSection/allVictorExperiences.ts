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
        name: "JavaScript",
      },

      {
        field: "frontend",
        name: "TypeScript",
      },

      {
        field: "frontend",
        name: "React",
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
        name: "TypeScript",
      },

      {
        field: "frontend",
        name: "React Native",
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
          title: "Agents home screen",
        },

        {
          photo: {
            alt: "Gigawrks - Clients home screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-clients-home-screen-1.png",
          },
          type: "photo",
          title: "Clients home screen",
        },

        {
          photo: {
            alt: "Gigawrks - Clients home screen items preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-clients-home-screen-2.png",
          },
          type: "photo",
          title: "Clients home screen items",
        },

        {
          photo: {
            alt: "Gigawrks - Track transaction screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-track-transaction-screen.png",
          },
          type: "photo",
          title: "Track transaction screen",
        },

        {
          photo: {
            alt: "Gigawrks - Chat screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-chat-screen.png",
          },
          type: "photo",
          title: "Chat screen",
        },

        {
          photo: {
            alt: "Gigawrks - Notifications list screen preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-notifications-list-screen.png",
          },
          type: "photo",
          title: "Notifications list screen",
        },
      ],
    },
  },

  {
    id: 3,
    type: "present",
    startDate: "May-2024",

    company: {
      name: { children: "GeoGaburi" },
      websiteLink: { href: "https://geogaburi.com/" },
    },
    role: { children: "Full-Stack Developer" },
    allSkills: [
      {
        field: "frontend",
        name: "Dart",
      },

      {
        field: "frontend",
        name: "Flutter",
      },

      {
        field: "backend",
        name: "Python",
      },

      {
        field: "backend",
        name: "Django",
      },

      {
        field: "frontend",
        name: "AdMob",
      },

      {
        field: "frontend",
        name: "Provider",
      },

      {
        field: "frontend",
        name: "Android Studio",
      },

      {
        field: "frontend",
        name: "XCode",
      },
    ],
    allExperiencePhotos: {
      photos: [
        {
          photo: {
            alt: "GeoGaburi - Login screen preview",
            src: "/companies-portfolio-photos/geogaburi/1-logging-in-dark.png",
          },
          type: "photo",
          title: "Login screen",
        },

        {
          photo: {
            alt: "GeoGaburi - Sprint mode gameplay preview",
            src: "/companies-portfolio-photos/geogaburi/3-playing-sprint-mode-dark.png",
          },
          type: "photo",
          title: "Sprint mode gameplay",
        },

        {
          photo: {
            alt: "GeoGaburi - Last match stats screen preview",
            src: "/companies-portfolio-photos/geogaburi/4-checking-last-match-stats-dark.png",
          },
          type: "photo",
          title: "Last match stats screen",
        },

        {
          photo: {
            alt: "GeoGaburi - Question stats screen preview",
            src: "/companies-portfolio-photos/geogaburi/6-checking-question-stats-dark.png",
          },
          type: "photo",
          title: "Question stats screen",
        },

        {
          photo: {
            alt: "GeoGaburi - Home screen preview",
            src: "/companies-portfolio-photos/geogaburi/2-viewing-home-screen-light.png",
          },
          type: "photo",
          title: "Home screen",
        },

        {
          photo: {
            alt: "GeoGaburi - Write & Go mode gameplay preview",
            src: "/companies-portfolio-photos/geogaburi/5-playing-write-and-go-mode-light.png",
          },
          type: "photo",
          title: "Write & Go mode gameplay",
        },

        {
          photo: {
            alt: "GeoGaburi - App languages screen preview",
            src: "/companies-portfolio-photos/geogaburi/7-changing-app-language-light.png",
          },
          type: "photo",
          title: "App languages screen",
        },
      ],
    },
  },
];
