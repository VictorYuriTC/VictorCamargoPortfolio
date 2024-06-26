import { ValidationError } from "@formspree/react";
import {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

interface IContactTextarea {
  state: any;
  textarea: TextareaHTMLAttributes<HTMLTextAreaElement>;
  label: LabelHTMLAttributes<HTMLLabelElement> & {
    text: string;
  };
}

export default function ContactTextarea(props: IContactTextarea) {
  return (
    <div className="flex flex-col">
      <label htmlFor="message" className="text-lg font-semibold">
        {props.label.text}
      </label>

      <textarea
        id={props.textarea.name}
        name={props.textarea.name}
        placeholder={props.textarea.placeholder}
        className="mt-1 px-2 py-2 bg-transparent rounded h-40 border resize-none caret-gray-500 placeholder:text-gray-350 focus:shadow-outline outline-none focus:shadow-outline  text-black border-gray-200 dark:text-white dark:border-gray-900 focus:border-purple-700 dark:focus:border-purple-900 dark:placeholder:text-gray-700"
      />
      <ValidationError
        prefix={props.label.text}
        field={props.textarea.name}
        errors={props.state.errors}
      />
    </div>
  );
}
