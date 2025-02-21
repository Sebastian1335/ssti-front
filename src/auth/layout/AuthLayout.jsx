import React from 'react'
import '../auth.css'
export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};
