// /home/ubuntu/app/react_login/src/pages/settings-page/index.jsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Icon from "../../components/AppIcon";

const SettingsPage = () => {
  const [activeCategory, setActiveCategory] = useState("account");
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
  });
  const [appearance, setAppearance] = useState({
    theme: "light",
    fontSize: "medium",
    reducedMotion: false,
    highContrast: false,
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    activityStatus: true,
    dataSharing: false,
  });
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("UTC-05:00");
  
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({
      ...notifications,
      [name]: checked,
    });
    setUnsavedChanges(true);
  };

  const handleAppearanceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAppearance({
      ...appearance,
      [name]: type === "checkbox" ? checked : value,
    });
    setUnsavedChanges(true);
  };

  const handlePrivacyChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPrivacy({
      ...privacy,
      [name]: type === "checkbox" ? checked : value,
    });
    setUnsavedChanges(true);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setUnsavedChanges(true);
  };

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
    setUnsavedChanges(true);
  };

  const handleSaveChanges = () => {
    // In a real app, this would save changes to the server
    console.log("Settings saved", {
      notifications,
      appearance,
      privacy,
      language,
      timezone,
    });
    setUnsavedChanges(false);
  };

  const categories = [
    { id: "account", name: "Account", icon: "User" },
    { id: "security", name: "Security", icon: "ShieldCheck" },
    { id: "notifications", name: "Notifications", icon: "Bell" },
    { id: "appearance", name: "Appearance", icon: "PaintBucket" },
    { id: "privacy", name: "Privacy", icon: "Lock" },
  ];

  return (
    <Layout includeSidebar={true}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="heading-2 text-text-primary mb-2">Settings</h1>
          <p className="text-text-secondary">Manage your account preferences and application settings</p>
        </div>

        <div className="bg-background border border-border rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-4">
          {/* Settings Navigation */}
          <div className="md:col-span-1 border-r border-border">
            <nav className="py-4">
              <ul className="space-y-1">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center px-4 py-3 text-left ${activeCategory === category.id
                        ? 'bg-primary-light text-primary font-medium' :'text-text-secondary hover:bg-surface'}`}
                      aria-current={activeCategory === category.id ? 'page' : undefined}
                    >
                      <Icon name={category.icon} size={20} className="mr-3" />
                      <span>{category.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Settings Content */}
          <div className="md:col-span-3 p-6">
            {/* Account Settings */}
            {activeCategory === "account" && (
              <div>
                <h2 className="heading-4 text-text-primary mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-text-primary mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className="input-default"
                          defaultValue="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="input-default"
                          defaultValue="john.doe@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-medium text-text-primary mb-4">Regional Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="language" className="block text-sm font-medium text-text-primary mb-1">
                          Language
                        </label>
                        <select
                          id="language"
                          className="input-default"
                          value={language}
                          onChange={handleLanguageChange}
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="timezone" className="block text-sm font-medium text-text-primary mb-1">
                          Timezone
                        </label>
                        <select
                          id="timezone"
                          className="input-default"
                          value={timezone}
                          onChange={handleTimezoneChange}
                        >
                          <option value="UTC-08:00">Pacific Time (UTC-08:00)</option>
                          <option value="UTC-07:00">Mountain Time (UTC-07:00)</option>
                          <option value="UTC-06:00">Central Time (UTC-06:00)</option>
                          <option value="UTC-05:00">Eastern Time (UTC-05:00)</option>
                          <option value="UTC+00:00">UTC</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeCategory === "security" && (
              <div>
                <h2 className="heading-4 text-text-primary mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-4">Password</h3>
                    <button className="btn-secondary flex items-center">
                      <Icon name="Lock" size={16} className="mr-2" />
                      Change Password
                    </button>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-medium text-text-primary mb-4">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between bg-surface p-4 rounded-md">
                      <div className="flex items-center">
                        <div className="p-2 bg-primary-light rounded-full mr-3">
                          <Icon name="ShieldCheck" size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="text-text-primary font-medium">Two-factor authentication</h4>
                          <p className="text-text-secondary text-sm">Add an extra layer of security to your account</p>
                        </div>
                      </div>
                      <div>
                        <button className="btn-secondary">
                          Enable
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-medium text-text-primary mb-4">Session Management</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-surface p-4 rounded-md">
                        <div>
                          <h4 className="text-text-primary font-medium">Current Device</h4>
                          <p className="text-text-secondary text-sm">Chrome on Windows • Last active just now</p>
                        </div>
                        <div>
                          <span className="badge-success">Current</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-surface p-4 rounded-md">
                        <div>
                          <h4 className="text-text-primary font-medium">Safari on macOS</h4>
                          <p className="text-text-secondary text-sm">Last active 2 days ago</p>
                        </div>
                        <div>
                          <button className="text-error text-sm hover:underline">
                            Log out
                          </button>
                        </div>
                      </div>
                      
                      <button className="btn-tertiary text-sm w-full">
                        Log out of all devices
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeCategory === "notifications" && (
              <div>
                <h2 className="heading-4 text-text-primary mb-6">Notification Settings</h2>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Email Notifications</h4>
                        <p className="text-text-secondary text-sm">Receive notifications via email</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="emailNotifications"
                          name="emailNotifications"
                          checked={notifications.emailNotifications}
                          onChange={handleNotificationChange}
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Push Notifications</h4>
                        <p className="text-text-secondary text-sm">Receive notifications on your device</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="pushNotifications"
                          name="pushNotifications"
                          checked={notifications.pushNotifications}
                          onChange={handleNotificationChange}
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Marketing Emails</h4>
                        <p className="text-text-secondary text-sm">Receive promotional content and offers</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="marketingEmails"
                          name="marketingEmails"
                          checked={notifications.marketingEmails}
                          onChange={handleNotificationChange}
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Security Alerts</h4>
                        <p className="text-text-secondary text-sm">Get notified about login attempts and security issues</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="securityAlerts"
                          name="securityAlerts"
                          checked={notifications.securityAlerts}
                          onChange={handleNotificationChange}
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeCategory === "appearance" && (
              <div>
                <h2 className="heading-4 text-text-primary mb-6">Appearance Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-4">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className={`border ${appearance.theme === 'light' ? 'border-primary' : 'border-border'} rounded-md p-4 cursor-pointer`}
                        onClick={() => handleAppearanceChange({ target: { name: 'theme', value: 'light' } })}
                      >
                        <div className="h-16 bg-white border border-border rounded-md mb-2"></div>
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="themeLight" 
                            name="theme" 
                            value="light" 
                            checked={appearance.theme === 'light'}
                            onChange={handleAppearanceChange}
                            className="h-4 w-4 text-primary border-border focus:ring-primary"
                          />
                          <label htmlFor="themeLight" className="ml-2 text-text-primary">
                            Light
                          </label>
                        </div>
                      </div>
                      
                      <div className={`border ${appearance.theme === 'dark' ? 'border-primary' : 'border-border'} rounded-md p-4 cursor-pointer`}
                        onClick={() => handleAppearanceChange({ target: { name: 'theme', value: 'dark' } })}
                      >
                        <div className="h-16 bg-gray-800 rounded-md mb-2"></div>
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="themeDark" 
                            name="theme" 
                            value="dark" 
                            checked={appearance.theme === 'dark'}
                            onChange={handleAppearanceChange}
                            className="h-4 w-4 text-primary border-border focus:ring-primary"
                          />
                          <label htmlFor="themeDark" className="ml-2 text-text-primary">
                            Dark
                          </label>
                        </div>
                      </div>
                      
                      <div className={`border ${appearance.theme === 'system' ? 'border-primary' : 'border-border'} rounded-md p-4 cursor-pointer`}
                        onClick={() => handleAppearanceChange({ target: { name: 'theme', value: 'system' } })}
                      >
                        <div className="h-16 bg-gradient-to-r from-white to-gray-800 rounded-md mb-2"></div>
                        <div className="flex items-center">
                          <input 
                            type="radio" 
                            id="themeSystem" 
                            name="theme" 
                            value="system" 
                            checked={appearance.theme === 'system'}
                            onChange={handleAppearanceChange}
                            className="h-4 w-4 text-primary border-border focus:ring-primary"
                          />
                          <label htmlFor="themeSystem" className="ml-2 text-text-primary">
                            System
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-medium text-text-primary mb-4">Accessibility</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-text-primary font-medium">Reduced Motion</h4>
                          <p className="text-text-secondary text-sm">Minimize animations throughout the interface</p>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            id="reducedMotion"
                            name="reducedMotion"
                            checked={appearance.reducedMotion}
                            onChange={handleAppearanceChange}
                            className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-text-primary font-medium">High Contrast</h4>
                          <p className="text-text-secondary text-sm">Increase contrast for better readability</p>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            id="highContrast"
                            name="highContrast"
                            checked={appearance.highContrast}
                            onChange={handleAppearanceChange}
                            className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="fontSize" className="block text-sm font-medium text-text-primary mb-1">
                          Font Size
                        </label>
                        <select
                          id="fontSize"
                          name="fontSize"
                          value={appearance.fontSize}
                          onChange={handleAppearanceChange}
                          className="input-default"
                        >
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="x-large">Extra Large</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeCategory === "privacy" && (
              <div>
                <h2 className="heading-4 text-text-primary mb-6">Privacy Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-4">Profile Visibility</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="profilePublic"
                          name="profileVisibility"
                          value="public"
                          checked={privacy.profileVisibility === 'public'}
                          onChange={handlePrivacyChange}
                          className="h-4 w-4 text-primary border-border focus:ring-primary"
                        />
                        <label htmlFor="profilePublic" className="ml-2 text-text-primary">
                          Public - Anyone can view your profile
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="profilePrivate"
                          name="profileVisibility"
                          value="private"
                          checked={privacy.profileVisibility === 'private'}
                          onChange={handlePrivacyChange}
                          className="h-4 w-4 text-primary border-border focus:ring-primary"
                        />
                        <label htmlFor="profilePrivate" className="ml-2 text-text-primary">
                          Private - Only you can view your profile
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-medium text-text-primary mb-4">Activity Status</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Show activity status</h4>
                        <p className="text-text-secondary text-sm">Let others see when you're active</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="activityStatus"
                          name="activityStatus"
                          checked={privacy.activityStatus}
                          onChange={handlePrivacyChange}
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-medium text-text-primary mb-4">Data Sharing</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Allow data sharing</h4>
                        <p className="text-text-secondary text-sm">Share anonymous usage data to help improve our services</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="dataSharing"
                          name="dataSharing"
                          checked={privacy.dataSharing}
                          onChange={handlePrivacyChange}
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="btn-secondary text-sm text-error hover:text-error">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Changes Button */}
            {unsavedChanges && (
              <div className="mt-8 pt-6 border-t border-border flex justify-end">
                <button
                  onClick={handleSaveChanges}
                  className="btn-primary"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;