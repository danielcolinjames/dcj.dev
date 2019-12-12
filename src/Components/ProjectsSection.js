import styled from "styled-components";
import React from "react";

import { NavLink } from "react-router-dom";

// import picture from '../images/testoutput.png';
import abacus from "../images/abacus.png";
import googlecollapse from "../images/googlecollapse.png";
import mesh from "../images/mesh.png";
import luxx from "../images/luxx.png";

import givebat from "../images/gb_shape.png";
import forwardtick from "../images/ForwardTickWhite.png";

export const ProjectsBackgroundContainer = styled.div`
  background-color: ${props => props.bgc};
  min-height: 250px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 3em;

  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 700px) {
    margin-top: 40px;
    margin-bottom: 40px;
    grid-template-rows: auto;
    grid-gap: 3em;
  }
`;

export const SectionIntroText = styled.p`
  font-family: "Europa", Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 1.1em;
  color: #666;

  align-self: center;
  justify-self: center;

  padding: 0;
  margin: 0;

  @media (max-width: 700px) {
    margin: 0 50px 0 50px;
  }
`;

export const ProjectCardContainer = styled.a`

    max-width: 800px;
    width: 90%;
    min-height: 100px;
    height: auto;

    /* border: 5px solid ${props => props.bgc}; */

    /* box-shadow: 0 6px 20px 0 rgba(39,52,89,.1); */

    justify-self: center;
    align-self: start;

    background-color: ${props => props.bgc};

    box-shadow: 0 0 100px rgba(0,0,0,0.04), 0 0 10px rgba(0,0,0,0.05);

    border-radius: 35px;

    transition: transform 0.3s;

    text-decoration: none;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;

    grid-template-areas:
        "text img";

    :hover{
        transform: scale(1.012);
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;

        grid-template-areas:
            "img"
            "text";
    }

    @media (hover: none) {
        /* on devices that do not have a pointer, don't have hover effects */
        :hover{
            transform: none;
        }
    }
`;

export const ProjectCardTextContainer = styled.div`
  grid-area: text;
  margin: 30px;

  align-self: center;
  justify-self: start;
`;

export const ProjectCardTitle = styled.h2`
  font-size: 2em;
  font-family: "Europa", Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: #4b4b4b;

  /* align-self: start; */
  margin: 0 0 10px 0;
`;

export const ProjectCardSubtitle = styled.h3`
  font-size: 1.7em;
  font-family: "Europa", Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: #666;

  /* align-self: start; */
  margin: 0 0 10px 0;
`;

export const ProjectCardBody = styled.p`
  font-size: 1.25em;
  font-family: "Europa", Arial, Helvetica, sans-serif;
  font-weight: 300;
  color: #777;

  /* align-self: start; */
  margin: 0 0 5px 0;
`;

export const ProjectCardImage = styled.img.attrs({
  src: props => props.imgsrc
})`
  grid-area: img;

  height: auto;
  max-width: 200px;
  max-height: 100px;

  margin: 30px;

  justify-self: center;
  /* background-color:red; */
  align-self: center;

  @media (max-width: 700px) {
    margin: 30px 30px 0 30px;
    justify-self: center;
  }
`;

export default () => {
  return (
    <ProjectsBackgroundContainer bgc="white">
      <SectionIntroText>
        Here are a couple passion projects I'm working on right now:
      </SectionIntroText>
      <ProjectCardContainer
        bgc="#ffffff"
        target="_blank"
        href="https://givebat.com"
      >
        <ProjectCardTextContainer>
          <ProjectCardTitle>givebat.com</ProjectCardTitle>
          <ProjectCardSubtitle>
            Website featuring Brave Creators
          </ProjectCardSubtitle>
        </ProjectCardTextContainer>

        <ProjectCardImage imgsrc={givebat}></ProjectCardImage>
      </ProjectCardContainer>

      <ProjectCardContainer
        bgc="white"
        target="_blank"
        href="https://forwardtick.com"
      >
        <ProjectCardTextContainer>
          <ProjectCardTitle>Forward Tick</ProjectCardTitle>
          <ProjectCardSubtitle>
            Medium publication about the future
          </ProjectCardSubtitle>
        </ProjectCardTextContainer>

        <ProjectCardImage imgsrc={forwardtick}></ProjectCardImage>
      </ProjectCardContainer>

      <SectionIntroText>
        Here are a few of my favourite projects I've worked on so far:
      </SectionIntroText>

      <ProjectCardContainer bgc="#FFEB7Caa" href="/abacus">
        <ProjectCardTextContainer>
          <ProjectCardTitle>Abacus</ProjectCardTitle>
          <ProjectCardSubtitle>
            Cryptocurrency Portfolio Tracker
          </ProjectCardSubtitle>
          <ProjectCardBody>
            I developed the front-end of the web version of a cryptocurrency
            portfolio tracker.
          </ProjectCardBody>
        </ProjectCardTextContainer>

        <ProjectCardImage imgsrc={abacus}></ProjectCardImage>
      </ProjectCardContainer>

      <ProjectCardContainer bgc="#A5FFD2aa" href="/how-google-collapsed">
        <ProjectCardTextContainer>
          <ProjectCardTitle>How Google Collapsed</ProjectCardTitle>
          <ProjectCardSubtitle>Medium Article</ProjectCardSubtitle>
          <ProjectCardBody>
            I wrote a piece on Medium that went viral, got recommended by
            Google's VP of Design, got me two jobs, and a mention in a book.
          </ProjectCardBody>
        </ProjectCardTextContainer>

        <ProjectCardImage imgsrc={googlecollapse}></ProjectCardImage>
      </ProjectCardContainer>

      <ProjectCardContainer bgc="#A5D2FFaa" href="/mesh">
        <ProjectCardTextContainer>
          <ProjectCardTitle>Mesh</ProjectCardTitle>
          <ProjectCardSubtitle>
            Live Data Visualization and Mobile App
          </ProjectCardSubtitle>
          <ProjectCardBody>
            I developed the front-end of a networking app that launched at a
            3000+ attendee conference.
          </ProjectCardBody>
        </ProjectCardTextContainer>

        <ProjectCardImage imgsrc={mesh}></ProjectCardImage>
      </ProjectCardContainer>

      <ProjectCardContainer bgc="#FFA5A5aa" href="/luxx">
        <ProjectCardTextContainer>
          <ProjectCardTitle>LUXX</ProjectCardTitle>
          <ProjectCardSubtitle>
            Wearable Technology Multiplayer Game
          </ProjectCardSubtitle>
          <ProjectCardBody>
            I developed a networking protocol, hardware-level functionality, and
            game logic for a technology-enhanced version of tag.
          </ProjectCardBody>
        </ProjectCardTextContainer>

        <ProjectCardImage imgsrc={luxx}></ProjectCardImage>
      </ProjectCardContainer>
    </ProjectsBackgroundContainer>
  );
};
