import React from "react";
import "../signup.css";

function SignupFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} DJI Store. All Rights Reserved.</p>
    </footer>
  );
}

export default SignupFooter;
