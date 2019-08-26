import React from "react";

import Copyright from "./Copyright";

import * as styles from "./Main.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const Link = ({ children, onClick }) => {
  return (
    <div onClick={onClick}>
      <span className={cx("link")}>{children}</span>
    </div>
  );
};

export const ScrollIcon = ({ children }) => {
  return (
    <div className={cx("scroll")}>
      <div className={cx("scroll-icon")} />
      {children}
    </div>
  );
};

const Main = ({ children, contentsStyle, contentsWrapperStyle }) => {
  return (
    <>
      <Copyright />
      <div className={cx("contents-wrapper")} style={contentsWrapperStyle}>
        <div className={cx("contents")} style={contentsStyle}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Main;
