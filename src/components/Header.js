import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx("header")}>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/">Post</NavLink>
    <NavLink to="/archive">Archive</NavLink>
    <NavLink to="/portfolio">Portfolio</NavLink>
  </header>
);

export default Header;
