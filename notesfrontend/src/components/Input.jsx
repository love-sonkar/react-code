import React from "react";

const Input = ({ className, title, type, register }) => {
  return (
    <input
      {...register}
      type={type ?? "text"}
      placeholder={title}
      className={`${className}  outline-none border-b-2 border-blue-400 bg-transparent  px-1 py-2 text-blue-400 text-lg`}
    />
  );
};

export default Input;
