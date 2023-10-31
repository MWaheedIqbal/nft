import React, { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button
      className="px-10 py-3 hover:shadow-lg text-base font-medium hover:scale-105 duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
