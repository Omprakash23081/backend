// /home/ubuntu/app/react_login/src/pages/password-reset-page/index.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../components/AppIcon";
import Header from "../../components/Header";

const PasswordResetPage = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [tokenValid, setTokenValid] = useState(true);
  
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would validate the token from URL params
    // For this demo, we'll simulate a valid token
    const checkToken = () => {
      // Simulate API call to validate token
      // For demo purposes, we'll assume the token is valid
      setTokenValid(true);
    };
    
    checkToken();
  }, []);

  useEffect(() => {
    let timer;
    if (resetSuccess) {
      timer = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate("/login");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [resetSuccess, navigate]);

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 8) {
          error = "Password must be at least 8 characters";
        }
        break;
      case "confirmPassword":
        if (!value) {
          error = "Please confirm your password";
        } else if (value !== formData.password) {
          error = "Passwords don't match";
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const calculatePasswordStrength = (password) => {
    if (!password) return 0;
    
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 1;
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 1;
    
    // Contains numbers
    if (/[0-9]/.test(password)) strength += 1;
    
    // Contains special characters
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return Math.min(Math.floor((strength / 6) * 100), 100);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
    
    // Calculate password strength
    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
      
      // If confirm password already has a value, check if it still matches
      if (formData.confirmPassword) {
        const confirmError = value !== formData.confirmPassword ? "Passwords don't match" : "";
        setErrors({
          ...errors,
          confirmPassword: confirmError,
        });
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setResetSuccess(true);
    }, 1500);
  };

  const getPasswordStrengthLabel = () => {
    if (passwordStrength < 40) return { text: "Weak", color: "error" };
    if (passwordStrength < 70) return { text: "Moderate", color: "warning" };
    return { text: "Strong", color: "success" };
  };

  if (!tokenValid) {
    return (
      <div className="min-h-screen bg-surface flex flex-col">
        <Header />
        
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-md">
            <div className="bg-background rounded-xl shadow-lg p-6 sm:p-8 border border-border text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-error bg-opacity-10 rounded-full flex items-center justify-center">
                  <Icon name="AlertTriangle" size={24} className="text-error" />
                </div>
              </div>
              <h1 className="heading-3 text-text-primary mb-2">Invalid or Expired Link</h1>
              <p className="text-text-secondary mb-6">
                The password reset link is invalid or has expired. Please request a new password reset link.
              </p>
              
              <Link to="/forgot-password-page" className="btn-primary w-full justify-center">
                Request New Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md">
          <div className="bg-background rounded-xl shadow-lg p-6 sm:p-8 border border-border">
            {!resetSuccess ? (
              <>
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                      <Icon name="Lock" size={24} className="text-primary" />
                    </div>
                  </div>
                  <h1 className="heading-2 text-text-primary mb-2">Reset Your Password</h1>
                  <p className="text-text-secondary body-small">
                    Create a new password for your account
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-1">
                      New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon name="Lock" size={18} className="text-text-tertiary" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-default pl-10 pr-10 ${errors.password ? 'border-error focus:border-error focus:ring-error' : ''}`}
                        placeholder="Create a new password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon 
                          name={showPassword ? "EyeOff" : "Eye"} 
                          size={18} 
                          className="text-text-tertiary hover:text-text-secondary"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        />
                      </button>
                    </div>
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <div className="w-full bg-border rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${passwordStrength < 40 ? 'bg-error' : passwordStrength < 70 ? 'bg-warning' : 'bg-success'}`}
                              style={{ width: `${passwordStrength}%` }}
                            ></div>
                          </div>
                          <span className={`ml-2 text-xs font-medium text-${getPasswordStrengthLabel().color}`}>
                            {getPasswordStrengthLabel().text}
                          </span>
                        </div>
                        <p className="text-xs text-text-tertiary">
                          Use 8+ characters with a mix of letters, numbers & symbols
                        </p>
                      </div>
                    )}
                    {errors.password && (
                      <p className="mt-1 text-sm text-error">{errors.password}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-1">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon name="Lock" size={18} className="text-text-tertiary" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`input-default pl-10 pr-10 ${errors.confirmPassword ? 'border-error focus:border-error focus:ring-error' : ''}`}
                        placeholder="Confirm your new password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <Icon 
                          name={showConfirmPassword ? "EyeOff" : "Eye"} 
                          size={18} 
                          className="text-text-tertiary hover:text-text-secondary"
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        />
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-error">{errors.confirmPassword}</p>
                    )}
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" className="animate-spin mr-2" size={18} />
                          Updating...
                        </>
                      ) : (
                        "Update Password"
                      )}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-success bg-opacity-10 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={24} className="text-success" />
                  </div>
                </div>
                <h1 className="heading-3 text-text-primary mb-2">Password Updated</h1>
                <p className="text-text-secondary mb-6">
                  Your password has been successfully updated. You can now login with your new password.
                </p>
                
                <div className="mb-6 p-4 bg-surface rounded-md">
                  <p className="text-text-secondary text-sm">
                    Redirecting to login page in <span className="font-medium text-primary">{redirectCountdown}</span> seconds...
                  </p>
                </div>
                
                <Link to="/login" className="btn-primary w-full justify-center">
                  Login Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;