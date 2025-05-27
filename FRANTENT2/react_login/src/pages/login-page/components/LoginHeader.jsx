import React from "react";
import Image from "../../../components/AppImage";

const LoginHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
          <Image 
            src="https://assets.codepen.io/6060109/react-logo.png" 
            alt="React Logo" 
            className="w-8 h-8"
          />
        </div>
      </div>
      <h1 className="heading-2 text-text-primary mb-2">Welcome back</h1>
      <p className="text-text-secondary body-small">
        Enter your credentials to access your account
      </p>
    </div>
  );
};

export default LoginHeader;