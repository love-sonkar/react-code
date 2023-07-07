import React from "react";

const Button = ({ className, title, ...props }) => {
  return (
    <button
      className={`${className} rounded  py-2 px-3 bg-blue-400 text-white `}
      {...props}
    >
      {title ?? "Submit"}
    </button>
  );
};

export default Button;
