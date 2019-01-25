import styled from 'styled-components';
import React from 'react';

import { NavLink } from 'react-router-dom';

// import picture from '../images/testoutput.png';
import abacus from '../images/abacus.png';
import googlecollapse from '../images/googlecollapse.png';
import mesh from '../images/mesh.png';
import luxx from '../images/luxx.png';

const ProjectsBackgroundContainer = styled.div`
    background-color: ${props => props.bgc};
    min-height: 800px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3em;

    margin-top: 100px;
    margin-bottom: 100px;

    @media (max-width: 700px) {
        
    }
`;

const ProjectCardContainer = styled(NavLink)`

    max-width: 800px;
    width: 90%;
    min-height: 200px;
    height: auto;

    justify-self: center;
    align-self: center;

    background-color: ${props => props.backgroundColour};

    border-radius: 35px;

    transition: transform 0.3s;

    text-decoration: none;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;

    grid-template-areas:
        "text img";

    :hover{
        transform: scale(1.05);
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;

        grid-template-areas:
            "text"
            "img";
    }

    @media (hover: none) {
        /* on devices that do not have a pointer, don't have hover effects */
        :hover{
            transform: none;
        }
    }
`

const ProjectCardTextContainer = styled.div`
    grid-area: text;
    margin: 30px;

    align-self: center;
    justify-self: start;
`

const ProjectCardTitle = styled.h1`

    font-size: 30px;
    font-family: "Europa-Bold";
    color: #222;

    /* align-self: start; */
    margin: 0 0 5px 0;
`

const ProjectCardSubtitle = styled.h2`

    font-size: 25px;
    font-family: "Europa-Regular";
    color: #555;

    /* align-self: start; */
    margin: 0 0 5px 0;
`

const ProjectCardBody = styled.p`

    font-size: 20px;
    font-family: "Europa-Light";
    color: #777;

    /* align-self: start; */
    margin: 0 0 5px 0;
`

const ProjectCardImage = styled.img.attrs({
    src: props => props.imgsrc
})`
    grid-area: img;

    height: auto;
    max-width: 200px;

    margin: 30px;

    justify-self: center;
    /* background-color:red; */
    align-self: center;

    @media (max-width: 700px) {
        margin: 0 30px 30px 30px;
    }
`


export default () => {
    return (
        <ProjectsBackgroundContainer bgc="white">
            <ProjectCardContainer backgroundColour="#FFEB7Caa" to="/abacus">

                <ProjectCardTextContainer>
                    <ProjectCardTitle>Abacus</ProjectCardTitle>
                    <ProjectCardSubtitle>Cryptocurrency Portfolio Tracker</ProjectCardSubtitle>
                    <ProjectCardBody>I developed the front end of the web version of a cryptocurrency portfolio tracker.</ProjectCardBody>
                </ProjectCardTextContainer>

                <ProjectCardImage imgsrc={abacus}></ProjectCardImage>

            </ProjectCardContainer>

            <ProjectCardContainer backgroundColour="#A5FFD2aa"  to="/googlecollapse">
                <ProjectCardTextContainer>
                    <ProjectCardTitle>How Google Collapsed</ProjectCardTitle>
                    <ProjectCardSubtitle>Medium Article</ProjectCardSubtitle>
                    <ProjectCardBody>I wrote a piece on Medium that went viral, got recommended by Google's VP of Design, got me two jobs, and a mention in a book.</ProjectCardBody>
                </ProjectCardTextContainer>

                <ProjectCardImage imgsrc={googlecollapse}></ProjectCardImage>

            </ProjectCardContainer>

            <ProjectCardContainer backgroundColour="#A5D2FFaa"  to="/mesh">
                <ProjectCardTextContainer>
                    <ProjectCardTitle>Mesh</ProjectCardTitle>
                    <ProjectCardSubtitle>Live Data Visualization and Mobile App</ProjectCardSubtitle>
                    <ProjectCardBody>I developed the front end of a networking app that launched at a 3000+ attendee conference.</ProjectCardBody>
                </ProjectCardTextContainer>

                <ProjectCardImage imgsrc={mesh}></ProjectCardImage>

            </ProjectCardContainer>

            <ProjectCardContainer backgroundColour="#FFA5A5aa"  to="/luxx">
                <ProjectCardTextContainer>
                    <ProjectCardTitle>LUXX</ProjectCardTitle>
                    <ProjectCardSubtitle>Wearable Technology Multiplayer Game</ProjectCardSubtitle>
                    <ProjectCardBody>I developed a networking protocol, hardware-level functionality, and game logic for a technology-enhanced version of tag.</ProjectCardBody>
                </ProjectCardTextContainer>

                <ProjectCardImage imgsrc={luxx}></ProjectCardImage>

            </ProjectCardContainer>
        </ProjectsBackgroundContainer>

    )
}