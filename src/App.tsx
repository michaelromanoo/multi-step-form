import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

function App() {
  const { register, handleSubmit, getValues } = useForm<IFormInput>();
  const values = getValues();
  // TODO: send these values to context
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <h1 className="text-center">Multi step form</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        <Button label="Next" type="submit" />
      </form>
    </>
  );
}

export default App;
