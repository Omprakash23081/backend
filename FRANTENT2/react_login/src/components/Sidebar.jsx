// /home/ubuntu/app/react_login/src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './AppIcon';

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
    { name: 'Profile', path: '/profile-page', icon: 'User' },
    { name: 'Settings', path: '/settings-page', icon: 'Settings' },
  ];
  
  return (
    <div 
      className={`bg-background border-r border-border h-full transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="p-4 flex justify-end">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="p-1 rounded-full hover:bg-surface text-text-secondary"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <Icon name={isCollapsed ? 'ChevronRight' : 'ChevronLeft'} size={20} />
        </button>
      </div>
      
      <nav className="mt-6">
        <ul className="space-y-2 px-3">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center py-3 px-4 rounded-md transition-colors ${location.pathname === item.path
                  ? 'bg-primary-light text-primary' :'text-text-secondary hover:bg-surface'}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <Icon name={item.icon} size={20} className="flex-shrink-0" />
                {!isCollapsed && (
                  <span className="ml-3 transition-opacity">{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;