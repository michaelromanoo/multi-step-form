import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  flat: string;
  floor: string;
  block: string;
  street: string;
}

function App() {
  const [step, setStep] = useState<"step-1" | "step-2" | "review">("step-1");
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("form data", data);
  };

  return (
    <>
      <h1 className="text-center">Multi step form</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {/* NOTE: will this cause any re-renders? */}
        {step === "step-1" && (
          <>
            <h2>Step 1: Personal Details</h2>
            <Input
              label="First Name"
              placeholder="First name"
              {...register("firstName")}
            />
            <Input
              label="Last Name"
              placeholder="Last name"
              {...register("lastName")}
            />
            <Input label="Email" placeholder="Email" {...register("email")} />
            <Button label="Next" onClick={() => setStep("step-2")} />
          </>
        )}
        {step === "step-2" && (
          <>
            <h2>Step 2: Residential Address</h2>
            <Input label="Flat" placeholder="Flat" {...register("flat")} />
            <Input label="Floor" placeholder="Floor" {...register("floor")} />
            <Input label="block" placeholder="Block" {...register("block")} />
            <div className="flex flex-row gap-4">
              <Button label="Back" onClick={() => setStep("step-1")} />
              <Button label="Next" onClick={() => setStep("review")} />
            </div>
          </>
        )}
        {step === "review" && (
          <>
            <h2>Review Details</h2>
            <div className="flex flex-row gap-4">
              <Button label="Back" onClick={() => setStep("step-2")} />
              <Button label="Next" type="submit" />
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default App;
