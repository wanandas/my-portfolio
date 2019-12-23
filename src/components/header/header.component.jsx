import React from "react";

import { ReactComponent as Logo } from "../../logo.svg";
import "./header.styles.scss";

import * as Scroll from "react-scroll";
let Link = Scroll.Link;

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo-container">
            <Logo className="logo" to="headerSection" />
          </div>
          <div className="options">
            <Link
              className="option"
              to="headerSection"
              spy={true}
              smooth={true}
              duration={500}
            >
              home
            </Link>

            <Link
              className="option"
              to="aboutSection"
              spy={true}
              smooth={true}
              duration={500}
            >
              about
            </Link>

            <Link
              className="option"
              to="skillsSection"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>

            <Link
              className="option"
              to="projectsSection"
              spy={true}
              smooth={true}
              duration={500}
            >
              My Project
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
