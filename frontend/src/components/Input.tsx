import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm text-gray-400">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white
                   focus:outline-none focus:border-white transition"
      />
    </div>
  );
};

export default Input;
