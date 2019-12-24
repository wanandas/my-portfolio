import React from "react";

import "./footer.styles.scss";

const FooterSection = () => (
  <div className="footer">
    <div className="contain-footer">
      <div>&copy; Copyright 2019, BusyOnFriday</div>
      <a href="http://facebook.com/WanFutrue">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a href="https://www.instagram.com/busyonfriday/">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a href="https://github.com/wanandas">
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
  </div>
);

export default FooterSection;
