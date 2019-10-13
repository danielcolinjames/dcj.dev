import React from "react";
import { Fragment } from "react";
import Helmet from "react-helmet";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import IntroSection from "../Components/IntroSection";
import ProjectsSection from "../Components/ProjectsSection";
// import HighlightsSection from '../Components/HighlightsSection';

export default props => {
  const description = "Daniel Colin James's personal site";
  const title = "Daniel Colin James";
  const ogImage = "https://dcj.dev/og.jpg";
  return (
    <Fragment>
      <Helmet>
        <title>dcj.dev</title>
        <meta name="theme-color" content="#EFEFEF" />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="dcj.dev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dcwj" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@dcwj" />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      <Header background="#EFEFEF" hoverColour="#DFDFDF" />
      <IntroSection bgc="#EFEFEF" emoji="👋" />
      <ProjectsSection />
      {/* <HighlightsSection /> */}
      <Footer bgColor="#ccc" fgColor="#fff" />
    </Fragment>
  );
};
