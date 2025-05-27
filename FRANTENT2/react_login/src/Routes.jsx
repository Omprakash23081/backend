import React from "react";
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/login-page";
import RegistrationPage from "./pages/registration-page";
import Dashboard from "./pages/dashboard";
import ProfilePage from "./pages/profile-page";
import ForgotPasswordPage from "./pages/forgot-password-page";
import PasswordResetPage from "./pages/password-reset-page";
import SettingsPage from "./pages/settings-page";
import NotFoundPage from "./pages/404-not-found-page";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/registration-page" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/forgot-password-page" element={<ForgotPasswordPage />} />
        <Route path="/password-reset-page" element={<PasswordResetPage />} />
        <Route path="/settings-page" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </RouterRoutes>
    </Router>
  );
};

export default Routes;