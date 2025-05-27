// /home/ubuntu/app/react_login/src/pages/dashboard/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Icon from "../../components/AppIcon";

const Dashboard = () => {
  // Mock data for dashboard
  const stats = [
    { id: 1, name: "Total Users", value: "2,543", icon: "Users", change: "+12.5%", changeType: "increase" },
    { id: 2, name: "Active Sessions", value: "1,873", icon: "Activity", change: "+8.2%", changeType: "increase" },
    { id: 3, name: "Conversion Rate", value: "3.6%", icon: "BarChart", change: "-2.1%", changeType: "decrease" },
    { id: 4, name: "Avg. Session Duration", value: "2m 34s", icon: "Clock", change: "+0.8%", changeType: "increase" },
  ];

  const recentActivities = [
    { id: 1, user: "John Doe", action: "Logged in", time: "5 minutes ago", icon: "LogIn" },
    { id: 2, user: "Sarah Miller", action: "Updated profile", time: "2 hours ago", icon: "UserCog" },
    { id: 3, user: "Robert Johnson", action: "Changed password", time: "1 day ago", icon: "Lock" },
    { id: 4, user: "Emily Parker", action: "Uploaded document", time: "2 days ago", icon: "FileText" },
  ];

  return (
    <Layout includeSidebar={true}>
      <div className="max-w-7xl mx-auto">
        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="heading-2 text-text-primary mb-2">Welcome back, User</h1>
          <p className="text-text-secondary">Here's what's happening with your account today.</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.id} className="card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-text-secondary text-sm mb-1">{stat.name}</p>
                  <h3 className="heading-3 text-text-primary mb-2">{stat.value}</h3>
                  <div className={`flex items-center text-sm ${stat.changeType === 'increase' ? 'text-success' : 'text-error'}`}>
                    <Icon 
                      name={stat.changeType === 'increase' ? 'TrendingUp' : 'TrendingDown'} 
                      size={16} 
                      className="mr-1" 
                    />
                    <span>{stat.change} from last week</span>
                  </div>
                </div>
                <div className="p-3 bg-primary-light rounded-full">
                  <Icon name={stat.icon} size={20} className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick actions */}
          <div className="lg:col-span-1 card overflow-visible">
            <div className="card-header">
              <h2 className="heading-5 text-text-primary">Quick Actions</h2>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                <Link 
                  to="/profile-page" 
                  className="flex items-center p-3 rounded-md hover:bg-surface transition-colors"
                >
                  <div className="p-2 bg-primary-light rounded-md mr-3">
                    <Icon name="User" size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-medium mb-0.5">View Profile</h3>
                    <p className="text-text-secondary text-sm">Check your personal information</p>
                  </div>
                </Link>

                <Link 
                  to="/settings-page" 
                  className="flex items-center p-3 rounded-md hover:bg-surface transition-colors"
                >
                  <div className="p-2 bg-primary-light rounded-md mr-3">
                    <Icon name="Settings" size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-medium mb-0.5">Account Settings</h3>
                    <p className="text-text-secondary text-sm">Manage your preferences</p>
                  </div>
                </Link>

                <Link 
                  to="/forgot-password-page" 
                  className="flex items-center p-3 rounded-md hover:bg-surface transition-colors"
                >
                  <div className="p-2 bg-primary-light rounded-md mr-3">
                    <Icon name="ShieldCheck" size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-medium mb-0.5">Security Settings</h3>
                    <p className="text-text-secondary text-sm">Update your password</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="lg:col-span-2 card overflow-visible">
            <div className="card-header">
              <h2 className="heading-5 text-text-primary">Recent Activity</h2>
            </div>
            <div className="p-0">
              <ul className="divide-y divide-border">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="p-4 hover:bg-surface transition-colors">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary-light rounded-full mr-4">
                        <Icon name={activity.icon} size={18} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-text-primary font-medium">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-text-tertiary text-sm">{activity.time}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-4 border-t border-border text-center">
                <button className="btn-tertiary text-sm">View All Activity</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;