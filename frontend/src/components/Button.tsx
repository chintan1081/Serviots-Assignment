import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="w-full cursor-pointer mt-4 rounded-lg bg-white py-3 font-semibold text-black
                 hover:bg-gray-200 transition disabled:opacity-50"
    >
      {title}
    </button>
  );
};

export default Button;
