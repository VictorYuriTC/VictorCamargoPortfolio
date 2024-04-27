import { VICTOR_PORTFOLIO_BASE_URL } from "@/constants";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Victor Camargo Dev",
    short_name: "Victor Camargo",
    description:
      "Victor Camargo Dev | My two cents about me. Portfolio website created by Victor Yuri Tavares de Camargo. Frontend developer and mobile developer from Curitiba, Paraná, Brazil.",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: [
      "portfolio",
      "frontend development",
      "web development",
      "mobile development",
      "frontend",
    ],
    lang: "en-US",
    shortcuts: [
      {
        name: "Victor Camargo Dev",
        url: VICTOR_PORTFOLIO_BASE_URL,
        description:
          "Victor Camargo Dev | Portfolio built by Victor Yuri Tavares de Camargo. Frontend developer and mobile developer from Curitiba, Paraná, Brazil.",
        short_name: "Victor Camargo",
      },
    ],
    orientation: "landscape-primary",
  };
}
