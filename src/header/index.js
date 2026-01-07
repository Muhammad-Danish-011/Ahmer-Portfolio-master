import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              {/* Facebook link - use .url property */}
              <a 
                href={socialprofils.facebook.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-2"
              >
                Facebook
              </a>
              
              {/* LinkedIn link - use .url property */}
              <a 
                href={socialprofils.linkedin.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-2"
              >
                LinkedIn
              </a>
              
              {/* Portfolio link - use .url property */}
              <a 
                href={socialprofils.portfolio.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-2"
              >
                Portfolio
              </a>
              
              {/* Email link - use .url property */}
              <a 
                href={socialprofils.email.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-2"
              >
                Email
              </a>
            </div>
            <p className="copyright m-0">copyright © {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;