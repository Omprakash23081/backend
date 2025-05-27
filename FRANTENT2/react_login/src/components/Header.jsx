// /home/ubuntu/app/react_login/src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './AppIcon';
import Image from './AppImage';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-background border-b border-border py-3 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center">
              <Image 
                src="https://assets.codepen.io/6060109/react-logo.png" 
                alt="React Logo" 
                className="w-5 h-5"
              />
            </div>
            <span className="text-text-primary font-medium text-lg hidden md:block">React Login</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/profile-page" 
            className={`p-2 rounded-full ${location.pathname === '/profile-page' ? 'bg-primary-light text-primary' : 'text-text-secondary hover:bg-surface'}`}
            aria-label="Profile"
          >
            <Icon name="User" size={20} />
          </Link>
          
          <Link 
            to="/settings-page" 
            className={`p-2 rounded-full ${location.pathname === '/settings-page' ? 'bg-primary-light text-primary' : 'text-text-secondary hover:bg-surface'}`}
            aria-label="Settings"
          >
            <Icon name="Settings" size={20} />
          </Link>
          
          <Link 
            to="/login" 
            className="p-2 rounded-full text-text-secondary hover:bg-surface"
            aria-label="Logout"
          >
            <Icon name="LogOut" size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;