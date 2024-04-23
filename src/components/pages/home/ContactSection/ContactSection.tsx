"use client";

import PortfolioPrimaryButton from "@/components/atomic/atoms/PortfolioPrimaryButton/PortfolioPrimaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { useForm } from "@formspree/react";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";

export interface IContactForm {
  email: string;
  message: string;
  subject: string;
}

export default function ContactSection() {
  const [state, handleOnSubmitContactForm] = useForm("meqyvplq");

  return (
    <SectionWrapper id="contact-section">
      <SectionTitle hasDefaultMarginTop hasDefaultMarginBottom>
        Contact
      </SectionTitle>

      {state.succeeded && (
        <div className="flex flex-col duration-500 p-5 rounded hover:shadow-[0px_0px_7px_theme(colors.purple.500)] border border-gray-300 dark:border-gray-900">
          <strong className="font-semibold text-xl lg:text-2xl">
            You&apos;re message has been received!
          </strong>

          <span className="mt-1 font-light text-base dark:font-extralight lg:text-lg">
            I&apos;ll get back to you as soon as possible - so play a game in
            the meanwhile!{" "}
          </span>

          <strong className="text-purple-500 font-semibold text-lg lg:text-xl">
            {"Thank you :)"}
          </strong>

          <div className="flex flex-row mt-6">
            <PortfolioPrimaryButton
              disabled={true}
              variant="default"
              borderRadius="rounded-full"
              className="disabled:">
              {"Under Construction" || "Start Game"}
            </PortfolioPrimaryButton>
          </div>
        </div>
      )}

      {!state.succeeded && (
        <form
          onSubmit={handleOnSubmitContactForm}
          className="flex flex-col gap-y-2">
          <ContactInput
            state={state}
            label={{
              text: "Email",
            }}
            input={{
              type: "email",
              name: "email",
              placeholder: "victoryuritc@yahoo.com",
            }}
          />

          <ContactInput
            state={state}
            label={{
              text: "Subject",
            }}
            input={{
              type: "text",
              name: "subject",
              placeholder: "Project opportunity",
            }}
          />

          <ContactTextarea
            state={state}
            label={{
              text: "Message",
            }}
            textarea={{
              name: "message",
              placeholder: "Let me know if you are interested...",
            }}
          />

          <div className="flex flex-row justify-center">
            <PortfolioPrimaryButton
              variant="default"
              className={`mt-10 w-full md:w-[50%] lg:w-[35%]`}
              disabled={state.submitting || state.succeeded}
              type="submit"
              borderRadius="rounded-full">
              {state.submitting
                ? "Loading"
                : state.succeeded
                ? "Message Sent"
                : "Send Message"}
            </PortfolioPrimaryButton>
          </div>
        </form>
      )}
    </SectionWrapper>
  );
}
