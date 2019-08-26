import React, { useState, useEffect } from "react";

import Login from "../Login/Login";
import Menu from "../Menu/Menu";
import PageNavigator from "../PageNavigator/PageNavigator";

import * as styles from "./Floating.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Floating = ({ menus, location }) => {
  useEffect(() => {});

  const [current, setCurrent] = useState(0);
  const [isLogin, setLogin] = useState(false);
  const onLogin = () => {
    setLogin(!isLogin);
  };
  const onSelect = index => {
    setCurrent(index);
  };

  return (
    <div className={cx("floating")}>
      <Login
        login={"login"}
        logout={"logout"}
        isLogin={isLogin}
        onClick={onLogin}
      />
      <Menu menus={menus} current={current} onSelect={onSelect} />
      <PageNavigator total={menus.length} current={current + 1} />
    </div>
  );
};

export default Floating;
