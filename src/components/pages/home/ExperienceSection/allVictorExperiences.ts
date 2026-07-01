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

      {
        field: "backend",
        name: VictorToolsEnum.Git,
      },

      {
        field: "backend",
        name: VictorToolsEnum.GitHub,
      },
    ],
    allExperiencePhotos: {
      photos: [
        {
          photo: {
            alt: "AAK Tele-Science - Select User Type Screen",
            src: "/companies-portfolio-photos/aak-telescience/1-aak-telescience-select-user-type.png",
          },
          type: "photo",
          title: "Select User Type Screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Create User Screen",
            src: "/companies-portfolio-photos/aak-telescience/2-aak-telescience-create-user.png",
          },
          type: "photo",
          title: "Create User Screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Profile Settings Screen",
            src: "/companies-portfolio-photos/aak-telescience/3-aak-telescience-profile-settings.png",
          },
          type: "photo",
          title: "Profile Settings Screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Researcher Profile Screen",
            src: "/companies-portfolio-photos/aak-telescience/4-aak-telescience-researcher-profile.png",
          },
          type: "photo",
          title: "Researcher Profile Screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Connection Requests Screen",
            src: "/companies-portfolio-photos/aak-telescience/5-aak-telescience-connection-requests.png",
          },
          type: "photo",
          title: "Connection Requests Screen",
        },
        {
          photo: {
            alt: "AAK Tele-Science - Create Blog Screen",
            src: "/companies-portfolio-photos/aak-telescience/6-aak-telescience-create-blog.png",
          },
          type: "photo",
          title: "Create Blog Screen",
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

      {
        field: "backend",
        name: VictorToolsEnum.Git,
      },

      {
        field: "backend",
        name: VictorToolsEnum.GitHub,
      },
    ],
    allExperiencePhotos: {
      photos: [
        {
          photo: {
            alt: "Gigawrks - Agents Home Screen Preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-agents-home-screen.png",
          },
          type: "photo",
          title: "Agents Home Screen",
        },

        {
          photo: {
            alt: "Gigawrks - Clients Home Screen Preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-clients-home-screen-1.png",
          },
          type: "photo",
          title: "Clients Home Screen",
        },

        {
          photo: {
            alt: "Gigawrks - Clients Home Screen Items Preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-clients-home-screen-2.png",
          },
          type: "photo",
          title: "Clients Home Screen Items",
        },

        {
          photo: {
            alt: "Gigawrks - Track Transaction Screen Preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-track-transaction-screen.png",
          },
          type: "photo",
          title: "Track Transaction Screen",
        },

        {
          photo: {
            alt: "Gigawrks - Chat Screen Preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-chat-screen.png",
          },
          type: "photo",
          title: "Chat Screen",
        },

        {
          photo: {
            alt: "Gigawrks - Notifications List Screen Preview",
            src: "/companies-portfolio-photos/gigawrks/gigawrks-notifications-list-screen.png",
          },
          type: "photo",
          title: "Notifications List Screen",
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
          title: "Institution Screen",
          type: "photo",
        },

        {
          photo: {
            alt: "Aprova Concursos - Course Screen",
            src: "/companies-portfolio-photos/iesde/2-aprova-concursos-course-screen.png",
          },
          title: "Course Screen",
          type: "photo",
        },

        {
          photo: {
            alt: "Questões+ Webapp - Home Screen",
            src: "/companies-portfolio-photos/iesde/3-questoes-mais-webapp-home-screen.png",
          },
          title: "Questões+ Webapp Home Screen",
          type: "photo",
        },

        {
          photo: {
            alt: "Questões+ Webapp - Search Screen",
            src: "/companies-portfolio-photos/iesde/4-aprova-concursos-search-screen.png",
          },
          title: "Questões+ Webapp Search Screen",
          type: "photo",
        },

        {
          photo: {
            alt: "LMS Aprova Concursos - Login Screen",
            src: "/companies-portfolio-photos/iesde/5-lms-aprova-concursos-login-screen.png",
          },
          title: "LMS Aprova Concursos - Login Screen",
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
      websiteLink: { href: "https://gronercrm.com.br" },
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
        field: "backend",
        name: VictorToolsEnum.Git,
      },

      {
        field: "backend",
        name: VictorToolsEnum.GitHub,
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
            src: "/companies-portfolio-photos/groner/groner-departments.png",
          },
          type: "photo",
          title: "Departments Screen",
        },
        {
          photo: {
            alt: "Groner - Custom Variables Screen",
            src: "/companies-portfolio-photos/groner/groner-custom-variables.png",
          },
          type: "photo",
          title: "Custom Variables Screen",
        },
        {
          photo: {
            alt: "Groner - Survey List Screen",
            src: "/companies-portfolio-photos/groner/groner-survey-list.png",
          },
          type: "photo",
          title: "Survey List Screen",
        },
        {
          photo: {
            alt: "Groner - Sent Emails Screen",
            src: "/companies-portfolio-photos/groner/groner-sent-emails.png",
          },
          type: "photo",
          title: "Sent Emails Screen",
        },
        {
          photo: {
            alt: "Groner - Schedule Task Linked with Google Agenda",
            src: "/companies-portfolio-photos/groner/groner-schedule-task-linked-with-google-agenda.png",
          },
          type: "photo",
          title: "Schedule Task Linked with Google Agenda",
        },
        {
          photo: {
            alt: "Groner - Solar Panels Installations Screen",
            src: "/companies-portfolio-photos/groner/groner-solar-panels-installations.png",
          },
          type: "photo",
          title: "Solar Panels Installations Screen",
        },
        {
          photo: {
            alt: "Groner - Email Senders Screen",
            src: "/companies-portfolio-photos/groner/groner-email-senders.png",
          },
          type: "photo",
          title: "Email Senders Screen",
        },
        {
          photo: {
            alt: "Groner - Create Task Screen",
            src: "/companies-portfolio-photos/groner/groner-create-task.png",
          },
          type: "photo",
          title: "Create Task Screen",
        },
        {
          photo: {
            alt: "Groner - Proposals List Screen",
            src: "/companies-portfolio-photos/groner/groner-proposals-list.png",
          },
          type: "photo",
          title: "Proposals List Screen",
        },
        {
          photo: {
            alt: "Groner - Task Tag List Screen",
            src: "/companies-portfolio-photos/groner/groner-task-tag-list.png",
          },
          type: "photo",
          title: "Task Tag List Screen",
        },
        {
          photo: {
            alt: "Groner - Task Details Screen",
            src: "/companies-portfolio-photos/groner/groner-task-details.png",
          },
          type: "photo",
          title: "Task Details Screen",
        },
        {
          photo: {
            alt: "Groner - Deals List Screen",
            src: "/companies-portfolio-photos/groner/groner-deals-list.png",
          },
          type: "photo",
          title: "Deals List Screen",
        },
        {
          photo: {
            alt: "Groner - Task List Screen",
            src: "/companies-portfolio-photos/groner/groner-task-list.png",
          },
          type: "photo",
          title: "Task List Screen",
        },
        {
          photo: {
            alt: "Groner - User Details Info Tab",
            src: "/companies-portfolio-photos/groner/groner-user-details-info.png",
          },
          type: "photo",
          title: "User Details Info Tab",
        },
        {
          photo: {
            alt: "Groner - User Details System Tab",
            src: "/companies-portfolio-photos/groner/groner-user-details-system.png",
          },
          type: "photo",
          title: "User Details System Tab",
        },
        {
          photo: {
            alt: "Groner - User Details Notifications Tab",
            src: "/companies-portfolio-photos/groner/groner-user-details-notifications.png",
          },
          type: "photo",
          title: "User Details Notifications Tab",
        },
        {
          photo: {
            alt: "Groner - User Details Routing Tab",
            src: "/companies-portfolio-photos/groner/groner-user-details-routing.png",
          },
          type: "photo",
          title: "User Details Routing Tab",
        },
        {
          photo: {
            alt: "Groner - User Details History Tab",
            src: "/companies-portfolio-photos/groner/groner-user-details-history.png",
          },
          type: "photo",
          title: "User Details History Tab",
        },
        {
          photo: {
            alt: "Groner - Lead Details Screen",
            src: "/companies-portfolio-photos/groner/groner-lead-details.png",
          },
          type: "photo",
          title: "Lead Details Screen",
        },
      ],
    },
  },
];
