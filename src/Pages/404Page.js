import React from "react";
import Helmet from "react-helmet";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NoMatch404Section from "../Components/404Section";

export default props => {
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
        <title>Daniel Colin James — 404</title>
        <meta name="theme-color" content="#c0ffee" />
      </Helmet>
      <Header background="#c0ffee" hoverColour="#a4dbcc"></Header>

      <NoMatch404Section />

      <Footer bgColor="#c0ffee" fgColor="#777" />
    </div>
  );
};
