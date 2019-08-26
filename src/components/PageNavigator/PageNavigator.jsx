import React from "react";

import * as styles from "./PageNavigator.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PageNavigator = ({ total, current = 1 }) => {
  const el = [];
  for (let i = 1; i <= total; i++) {
    el.push(<span key={i} className={cx("bar", { active: i <= current })} />);
  }
  return (
    <div className={cx("wrapper")}>
      <span>{`${current} / ${total}`}</span>
      <div>{el}</div>
    </div>
  );
};

export default PageNavigator;
