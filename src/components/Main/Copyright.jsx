import React from "react";

import * as styles from "./Main.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Copyright = () => {
  return (
    <>
      <div className={cx("copyright")}>
        <div>
          <div>
            <span className={cx("big", "space")}>{"plux"}</span>
            <span>{"MAKESTAR PLUX"}</span>
          </div>
        </div>
        <div className={cx("col")}>
          <span>{"Creator"}</span>
          <span>{"MAKEUS Entertainment"}</span>
        </div>
        <div>
          <span>{"2019 MAKESTAR, Inc."}</span>
          <span className={cx("text-section")}>{"Business Info."}</span>
        </div>
      </div>
    </>
  );
};

export default Copyright;
