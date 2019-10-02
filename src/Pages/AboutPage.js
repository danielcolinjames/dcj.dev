import React from "react";
import { Fragment } from "react";
import Helmet from "react-helmet";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import IntroSection from "../Components/IntroSection";
import AboutSection from "../Components/AboutSection";

export default props => {
  return (
    <Fragment>
      <Helmet>
        <title>Daniel Colin James — About</title>
        <meta name="theme-color" content="#c0ffee" />
      </Helmet>
      <Header background="#c0ffee" hoverColour="#a4dbcc"></Header>
      <IntroSection bgc="#c0ffee" emoji="😄" />
      <AboutSection />

      <Footer bgColor="#c0ffee" fgColor="#777" />
    </Fragment>
  );
};
