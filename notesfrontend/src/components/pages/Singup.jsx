import React from "react";
import Button from "../Button";
import Errors from "../Errors";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";

const Singup = () => {
  const schema = z.object({
    name: z.string().min(3, { message: "minimum 3 charecter" }),
    email: z.string().email({ message: "not a valid email" }),
    password: z.string().min(3, { message: "minimum 3 charecter" }),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const singupSubmit = async (data) => {
    const response = await axios.post(
      "http://localhost:3000/singup/user",
      data
    );
    console.log(response.data);
    if (response?.status == "failed") {
      return toast.error(response.data.message);
    }
    toast.success(response.data.message);
    reset();
  };

  return (
    <section className="bg-slate-300 h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(singupSubmit)}
        className="max-w-max bg-stone-300 p-4 flex flex-col gap-4 shadow-lg rounded"
      >
        <h2 className="text-2xl ">Singup Here</h2>
        <div>
          <Input register={register("name")} type="text" title="Name" />
          {errors?.name && <Errors>{errors?.name?.message}</Errors>}
        </div>
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
          <Button title="Singup" formNoValidate />
        </div>
      </form>
    </section>
  );
};

export default Singup;
