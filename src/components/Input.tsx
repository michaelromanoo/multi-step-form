import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="flex flex-col gap-2">
      {props.label && <label>{props.label}</label>}
      <input
        ref={ref}
        className="border-2 border-black rounded-lg px-4 bg-white"
        {...props}
      />
    </div>
  );
});
