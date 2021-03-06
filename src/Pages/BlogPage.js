import React from "react";
import Helmet from "react-helmet";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import storybooksort from "../images/storybooksort.jpg";

import {
  ContentBackground,
  BodyText,
  MainContentContainer,
  BodyLink,
  HeaderText,
  HeaderTextSeparator
} from "../Pages/ProjectContent";

import {
  ProjectsBackgroundContainer,
  ProjectCardContainer,
  ProjectCardTextContainer,
  ProjectCardTitle,
  ProjectCardSubtitle,
  ProjectCardImage
} from "../Components/ProjectsSection";

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
        <title>dcj — blog</title>
        <meta name="theme-color" content="#c0ffee" />
      </Helmet>
      <Header background="#c0ffee" hoverColour="#a4dbcc"></Header>

      <ContentBackground bgc="#fff">
        <MainContentContainer>
          <HeaderText>dcj — blog</HeaderText>
          <HeaderTextSeparator colour={"#c0ffee"} />
          <BodyText>Hey, here are some things I've written!</BodyText>

          <ProjectsBackgroundContainer bgc="white">
            <ProjectCardContainer
              bgc="#ffffff"
              href="/how-to-sort-stories-in-storybook"
            >
              <ProjectCardTextContainer>
                <ProjectCardTitle>
                  How to Sort Stories in Storybook
                </ProjectCardTitle>
                <ProjectCardSubtitle>
                  A comprehensive guide and code examples for how to order your
                  stories in Storybook
                </ProjectCardSubtitle>
              </ProjectCardTextContainer>

              <ProjectCardImage imgsrc={storybooksort}></ProjectCardImage>
            </ProjectCardContainer>
          </ProjectsBackgroundContainer>
        </MainContentContainer>
      </ContentBackground>

      <Footer bgColor="#c0ffee" fgColor="#777" />
    </div>
  );
};
