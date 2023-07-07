import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import Errors from "../Errors";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const schema = z.object({
    email: z.string().email({ message: "Please enter valid email" }),
    password: z.string().min(3, { message: "minimum 3 charecter" }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="bg-slate-300 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-max bg-stone-300 p-4 flex flex-col gap-4 shadow-lg rounded"
      >
        <h2 className="text-2xl ">Login Here</h2>
        <div>
          <Input register={register("email")} type="email" title="Email" />
          {errors?.email && <Errors>{errors?.email?.message}</Errors>}
        </div>
        <div>
          <Input
            register={register("password")}
            type="password"
            title="Password"
          />
          {errors?.password && <Errors>{errors?.password?.message} </Errors>}
        </div>
        <div>
          <Button title="Login" formNoValidate />
        </div>
      </form>
    </section>
  );
};
export default Login;
