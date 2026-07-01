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

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.StyleSheet,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.Tailwind,
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

      {
        field: "backend",
        name: VictorToolsEnum.Git,
      },

      {
        field: "backend",
        name: VictorToolsEnum.GitLab,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.CSS,
      },

      {
        field: "frontend",
        name: VictorMarkupAndStyleSheetLanguagesEnum.Tailwind,
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
    allExperiencePhotos: {
      photos: [
        {
          photo: {
            alt: "Groner - Departments screen",
            src: "/companies-portfolio-photos/groner/1-groner-departments.png",
          },
          type: "photo",
          title: "Departments screen",
        },
        {
          photo: {
            alt: "Groner - Custom variables screen",
            src: "/companies-portfolio-photos/groner/2-groner-custom-variables.png",
          },
          type: "photo",
          title: "Custom variables screen",
        },
        {
          photo: {
            alt: "Groner - Survey list screen",
            src: "/companies-portfolio-photos/groner/3-groner-survey-list.png",
          },
          type: "photo",
          title: "Survey list screen",
        },
        {
          photo: {
            alt: "Groner - Sent emails screen",
            src: "/companies-portfolio-photos/groner/4-groner-sent-emails.png",
          },
          type: "photo",
          title: "Sent emails screen",
        },
        {
          photo: {
            alt: "Groner - Schedule task linked with Google Agenda",
            src: "/companies-portfolio-photos/groner/5-groner-schedule-task-linked-with-google-agenda.png",
          },
          type: "photo",
          title: "Schedule task linked with Google Agenda",
        },
        {
          photo: {
            alt: "Groner - Solar panels installations screen",
            src: "/companies-portfolio-photos/groner/6-groner-solar-panels-installations.png",
          },
          type: "photo",
          title: "Solar panels installations screen",
        },
        {
          photo: {
            alt: "Groner - Email senders screen",
            src: "/companies-portfolio-photos/groner/7-groner-email-senders.png",
          },
          type: "photo",
          title: "Email senders screen",
        },
        {
          photo: {
            alt: "Groner - Create task screen",
            src: "/companies-portfolio-photos/groner/8-groner-create-task.png",
          },
          type: "photo",
          title: "Create task screen",
        },
        {
          photo: {
            alt: "Groner - Proposals list screen",
            src: "/companies-portfolio-photos/groner/9-groner-proposals-list.png",
          },
          type: "photo",
          title: "Proposals list screen",
        },
        {
          photo: {
            alt: "Groner - Task tag list screen",
            src: "/companies-portfolio-photos/groner/10-groner-task-tag-list.png",
          },
          type: "photo",
          title: "Task tag list screen",
        },
        {
          photo: {
            alt: "Groner - Task details screen",
            src: "/companies-portfolio-photos/groner/11-groner-task-details.png",
          },
          type: "photo",
          title: "Task details screen",
        },
        {
          photo: {
            alt: "Groner - Deals list screen",
            src: "/companies-portfolio-photos/groner/12-groner-deals-list.png",
          },
          type: "photo",
          title: "Deals list screen",
        },
        {
          photo: {
            alt: "Groner - Task list screen",
            src: "/companies-portfolio-photos/groner/13-groner-task-list.png",
          },
          type: "photo",
          title: "Task list screen",
        },
        {
          photo: {
            alt: "Groner - User details routing tab",
            src: "/companies-portfolio-photos/groner/14-groner-user-details-routing.png",
          },
          type: "photo",
          title: "User details routing tab",
        },
        {
          photo: {
            alt: "Groner - User details info tab",
            src: "/companies-portfolio-photos/groner/15-groner-user-details-info.png",
          },
          type: "photo",
          title: "User details info tab",
        },
        {
          photo: {
            alt: "Groner - User details system tab",
            src: "/companies-portfolio-photos/groner/17-groner-user-details-system.png",
          },
          type: "photo",
          title: "User details system tab",
        },
        {
          photo: {
            alt: "Groner - User details notifications tab",
            src: "/companies-portfolio-photos/groner/18-groner-user-details-notifications.png",
          },
          type: "photo",
          title: "User details notifications tab",
        },
        {
          photo: {
            alt: "Groner - User details history tab",
            src: "/companies-portfolio-photos/groner/19-groner-user-details-history.png",
          },
          type: "photo",
          title: "User details history tab",
        },
        {
          photo: {
            alt: "Groner - Lead details screen",
            src: "/companies-portfolio-photos/groner/20-groner-lead-details.png",
          },
          type: "photo",
          title: "Lead details screen",
        },
      ],
    },
  },
];
