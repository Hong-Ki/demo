import React from "react";

import * as styles from "./Login.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Login = ({ login, logout, isLogin, onClick }) => {
  return (
    <div className={cx("wrapper")}>
      <span onClick={onClick}>
        {isLogin && logout}
        {!isLogin && login}
      </span>
    </div>
  );
};

export default Login;
