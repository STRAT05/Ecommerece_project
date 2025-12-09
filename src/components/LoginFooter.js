import React from "react";
import "../login.css";

const LoginFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} DJI Store. All Rights Reserved.</p>
    </footer>
  );
};

export default LoginFooter;
