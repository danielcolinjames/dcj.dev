import styled from 'styled-components';
import React from 'react';

import { NavLink } from 'react-router-dom';

import lifeAfterGoogle from '../images/life-after-google.jpg';
// import googlecollapse from '../images/googlecollapse.png';
// import mesh from '../images/mesh.png';
// import luxx from '../images/luxx.png';


const HighlightsBackgroundContainer = styled.div`
    background-color: ${props => props.bgc};
    min-height: 300px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 3em;

    padding-top: 50px;
    padding-bottom: 50px;

    @media (max-width: 700px) {
        padding-top: 40px;
        padding-bottom: 40px;
        grid-template-rows: auto;
        grid-gap: 3em;
    }
`;

const HighlightsIntroText = styled.p`
    font-family: 'Europa-Light';
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

const HighlightCardContainer = styled(NavLink)`

    /* ::before { */
        
        /* opacity: 0.3; */
        /* z-index: -2; */
    /* } */
    background-color: ${props => props.bgc};
    border: 5px solid ${props => props.cardBorderColour};

    /* This chunk of commented-out code was me trying to get an image into the highlight cards with a coloured overlay above the image and below the text. Harder than I thought it would be. Giving up for now. */

    /* &:after {
        
        rgba(50, 50, 50, 0.5),
                rgba(50, 50, 50, 0.5)
        content: ""; */
        /* background-image:
            linear-gradient(
                0deg,
                props.highlightCardBackgroundColour,
                props.highlightCardBackgroundColour
            ),
            url(${props => props.imageName});
        background-size: cover; */

        /* background-blend-mode: overlay; */
        /* opacity: 0.5;
        
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    } */

    /* z-index: 1; */

    /* &::after{
        background-color: red;
    } */

    max-width: 800px;
    width: 90%;
    /* min-height: 150px;
    height: auto; */

    /* box-shadow: 0 6px 20px 0 rgba(39,52,89,.1); */

    justify-self: center;
    align-self: start;

    border-radius: 35px;

    transition: transform 0.3s;

    text-decoration: none;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    grid-template-areas:
        "text";

    :hover{
        transform: scale(1.05);
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;

        min-height: 50px;
        height: 100%;

        grid-template-areas:
            "text";
    }

    @media (hover: none) {
        /* on devices that do not have a pointer, don't have hover effects */
        :hover{
            transform: none;
        }
    }
`;

const HighlightCardTextContainer = styled.div`
    grid-area: text;
    margin: 30px;

    align-self: center;
    justify-self: center;
`;

const HighlightCardTitle = styled.h1`
    font-size: 30px;
    font-family: "Europa-Bold";
    font-weight: 600;
    color: ${props => props.textColour};

    text-align: center;
    margin: 0 60px 5px 60px;

    @media(max-width: 700px) {
        text-align: left;
        margin: 0 0 5px 0;
    }
`;

const HighlightCardSubtitle = styled.h2`
    font-size: 25px;
    font-family: "Europa-Light";
    font-weight: 400;
    color: ${props => props.textColour};

    text-align: center;
    margin: 0 60px 5px 60px;

    @media(max-width: 700px) {
        text-align: left;
        margin: 0 0 5px 0;
    }
`;

export default () => {
    return (
        <HighlightsBackgroundContainer bgc="#EFEFEF">
            <HighlightsIntroText>Here are a few random things I'm really proud of:</HighlightsIntroText>

            <HighlightCardContainer
                // bgc="#656565ee"
                bgc="#fff"
                cardBorderColour="#99999933"
                to="/life-after-google">
                <HighlightCardTextContainer>
                    <HighlightCardTitle
                        // textColour="#CCC">
                        textColour="#999">
                        Life After Google
                    </HighlightCardTitle>
                    <HighlightCardSubtitle
                        // textColour="#BBB">
                        textColour="#999">
                        I got mentioned in a book by a famous futurist
                    </HighlightCardSubtitle>
                </HighlightCardTextContainer>
            </HighlightCardContainer>

            <HighlightCardContainer
                // bgc="#49060695"
                bgc="#fff"
                cardBorderColour="#876d7333"
                to="/fire-escape">
                <HighlightCardTextContainer>
                    <HighlightCardTitle
                        // textColour="#CCC">
                        textColour="#876d73dd">
                        Fire Escape
                    </HighlightCardTitle>
                    <HighlightCardSubtitle
                        // textColour="#BBB">
                        textColour="#999">
                        I created an official music video for a moderately successful band at age 15
                    </HighlightCardSubtitle>
                </HighlightCardTextContainer>
            </HighlightCardContainer>

            <HighlightCardContainer
                // bgc="#1f466bbb"
                bgc="#fff"
                cardBorderColour="#6b708433"
                to="/rocket-league-no-problem">
                <HighlightCardTextContainer>
                    <HighlightCardTitle
                        // textColour="#CCC">
                        textColour="#6b7084dd">
                        Rocket League — "No Problem."
                    </HighlightCardTitle>
                    <HighlightCardSubtitle
                        // textColour="#BBB">
                        textColour="#999">
                        I sparked a grammatical change in a 50-million player game
                    </HighlightCardSubtitle>
                </HighlightCardTextContainer>
            </HighlightCardContainer>

            <HighlightCardContainer
                // bgc="#3c5b3ebb"
                bgc="#fff"
                cardBorderColour="#6e897833"
                to="/how-to-win-at-markstrat">
                <HighlightCardTextContainer>
                    <HighlightCardTitle
                        // textColour="#CCC">
                        textColour="#6e8978dd">
                        How To Win At Markstrat
                    </HighlightCardTitle>
                    <HighlightCardSubtitle
                        // textColour="#BBB">
                        textColour="#999">
                        I did really well in a market simulation game, then sold 24 copies of my strategy until the maker of the game asked me to stop
                    </HighlightCardSubtitle>
                </HighlightCardTextContainer>
            </HighlightCardContainer>
        </HighlightsBackgroundContainer>
    )
}