import React from "react";
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import MetaTags from "react-meta-tags";

import AbacusContent from "./AbacusContent";
import LUXXContent from "./LUXXContent";
import GoogleCollapseContent from "./GoogleCollapseContent";
import MeshContent from "./MeshContent";
import StorySortContent from "./StorySortContent";
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
  return (
    <Fragment>
      <MetaTags>
        <title>{props.projectTitle}</title>
        <meta name="theme-color" content={props.themeColour} />
      </MetaTags>
      {/* <Header background={props.themeColour}></Header> */}
      <Header background="#EFEFEF" hoverColour="#DFDFDF" />

      <IntroBackgroundContainer bgc={"#EFEFEF"} article>
        <IntroTextH1 article>{props.projectTitle}</IntroTextH1>

        <IntroTextH2 article>{props.projectType}</IntroTextH2>
      </IntroBackgroundContainer>

      <Switch>
        <Route
          path="/how-to-sort-stories-in-storybook"
          render={() => <StorySortContent {...props} />}
        />
      </Switch>

      <Footer bgColor={props.themeColour} fgColor={"#fff"} />
    </Fragment>
  );
};
