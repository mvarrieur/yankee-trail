import React from "react";
import { Link } from "gatsby";
import logo from "../img/yankee-logo.svg";
import styles from "./Logo.module.scss";

export const Logo = () => (
  <Link to="/" className="navbar-item" title="Logo">
    <img src={logo} className={`logo ${styles.Logo}`} alt="Yankee Trail" />
  </Link>
);

export default Logo;
