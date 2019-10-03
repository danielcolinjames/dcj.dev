import React from "react";
import Helmet from "react-helmet";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NoMatch404Section from "../Components/404Section";

export default props => {
  const title = `dcj.dev — 404`;
  const description =
    "Sorry, this page doesn't exist. I probably messed something up.";
  const ogImage = "https://dcj.dev/og.jpg";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
        //TODO: implement this instead: https://www.npmjs.com/package/react-div-100vh
        //On that page is a perfect example of why this is needed. On Chrome for mobile (and Safari and probably others), the browser window makes the 100vh actually 100% height - the height of the bar at the top of the browser showing the URL and buttons
        //TODO: implement this on all the pages so that the footer floats where it should regardless of the height of the page
      }}
    >
      <Helmet>
        <meta name="theme-color" content="#c0ffee" />

        <title>{title}</title>
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
      <Header background="#c0ffee" hoverColour="#a4dbcc"></Header>

      <NoMatch404Section />

      <Footer bgColor="#c0ffee" fgColor="#777" />
    </div>
  );
};
