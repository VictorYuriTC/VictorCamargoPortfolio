import { m } from "framer-motion";
import { VictorExperienceType } from "../../../atomic/organisms/ExperienceCard/ExperienceCard";

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
    type: "past",
    endDate: "March-2025",
    startDate: "January-2026",

    company: {
      name: { children: "IESDE" },
      websiteLink: { href: "https://iesde.com.br" },
    },
    role: { children: "Frontend Developer II" },
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
        name: "Vue",
      },

      {
        field: "frontend",
        name: "Nuxt",
      },

      {
        field: "frontend",
        name: "CSS",
      },

      {
        field: "frontend",
        name: "Tailwind",
      },

      {
        field: "frontend",
        name: "Pinia",
      },

      {
        field: "frontend",
        name: "Dart",
      },

      {
        field: "frontend",
        name: "Flutter",
      },

      {
        field: "frontend",
        name: "PHP",
      },

      {
        field: "frontend",
        name: "Blade",
      },

      {
        field: "backend",
        name: "Laravel",
      },
    ],
    allExperiencePhotos: {
      photos: [
        {
          photo: {
            alt: "Aprova Concursos - Institution Screen",
            src: "/companies-portfolio-photos/iesde/1-aprova-concursos-institution-screen.png",
          },
          title: "Home screen",
          type: "photo",
        },

        {
          photo: {
            alt: "Aprova Concursos - Course Screen",
            src: "/companies-portfolio-photos/iesde/2-aprova-concursos-course-screen.png",
          },
          title: "Course screen",
          type: "photo",
        },

        {
          photo: {
            alt: "Questões+ Webapp - Home Screen",
            src: "/companies-portfolio-photos/iesde/3-questoes-mais-webapp-home-screen.png",
          },
          title: "Webapp Home Screen",
          type: "photo",
        },

        {
          photo: {
            alt: "Aprova Concursos - Search Screen",
            src: "/companies-portfolio-photos/iesde/4-aprova-concursos-search-screen.png",
          },
          title: "Search Screen",
          type: "photo",
        },

        {
          photo: {
            alt: "LMS Aprova Concursos - Login Screen",
            src: "/companies-portfolio-photos/iesde/5-lms-aprova-concursos-login-screen.png",
          },
          title: "Login Screen",
          type: "photo",
        },
      ],
    },
  },

  {
    id: 3,
    type: "present",
    startDate: "January-2026",

    company: {
      name: { children: "Groner" },
      websiteLink: { href: "https://groner.com.br" },
    },
    role: { children: "Mid-Level Frontend Developer" },
    allSkills: [
      {
        field: "frontend",
        name: "TypeScript",
      },

      {
        field: "frontend",
        name: "Vue",
      },

      {
        field: "frontend",
        name: "Quasar",
      },

      {
        field: "frontend",
        name: "CSS",
      },

      {
        field: "frontend",
        name: "Pinia",
      },

      {
        field: "frontend",
        name: "SASS",
      },

      {
        field: "frontend",
        name: "Supabase",
      },
    ],
  },
];
