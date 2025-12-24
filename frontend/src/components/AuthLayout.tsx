import React from "react";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-gray-900 to-black p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-wide">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
