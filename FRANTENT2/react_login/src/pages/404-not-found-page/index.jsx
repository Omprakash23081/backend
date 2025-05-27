// /home/ubuntu/app/react_login/src/pages/404-not-found-page/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/AppIcon";
import Header from "../../components/Header";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-lg text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="heading-2 text-text-primary mb-4">Page Not Found</h2>
            <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard" className="btn-primary flex items-center justify-center">
                <Icon name="Home" size={18} className="mr-2" />
                Return to Dashboard
              </Link>
              
              <Link to="/" className="btn-secondary flex items-center justify-center">
                <Icon name="LogIn" size={18} className="mr-2" />
                Go to Homepage
              </Link>
            </div>
          </div>
          
          <div className="p-4 bg-background rounded-lg border border-border">
            <h3 className="text-lg font-medium text-text-primary mb-2">Looking for something?</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="input-default pl-10 pr-4 w-full"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Icon name="Search" size={18} className="text-text-tertiary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;