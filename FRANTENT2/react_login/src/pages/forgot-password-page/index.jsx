// /home/ubuntu/app/react_login/src/pages/forgot-password-page/index.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/AppIcon";
import Header from "../../components/Header";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email address is invalid";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Start countdown for resend
      let seconds = 60;
      setCountdown(seconds);
      
      const timer = setInterval(() => {
        seconds -= 1;
        setCountdown(seconds);
        
        if (seconds <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    }, 1500);
  };

  const handleResend = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Reset countdown
      let seconds = 60;
      setCountdown(seconds);
      
      const timer = setInterval(() => {
        seconds -= 1;
        setCountdown(seconds);
        
        if (seconds <= 0) {
          clearInterval(timer);
        }
      }, 1000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md">
          <div className="bg-background rounded-xl shadow-lg p-6 sm:p-8 border border-border">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                      <Icon name="KeyRound" size={24} className="text-primary" />
                    </div>
                  </div>
                  <h1 className="heading-2 text-text-primary mb-2">Forgot Password</h1>
                  <p className="text-text-secondary body-small">
                    Enter your email and we'll send you instructions to reset your password
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon name="Mail" size={18} className="text-text-tertiary" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`input-default pl-10 ${emailError ? 'border-error focus:border-error focus:ring-error' : ''}`}
                        placeholder="Enter your email"
                      />
                    </div>
                    {emailError && (
                      <p className="mt-1 text-sm text-error">{emailError}</p>
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
                          Sending...
                        </>
                      ) : (
                        "Reset Password"
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
                <h1 className="heading-3 text-text-primary mb-2">Check Your Email</h1>
                <p className="text-text-secondary mb-6">
                  We've sent password reset instructions to<br />
                  <span className="font-medium text-text-primary">{email}</span>
                </p>
                
                <div className="bg-surface p-4 rounded-md mb-6">
                  <div className="flex items-center text-text-secondary">
                    <Icon name="Info" size={16} className="mr-2" />
                    <p className="text-sm">
                      If you don't see the email in your inbox, please check your spam folder.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={countdown > 0 || isSubmitting}
                      className="btn-secondary w-full flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" className="animate-spin mr-2" size={18} />
                          Sending...
                        </>
                      ) : countdown > 0 ? (
                        `Resend Email (${countdown}s)`
                      ) : (
                        "Resend Email"
                      )}
                    </button>
                  </div>
                  
                  <Link to="/login" className="btn-tertiary w-full justify-center flex items-center">
                    <Icon name="ArrowLeft" size={18} className="mr-2" />
                    Back to Login
                  </Link>
                </div>
              </div>
            )}
            
            {!isSubmitted && (
              <div className="mt-6 text-center">
                <p className="text-text-secondary text-sm">
                  Remembered your password?{" "}
                  <Link to="/login" className="text-primary font-medium hover:underline">
                    Back to login
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;