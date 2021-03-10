import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <div>
    <img src="https://www.bannerhealth.com/-/media/images/project/bh/hero-images/for-employees/employees-hero.ashx" alt="employee"/>
    <h1>Employee Dirctory</h1>
    </div>
    
      );
}

export default Header;
