import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import AboutParagraph from "./AboutParagraph";
import AboutStrongText from "./AboutStrongText";

export default function AboutSection() {
  const VICTOR_PHOTO_ALT_TEXT =
    "Victor Camargo at the top of Caratuva Hill, on Antonina, Paraná, Brazil.";

  return (
    <SectionWrapper id="about-section">
      <SectionTitle hasDefaultMarginTop hasDefaultMarginBottom>
        My two cents <AboutStrongText>about me</AboutStrongText>
      </SectionTitle>

      <div className="flex flex-col gap-y-8 gap-x-0 lg:flex-row lg:items-center lg:gap-y-0 lg:gap-x-10 xl:gap-x-20">
        <div className="flex flex-col items-center w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] lg:order-2">
          <div className="flex flex-col items-center w-[85%] sm:w-[75%] md:w-[65%] lg:w-[100%]">
            <Image
              src="/victor-camargo-photo.jpeg"
              alt={VICTOR_PHOTO_ALT_TEXT}
              placeholder="blur"
              blurDataURL="/image-placeholder.png"
              sizes="100vw"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto", borderRadius: 20 }}
            />
          </div>

          <p className="mt-4 text-sm font-light dark:font-extralight">
            {VICTOR_PHOTO_ALT_TEXT}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-y-4 md:w-[75%] lg:w-[50%] lg:order-1">
          <AboutParagraph>
            I&apos;m Victor Camargo, a{" "}
            <AboutStrongText>frontend developer</AboutStrongText> and{" "}
            <AboutStrongText>mobile developer</AboutStrongText> based on
            Curitiba, Paraná, Brazil. I&apos;m currently working at Gigawrks and
            pursuing an Applied Artificial Intelligence graduation.
          </AboutParagraph>

          <AboutParagraph>
            I&apos;m a <AboutStrongText>linguaphile</AboutStrongText>,
            <AboutStrongText> cultural explorer</AboutStrongText>, and{" "}
            <AboutStrongText>bad hiker</AboutStrongText> - since I&apos;m quite
            inactive now. I&apos;m passionate about discovering more about
            countries, places, and cultures usually not mentioned on mainstream
            sources.
          </AboutParagraph>

          <AboutParagraph>
            I&apos;m a <AboutStrongText>fan of city builders</AboutStrongText>,{" "}
            <AboutStrongText>simulators</AboutStrongText>, and{" "}
            <AboutStrongText>RTS games</AboutStrongText> such as Caesar III,
            Empire Earth, C-evo, Warlords Battlecry III, and Rollercoaster
            Tycoon since I was a child.
          </AboutParagraph>

          <AboutParagraph>
            Contact me in case you want to have an independent, interested, and
            genuine developer. I&apos;m sure you&apos;ll like me - or something.
          </AboutParagraph>
        </div>
      </div>
    </SectionWrapper>
  );
}
