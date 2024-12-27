import { type ButtonHTMLAttributes } from "react";

// extends native type to add custom props
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="w-[100px] border-2 border-black rounded-lg"
      type="button"
      {...props}
    >
      {props.label}
    </button>
  );
};
