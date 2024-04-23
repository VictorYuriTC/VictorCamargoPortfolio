import { ValidationError } from "@formspree/react";
import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

interface IContactInput {
  state: any;
  input: InputHTMLAttributes<HTMLInputElement>;
  label: LabelHTMLAttributes<HTMLLabelElement> & {
    text: string;
  };
}

export default function ContactInput(props: IContactInput) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.input.name} className="text-lg font-semibold">
        {props.label.text}
      </label>

      <input
        id={props.input.name}
        type={props.input.type}
        name={props.input.name}
        placeholder={props.input.placeholder}
        className="mt-1 px-2 py-2 bg-transparent border rounded caret-gray-500 outline-none placeholder:text-gray-350 focus:shadow-outline focus:border-purple-700 text-black border-gray-200 dark:text-white dark:border-gray-900 dark:focus:border-purple-900 dark:placeholder:text-gray-700"
      />

      <ValidationError
        prefix={props.label.text}
        field={props.input.name}
        errors={props.state.errors}
      />
    </div>
  );
}
