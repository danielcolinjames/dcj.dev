import styled, { css } from 'styled-components';
import React from 'react';

import picture from '../images/me.png';


export const IntroBackgroundContainer = styled.div`
    background-color: ${props => props.bgc};
    min-height: 400px;
    width: 100%;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

    grid-template-areas:
        "picture header"
        "picture body";

    @media (max-width: 700px) {
        min-height: 200px;

        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto auto auto;

        grid-template-areas:
            "header header"
            "body body"
            "picture picture";
            /* "body picture"; */
            /* "picture picture"; */
    }
    /* Change things when this component has the "project" prop attached */
    ${props => props.project && css`
        
    `}
`;

export const IntroTextH1 = styled.h1`
    color: black;
    grid-area: header;
    font-size: 3em;
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 700;
        
    max-width: 600px;
    text-align: left;
    margin: 50px 30px 0 30px;
    
    /* width: 100%; */

    align-self: end;
    justify-self: start;

    @media (max-width: 700px) {
        /* font-size: 2em; */
        margin: 50px 50px 0 50px;
        font-size: 2.5em;
    }

    ${props => props.project && css`
        font-size: 5em;
        color: #4B4B4B;

        @media(max-width: 1000px) {
            font-size: 4em;
        }
    `}
`

export const IntroTextH2 = styled.p`
    grid-area: body;
    font-size: 1.5em;
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 300;
    
    max-width: 550px;
    text-align: left;
    margin: 10px 30px 50px 30px;

    /* width: 100%; */

    align-self: start;
    justify-self: start;

    /* background-color: red; */

    @media (max-width: 700px) {
        font-size: 1.4em;
        margin: 10px 40px 10px 50px;
        min-width: 200px;
    }

    ${props => props.project && css`
        font-family: "Europa", Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 2em;
        color: #666;

        @media (max-width: 700px) {
            /* font-size: 1.25em; */
            margin: 10px 40px 10px 50px;
            min-width: 200px;
        }
    `}
`

export const IntroPicture = styled.img.attrs({
    src: props => props.imgsrc
})`
    grid-area: picture;

    max-width: 250px;
    max-height: 370px;
    width: auto;

    /* margin-top: ${props => props.margintop}; */

    /* margin-right: 0px; */
    margin-left: 50px;

    /* background-color: red; */

    justify-self: end;
    align-self: ${props => props.alignment};

    @media (max-width: 700px) {
        /* max-width: 40%; */
        max-width: 180px;
        /* width: auto; */
        height: auto;
        margin-top: 20px;
        margin-right: 50px;
        margin-bottom: ${props => props.marginBottom};
        justify-self: ${props => props.justifyMobile};
        align-self: ${props => props.alignmentMobile};
    }

    ${props => props.project && css`
        margin-right: 50px;
        max-width: 250px;
        height: auto;

        @media(max-width: 1000px) {
            /* font-size: 4em; */
            margin-top: 30px;
        }
    `}
`;

export default (props) => {
    return (
        <IntroBackgroundContainer
            bgc={props.bgc}>
            <IntroPicture
                imgsrc={picture}
                alignment='end' />

            <IntroTextH1>
                Hey! {props.emoji} I'm Daniel.
            </IntroTextH1>
            <IntroTextH2>
                I'm a writer, developer, product manager, and other things. I'm currently working on passion projects, and I'm open to new opportunities.
            </IntroTextH2>

        </IntroBackgroundContainer>
    )
}