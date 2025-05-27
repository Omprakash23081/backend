import React, { useState } from "react";
import { Link } from "react-router-dom";


import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";
import LoginHeader from "./components/LoginHeader";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md">
        <div className="bg-background rounded-xl shadow-lg p-6 sm:p-8 border border-border">
          <LoginHeader />
          <LoginForm />
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-text-tertiary">
                Or continue with
              </span>
            </div>
          </div>
          
          <SocialLogin />
          
          <div className="mt-6 text-center">
            <p className="text-text-secondary text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;