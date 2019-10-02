import React from "react";
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";

import AbacusContent from "../Pages/AbacusContent";
import LUXXContent from "../Pages/LUXXContent";
import GoogleCollapseContent from "../Pages/GoogleCollapseContent";
import MeshContent from "../Pages/MeshContent";
import StorySortContent from "../Pages/StorySortContent";
import Header from "../Components/Header";

import Footer from "../Components/Footer";

import {
  IntroBackgroundContainer,
  IntroTextH1,
  IntroTextH2,
  IntroPicture
} from "../Components/IntroSection";

// import projectPicture from '../images/abacus.png';

export default props => {
  const title = `${props.projectTitle} — ${props.projectType}`;
  const description = props.projectOverview;
  const ogImage = "https://dcj.dev/og.jpg";

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="theme-color" content={props.themeColour} />

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
      {/* <Header background={props.themeColour}></Header> */}
      <Header
        background={props.themeColourHeader}
        hoverColour={props.themeColourDark}
      ></Header>

      <IntroBackgroundContainer bgc={props.themeColour} project>
        <IntroPicture
          imgsrc={props.projectImgSrc}
          alignment="center"
          alignmentMobile="center"
          justifyMobile="start"
          marginBottom="60px"
          project
        />

        <IntroTextH1 project>{props.projectTitle}</IntroTextH1>

        <IntroTextH2 project>{props.projectType}</IntroTextH2>
      </IntroBackgroundContainer>

      <Switch>
        <Route path="/abacus" render={() => <AbacusContent {...props} />} />
        <Route
          path="/how-google-collapsed"
          render={() => <GoogleCollapseContent {...props} />}
        />
        <Route path="/luxx" render={() => <LUXXContent {...props} />} />
        <Route path="/mesh" render={() => <MeshContent {...props} />} />
        <Route
          path="/how-to-sort-stories-in-storybook"
          render={() => <StorySortContent {...props} />}
        />
      </Switch>

      <Footer bgColor={props.themeColour} fgColor={"#fff"} />
    </Fragment>
  );
};
