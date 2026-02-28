import { IExperiencePhotoData } from "@/components/atomic/organisms/ExperienceCard/ExperiencePhoto";
import { VictorExperienceType } from "../../../atomic/organisms/ExperienceCard/ExperienceCard";

const homePagePreviewInLightModeAndMobile: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Home page preview in dark mode and mobile version",
    src: "/companies-portfolio-photos/poeticos/1-poeticos-inicio-modo-claro-mobile.png",
  },
  type: "photo",
  title: "Home page - light mode and mobile version",
};

const sonnetDarkModeMobile: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Sonnet poem content, details, and audio player in dark mode and mobile version",
    src: "/companies-portfolio-photos/poeticos/3-poeticos-soneto-modo-escuro-mobile.png",
  },
  type: "photo",
  title: "Sonnet poem page - dark mode and mobile version",
};

const sonnetLightModeMobile: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Sonnet poem content, details, and audio player in light mode and mobile version",
    src: "/companies-portfolio-photos/poeticos/3-poeticos-soneto-modo-claro-mobile.png",
  },
  type: "photo",
  title: "Sonnet poem page - light mode and mobile version",
};

const poemsListPageLightMode: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Poems list page preview in light mode",
    src: "/companies-portfolio-photos/poeticos/2-poeticos-lista-de-poemas-modo-claro.png",
  },
  type: "photo",
  title: "Haikais poems list page - light mode",
};

const homePagePreviuewInDarkMode: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Home page preview in dark mode",
    src: "/companies-portfolio-photos/poeticos/1-poeticos-inicio-modo-escuro.png",
  },
  type: "photo",
  title: "Home page - dark mode",
};

const poemsListPageInDarkMode: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Poems list page preview in dark mode",
    src: "/companies-portfolio-photos/poeticos/2-poeticos-lista-de-poemas-modo-escuro.png",
  },
  type: "photo",
  title: "Hejaz Ghazals poems list page - dark mode",
};

const homePagePreviewInLightMode: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Home page preview in light mode",
    src: "/companies-portfolio-photos/poeticos/1-poeticos-inicio-modo-claro.png",
  },
  type: "photo",
  title: "Home page - light mode",
};

const sonnetPoemPageLightMode: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Sonnet poem content, details, and audio player in light mode",
    src: "/companies-portfolio-photos/poeticos/3-poeticos-soneto-modo-claro.png",
  },
  type: "photo",
  title: "Sonnet poem page - light mode",
};

const hejazGhazalPoemDarkMode: IExperiencePhotoData = {
  photo: {
    alt: "Poéticos - Hejaz Ghazal poem content, details, and audio player in dark mode",
    src: "/companies-portfolio-photos/poeticos/3-poeticos-hejaz-ghazal-modo-escuro.png",
  },
  type: "photo",
  title: "Hejaz Ghazal poem page - dark mode",
};

const allPoeticosPhotos: IExperiencePhotoData[] = [
  homePagePreviewInLightModeAndMobile,
  sonnetDarkModeMobile,
  sonnetLightModeMobile,

  homePagePreviuewInDarkMode,
  sonnetPoemPageLightMode,
  poemsListPageInDarkMode,
  homePagePreviewInLightMode,
  poemsListPageLightMode,
  hejazGhazalPoemDarkMode,
];

export const allVictorProjects: (VictorExperienceType & {
  id: number;
})[] = [
  {
    id: 1,
    type: "present",
    startDate: "May-2024",

    company: {
      name: { children: "GeoGaburi" },
      websiteLink: { href: "https://geogaburi.com/" },
    },
    role: { children: "Software Engineer" },
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
        field: "backend",
        name: "PostgreSQL",
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

  {
    id: 2,
    type: "present",
    startDate: "August-2024",

    company: {
      name: { children: "Poéticos" },
      websiteLink: { href: "https://poeticos.com.br/" },
    },
    role: { children: "Software Engineer" },
    allSkills: [
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
        name: "Next",
      },

      {
        field: "frontend",
        name: "Tailwind",
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
        name: "AdSense",
      },
    ],
    allExperiencePhotos: {
      photos: allPoeticosPhotos,
    },
  },

  {
    id: 2,
    type: "present",
    startDate: "November-2025",

    company: {
      name: { children: "Fishmetry" },
      websiteLink: { href: "https://fishmetry.com" },
    },
    role: { children: "Software Engineer" },
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
        name: "Astro",
      },

      {
        field: "frontend",
        name: "React",
      },

      {
        field: "frontend",
        name: "Tailwind",
      },

      {
        field: "frontend",
        name: "CSS",
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
        field: "backend",
        name: "Render",
      },

      {
        field: "backend",
        name: "Netlify",
      },
    ],
    allExperiencePhotos: {
      photos: [
        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/1-fishmetry-landing-screen.png",
            alt: "Fishmetry - Landing Screen ",
          },
          type: "photo",
          title: "Landing Screen",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/2-fishmetry-blogs-list-screen.png",
            alt: "Fishmetry - Blogs List Screen ",
          },
          type: "photo",
          title: "Blogs List Screen",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/3-fishmetry-blog-details-screen-header.png",
            alt: "Fishmetry - Blog Details Screen Header",
          },
          type: "photo",
          title: "Blog Details Screen Header",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/4-fishmetry-blog-details-screen-body.png",
            alt: "Fishmetry - Blog Details Screen Body",
          },
          type: "photo",
          title: "Blog Details Screen Body",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/5-fishmetry-fish-details-screen-header.png",
            alt: "Fishmetry - Fish Details Screen Header",
          },
          type: "photo",
          title: "Fish Details Screen Header",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/6-fishmetry-fish-details-screen-recommended-product.png",
            alt: "Fishmetry - Fish Details Screen Recommended Product",
          },
          type: "photo",
          title: "Fish Details Screen Recommended Product",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/7-fishmetry-fish-details-screen-tank-mates.png",
            alt: "Fishmetry - Fish Details Screen Tank Mates",
          },
          type: "photo",
          title: "Fish Details Screen Tank Mates",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/8-fishmetry-fish-details-screen-faq-and-products-carousels.png",
            alt: "Fishmetry - Fish Details Screen FAQ and Products Carousels",
          },
          type: "photo",
          title: "Fish Details Screen FAQ and Products Carousels",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/9-fishmetry-shop-screen-header.png",
            alt: "Fishmetry - Shop Screen Header",
          },
          type: "photo",
          title: "Shop Screen Header",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/10-fishmetry-glossary-screen.png",
            alt: "Fishmetry - Glossary Screen",
          },
          type: "photo",
          title: "Glossary Screen",
        },

        {
          photo: {
            src: "/companies-portfolio-photos/fishmetry/11-fishmetry-glossary-term-screen.png",
            alt: "Fishmetry - Glossary Term Screen",
          },
          type: "photo",
          title: "Glossary Term Screen",
        },
      ],
    },
  },
];
