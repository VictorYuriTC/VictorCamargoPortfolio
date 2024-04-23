"use client";

import PortfolioPrimaryButton from "@/components/atomic/atoms/PortfolioPrimaryButton/PortfolioPrimaryButton";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { useForm, ValidationError } from "@formspree/react";
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
    <SectionWrapper>
      <SectionTitle hasDefaultMarginTop hasDefaultMarginBottom>
        Contact Me
      </SectionTitle>

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
              className="mt-10 w-full md:w-[50%] lg:w-[35%]"
              disabled={state.submitting}
              type="submit"
              borderRadius="rounded-full">
              Send Message
            </PortfolioPrimaryButton>
          </div>
        </form>
      )}
    </SectionWrapper>
  );
}
