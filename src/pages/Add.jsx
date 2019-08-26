import React from "react";

import Section from "../components/Section/Section";

import * as styles from "./Add.module.css";
import classNames from "classnames/bind";

import add1_bg from "../img2.jpg";
import add2_bg from "../img3.jpg";

const cx = classNames.bind(styles);

export const Add_1 = () => {
  return (
    <Section background={add1_bg}>
      <div className={cx("wrapper")}>
        <span>{"THIS IS"}</span>
        <span>{"FIRST"}</span>
        <span>{"TEST PAGE"}</span>
      </div>
    </Section>
  );
};
export const Add_2 = () => {
  return (
    <Section background={add2_bg}>
      <div className={cx("wrapper")}>
        <span>{"THIS IS"}</span>
        <span>{"SECOND"}</span>
        <span>{"TEST PAGE"}</span>
      </div>
    </Section>
  );
};
