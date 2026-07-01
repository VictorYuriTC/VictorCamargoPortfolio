import { m } from "framer-motion";
import { VictorExperienceType } from "../../../atomic/organisms/ExperienceCard/ExperienceCard";
import { VictorProgrammingLanguagesEnum } from "@/typing/enums/VictorProgrammingLanguagesEnum/VictorProgrammingLanguagesEnum";
import { VictorFrameworksAndDatabaseEnum } from "@/typing/enums/VictorFrameworksAndDatabaseEnum/VictorFrameworksAndDatabaseEnum";
import { VictorMarkupAndStyleSheetLanguagesEnum } from "@/typing/enums/VictorMarkupAndStyleSheetLanguagesEnum/VictorMarkupAndStyleSheetLanguagesEnum";
import { VictorLibrariesEnum } from "@/typing/enums/VictorLibrariesEnum/VictorLibrariesEnum";
import { VictorToolsEnum } from "@/typing/enums/VictorToolsEnum/VictorToolsEnum";

export const allVictorExperiences: (VictorExperienceType & {
  id: number;
})[] = [
  {
    id: 1,
    type: "past",
    startDate: "November-2022",
    endDate: "June-2023",

    company: {
      name: { children: "AAK Tele-Science" },
      websiteLink: { href: "https://aakscience.com/" },
    },
    role: { children: "Frontend Developer" },
    allSkills: [
      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.JavaScript,
      },

      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.TypeScript,
      },

      {
        field: "frontend",
        name: VictorFrameworksAndDatabaseEnum.React,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.CSS,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.CSSModules,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.StyledComponents,
      },

      {
        field: "frontend",
        name: VictorLibrariesEnum.Recoil,
      },

      {
        field: "frontend",
        name: VictorLibrariesEnum.ReactTanStackQuery,
      },
    ],
    allExperiencePhotos: {
      photos: [
        {
          photo: {
            alt: "AAK Tele-Science - Select user type screen",
            src: "/companies-portfolio-photos/aak-telescience/1-aak-telescience-select-user-type.png",
          },
          type: "photo",
          title: "Select user type screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Create user screen",
            src: "/companies-portfolio-photos/aak-telescience/2-aak-telescience-create-user.png",
          },
          type: "photo",
          title: "Create user screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Profile settings screen",
            src: "/companies-portfolio-photos/aak-telescience/3-aak-telescience-profile-settings.png",
          },
          type: "photo",
          title: "Profile settings screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Researcher profile screen",
            src: "/companies-portfolio-photos/aak-telescience/4-aak-telescience-researcher-profile.png",
          },
          type: "photo",
          title: "Researcher profile screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Connection requests screen",
            src: "/companies-portfolio-photos/aak-telescience/5-aak-telescience-connection-requests.png",
          },
          type: "photo",
          title: "Connection requests screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Create blog screen",
            src: "/companies-portfolio-photos/aak-telescience/6-aak-telescience-create-blog.png",
          },
          type: "photo",
          title: "Create blog screen",
        },
      ],
    },
  },

  {
    id: 2,
    type: "past",
    startDate: "June-2023",
    endDate: "March-2025",

    company: {
      name: { children: "Gigawrks" },
      websiteLink: { href: "https://gigawrks.com/" },
    },
    role: { children: "Frontend Developer" },
    allSkills: [
      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.TypeScript,
      },

      {
        field: "frontend",
        name: VictorFrameworksAndDatabaseEnum.ReactNative,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.StyleSheet,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.Tailwind,
      },

      {
        field: "frontend",
        name: VictorLibrariesEnum.Redux,
      },

      {
        field: "frontend",
        name: VictorToolsEnum.AndroidStudio,
      },

      {
        field: "frontend",
        name: VictorToolsEnum.XCode,
      },

      {
        field: "frontend",
        name: VictorLibrariesEnum.ReactTanStackQuery,
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
    startDate: "March-2025",
    endDate: "January-2026",

    company: {
      name: { children: "IESDE" },
      websiteLink: { href: "https://iesde.com.br" },
    },
    role: { children: "Mid-Level Frontend Developer" },
    allSkills: [
      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.JavaScript,
      },

      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.TypeScript,
      },

      {
        field: "frontend",
        name: VictorFrameworksAndDatabaseEnum.Vue,
      },

      {
        field: "frontend",
        name: VictorFrameworksAndDatabaseEnum.Nuxt,
      },

      {
        field: "frontend",
        name: VictorLibrariesEnum.Vuetify,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.CSS,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.Tailwind,
      },

      {
        field: "frontend",
        name: VictorLibrariesEnum.Pinia,
      },

      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.Dart,
      },

      {
        field: "frontend",
        name: VictorFrameworksAndDatabaseEnum.Flutter,
      },

      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.PHP,
      },

      {
        field: "frontend",
        name: VictorFrameworksAndDatabaseEnum.Blade,
      },

      {
        field: "backend",
        name: VictorFrameworksAndDatabaseEnum.Laravel,
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
    role: { children: "Mid-Level Full-Stack Developer" },
    allSkills: [
      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.JavaScript,
      },

      {
        field: "frontend",
        name: VictorProgrammingLanguagesEnum.TypeScript,
      },

      {
        field: "frontend",
        name: VictorFrameworksAndDatabaseEnum.Vue,
      },

      {
        field: "frontend",
        name: VictorFrameworksAndDatabaseEnum.Quasar,
      },

      {
        field: "backend",
        name: VictorFrameworksAndDatabaseEnum.Node,
      },

      {
        field: "backend",
        name: VictorToolsEnum.AWS,
      },

      {
        field: "backend",
        name: VictorToolsEnum.SAM,
      },

      {
        field: "frontend",
        name: VictorLibrariesEnum.Pinia,
      },

      {
        field: "frontend",
        name: VictorToolsEnum.Supabase,
      },

      {
        field: "backend",
        name: VictorToolsEnum.Cloudwatch,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.SASS,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.Tailwind,
      },
    ],
  },
];
