import React from "react";

import * as styles from "./Menu.module.css";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Menu = ({ menus, current, onSelect }) => {
  const el = menus.map((menu, idx = 0) => (
    <Link to={menu === "HOME" ? "/" : `/${menu}`} key={menu}>
      <div
        className={cx("menu", { active: current === idx })}
        onClick={() => {
          onSelect(idx);
          idx++;
        }}
      >
        {menu}
        <span />
      </div>
    </Link>
  ));
  return <div className={cx("wrapper")}>{el}</div>;
};

export default Menu;
