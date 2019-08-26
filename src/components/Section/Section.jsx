import React from "react";

import * as styles from "./Section.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Section = ({ children, direction = "row", background }) => {
  return (
    <>
      {background && <img className={cx("bg")} src={background} alt={""} />}
      <div className={cx("wrapper", { direction: direction })}>{children}</div>
    </>
  );
};

export default Section;
