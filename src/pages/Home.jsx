import React from "react";

import Section from "../components/Section/Section";
import Main, { Link, ScrollIcon } from "../components/Main/Main";
import background from "../img1.png";

/**
 * Main Component Contents wrapper 하드코딩
 * 기본값 중앙정렬
 *  */

const contentsStyle = {
  wrapper: {
    justifyContent: "flex-start"
  },
  contents: {
    marginLeft: "2%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

const Home = () => {
  return (
    <Section background={background}>
      <Main
        contentsWrapperStyle={contentsStyle.wrapper}
        contentsStyle={contentsStyle.contents}
      >
        <div
          style={{
            flexGrow: 9,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <div className={"title"}>Title</div>
          <div className={"subtitle"}>Sub Title</div>
          <div className={"contents"}>Contents</div>
          <Link>{"MORE"}</Link>
        </div>
        <div style={{ flexGrow: 1, width: "100%" }}>
          <ScrollIcon> {"SCROLL DOWN"} </ScrollIcon>
        </div>
      </Main>
    </Section>
  );
};

export default Home;
