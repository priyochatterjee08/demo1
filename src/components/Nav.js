import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import images from "../images1.png"

function Nav() {
    return (
      <nav>
        <div className="logo">
        
          <Link to="/">
            <img src={images}alt="Company Logo" />
           
          </Link>
          {/* <span><h1>AI</h1></span> */}
         
        </div>
      </nav>
    );
  }
  

export default Nav;

