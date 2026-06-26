import Image from "next/image";
import PortfolioPrimaryButton from "@/components/atomic/atoms/PortfolioPrimaryButton/PortfolioPrimaryButton";
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
            <AboutStrongText>software engineer</AboutStrongText> specializing in{" "}
            <AboutStrongText>frontend development</AboutStrongText> and{" "}
            <AboutStrongText>mobile development</AboutStrongText>, with
            experience in{" "}
            <AboutStrongText>full-stack development</AboutStrongText>, based in{" "}
            Curitiba Paraná, Brazil.
          </AboutParagraph>

          <AboutParagraph>
            I&apos;m a <AboutStrongText>linguaphile</AboutStrongText>,{" "}
            <AboutStrongText>technology enthusiast</AboutStrongText>, and{" "}
            <AboutStrongText>cultural explorer</AboutStrongText> with a strong
            interest in <AboutStrongText>countries</AboutStrongText>,{" "}
            <AboutStrongText>places</AboutStrongText>, and{" "}
            <AboutStrongText>cultures</AboutStrongText> that are often
            overlooked.
          </AboutParagraph>

          <AboutParagraph>
            I&apos;ve been passionate about city builders, simulators, and RTS
            games since childhood, from{" "}
            <AboutStrongText>Caesar III</AboutStrongText> and{" "}
            <AboutStrongText>Empire Earth</AboutStrongText> to{" "}
            <AboutStrongText>RollerCoaster Tycoon</AboutStrongText> and{" "}
            <AboutStrongText>Warlords Battlecry III</AboutStrongText>.
          </AboutParagraph>

          <AboutParagraph>
            Feel free to reach out if you’re looking for a{" "}
            <AboutStrongText>curious</AboutStrongText>,{" "}
            <AboutStrongText>independent</AboutStrongText>, and{" "}
            <AboutStrongText>culturally driven</AboutStrongText> developer.
          </AboutParagraph>

          <PortfolioPrimaryButton
            variant="default"
            borderRadius="rounded-full"
            className="mt-4 self-start w-full"
            href="#contact-section">
            Contact Me
          </PortfolioPrimaryButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
