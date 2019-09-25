import React from "react";
import MetaTags from "react-meta-tags";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NoMatch404Section from "../Components/404Section";

export default props => {
  return (
    <>
      <MetaTags>
        <title>How to Sort Stories in Storybook</title>
        <meta name="theme-color" content="#c0ffee" />
      </MetaTags>
      <Header background="#c0ffee" hoverColour="#a4dbcc"></Header>

      <NoMatch404Section />

      <Footer bgColor="#c0ffee" fgColor="#777" />
    </>
  );
};
