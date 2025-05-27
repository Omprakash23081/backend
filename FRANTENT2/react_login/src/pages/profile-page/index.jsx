// /home/ubuntu/app/react_login/src/pages/profile-page/index.jsx
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Icon from "../../components/AppIcon";
import Image from "../../components/AppImage";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Senior Software Developer with expertise in React and Node.js. Passionate about creating intuitive user experiences and clean code.",
    website: "https://johndoe.example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  });

  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (field) => {
    setIsEditing(field);
    setEditFormData({ ...editFormData, [field]: profileData[field] });
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
  };

  const handleSaveEdit = (field) => {
    setProfileData({ ...profileData, [field]: editFormData[field] });
    setIsEditing(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  return (
    <Layout includeSidebar={true}>
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="card mb-6 overflow-hidden">
          <div className="bg-primary-light bg-opacity-30 h-32 relative">
            <div className="absolute -bottom-16 left-6 bg-white p-1 rounded-full border-4 border-white">
              <Image
                src={profileData.avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full"
              />
            </div>
          </div>
          <div className="pt-20 pb-6 px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="heading-2 text-text-primary mb-1">{profileData.name}</h1>
                <p className="text-text-secondary">{profileData.location}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button className="btn-primary flex items-center">
                  <Icon name="Edit" size={16} className="mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-text-secondary">{profileData.bio}</p>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="card">
          <div className="border-b border-border">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab("personal")}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === "personal" ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"}`}
              >
                Personal Information
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === "security" ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"}`}
              >
                Security
              </button>
              <button
                onClick={() => setActiveTab("preferences")}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${activeTab === "preferences" ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"}`}
              >
                Preferences
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "personal" && (
              <div className="space-y-6">
                <h2 className="heading-5 text-text-primary mb-4">Personal Information</h2>
                
                {/* Name */}
                <div className="border-b border-border pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-text-tertiary">Full Name</label>
                    {isEditing !== "name" && (
                      <button 
                        onClick={() => handleEditClick("name")} 
                        className="text-primary text-sm hover:underline flex items-center"
                      >
                        <Icon name="Edit2" size={14} className="mr-1" />
                        Edit
                      </button>
                    )}
                  </div>
                  
                  {isEditing === "name" ? (
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name || ""}
                        onChange={handleInputChange}
                        className="input-default mb-2"
                      />
                      <div className="flex space-x-2">
                        <button onClick={() => handleSaveEdit("name")} className="btn-primary text-sm py-1">
                          Save
                        </button>
                        <button onClick={handleCancelEdit} className="btn-secondary text-sm py-1">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-text-primary">{profileData.name}</p>
                  )}
                </div>
                
                {/* Email */}
                <div className="border-b border-border pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-text-tertiary">Email Address</label>
                    {isEditing !== "email" && (
                      <button 
                        onClick={() => handleEditClick("email")} 
                        className="text-primary text-sm hover:underline flex items-center"
                      >
                        <Icon name="Edit2" size={14} className="mr-1" />
                        Edit
                      </button>
                    )}
                  </div>
                  
                  {isEditing === "email" ? (
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={editFormData.email || ""}
                        onChange={handleInputChange}
                        className="input-default mb-2"
                      />
                      <div className="flex space-x-2">
                        <button onClick={() => handleSaveEdit("email")} className="btn-primary text-sm py-1">
                          Save
                        </button>
                        <button onClick={handleCancelEdit} className="btn-secondary text-sm py-1">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-text-primary">{profileData.email}</p>
                  )}
                </div>
                
                {/* Phone */}
                <div className="border-b border-border pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-text-tertiary">Phone Number</label>
                    {isEditing !== "phone" && (
                      <button 
                        onClick={() => handleEditClick("phone")} 
                        className="text-primary text-sm hover:underline flex items-center"
                      >
                        <Icon name="Edit2" size={14} className="mr-1" />
                        Edit
                      </button>
                    )}
                  </div>
                  
                  {isEditing === "phone" ? (
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={editFormData.phone || ""}
                        onChange={handleInputChange}
                        className="input-default mb-2"
                      />
                      <div className="flex space-x-2">
                        <button onClick={() => handleSaveEdit("phone")} className="btn-primary text-sm py-1">
                          Save
                        </button>
                        <button onClick={handleCancelEdit} className="btn-secondary text-sm py-1">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-text-primary">{profileData.phone}</p>
                  )}
                </div>
                
                {/* Location */}
                <div className="border-b border-border pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-text-tertiary">Location</label>
                    {isEditing !== "location" && (
                      <button 
                        onClick={() => handleEditClick("location")} 
                        className="text-primary text-sm hover:underline flex items-center"
                      >
                        <Icon name="Edit2" size={14} className="mr-1" />
                        Edit
                      </button>
                    )}
                  </div>
                  
                  {isEditing === "location" ? (
                    <div>
                      <input
                        type="text"
                        name="location"
                        value={editFormData.location || ""}
                        onChange={handleInputChange}
                        className="input-default mb-2"
                      />
                      <div className="flex space-x-2">
                        <button onClick={() => handleSaveEdit("location")} className="btn-primary text-sm py-1">
                          Save
                        </button>
                        <button onClick={handleCancelEdit} className="btn-secondary text-sm py-1">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-text-primary">{profileData.location}</p>
                  )}
                </div>
                
                {/* Bio */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-text-tertiary">Bio</label>
                    {isEditing !== "bio" && (
                      <button 
                        onClick={() => handleEditClick("bio")} 
                        className="text-primary text-sm hover:underline flex items-center"
                      >
                        <Icon name="Edit2" size={14} className="mr-1" />
                        Edit
                      </button>
                    )}
                  </div>
                  
                  {isEditing === "bio" ? (
                    <div>
                      <textarea
                        name="bio"
                        value={editFormData.bio || ""}
                        onChange={handleInputChange}
                        className="input-default mb-2 h-24"
                      />
                      <div className="flex space-x-2">
                        <button onClick={() => handleSaveEdit("bio")} className="btn-primary text-sm py-1">
                          Save
                        </button>
                        <button onClick={handleCancelEdit} className="btn-secondary text-sm py-1">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-text-primary">{profileData.bio}</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h2 className="heading-5 text-text-primary mb-4">Security Settings</h2>
                <div className="space-y-6">
                  {/* Change Password Section */}
                  <div className="border-b border-border pb-6">
                    <h3 className="text-lg font-medium text-text-primary mb-4">Change Password</h3>
                    <form className="space-y-4 max-w-md">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-text-primary mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="input-default"
                          placeholder="Enter your current password"
                        />
                      </div>
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-text-primary mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="input-default"
                          placeholder="Enter a new password"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="input-default"
                          placeholder="Confirm your new password"
                        />
                      </div>
                      <button type="button" className="btn-primary mt-2">
                        Update Password
                      </button>
                    </form>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="pb-6">
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
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div>
                <h2 className="heading-5 text-text-primary mb-4">Preferences</h2>
                
                {/* Notification Settings */}
                <div className="border-b border-border pb-6 mb-6">
                  <h3 className="text-lg font-medium text-text-primary mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Email Notifications</h4>
                        <p className="text-text-secondary text-sm">Receive emails about account activity</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="emailNotifications"
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                          defaultChecked
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Security Alerts</h4>
                        <p className="text-text-secondary text-sm">Get notified about login attempts</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="securityAlerts"
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                          defaultChecked
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-text-primary font-medium">Product Updates</h4>
                        <p className="text-text-secondary text-sm">Learn about new features and updates</p>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="productUpdates"
                          className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Display Settings */}
                <div>
                  <h3 className="text-lg font-medium text-text-primary mb-4">Display Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="theme" className="block text-sm font-medium text-text-primary mb-1">
                        Theme
                      </label>
                      <select
                        id="theme"
                        className="input-default"
                        defaultValue="light"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System Default</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-text-primary mb-1">
                        Language
                      </label>
                      <select
                        id="language"
                        className="input-default"
                        defaultValue="en"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                    
                    <div className="pt-4">
                      <button className="btn-primary">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;