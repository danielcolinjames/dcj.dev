import styled from 'styled-components';
import React from 'react';

import picture from '../images/testoutput.png';


const IntroBackgroundContainer = styled.div`
    background-color: ${props => props.bgc};
    min-height: 500px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;

    grid-template-areas:
        "picture header"
        "picture body";

    @media (max-width: 700px) {
        min-height: 200px;

        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto 1fr;

        grid-template-areas:
            "header header"
            "body picture";
            /* "picture picture"; */
    }
`;

const IntroTextH1 = styled.h1`
    grid-area: header;
    font-size: 3em;
    font-family: "Europa-Bold";
        
    max-width: 600px;
    text-align: left;
    margin: 0 30px 0 30px;
    
    /* width: 100%; */

    align-self: end;
    justify-self: start;

    /* background-color: blue; */
`

const IntroTextH2 = styled.p`
    grid-area: body;
    font-size: 1.5em;
    font-family: "Europa-Light";
    
    max-width: 600px;
    text-align: left;
    margin: 10px 30px 0 30px;

    /* width: 100%; */

    align-self: start;
    justify-self: start;

    /* background-color: red; */

    @media (max-width: 700px) {
        font-size: 1.25em;
        margin-right: 20px;
        margin-bottom: 50px;
    }
`

const IntroPicture = styled.img.attrs({
    src: picture
})`
    grid-area: picture;

    max-width: 350px;
    width: 100%;
    margin-top: auto;
    margin-right: 20px;
    margin-left: 20px;

    /* background-color: red; */

    justify-self: end;

    @media (max-width: 700px) {
        /* max-width: 40%; */
        height: auto;
    }
`;

export default () => {
    return (
        <IntroBackgroundContainer bgc="#EFEFEF">
            <IntroPicture />

            <IntroTextH1>
                Hey, I'm Daniel.
            </IntroTextH1>
            <IntroTextH2>
                I'm a writer, developer, product manager, and other things. I'm currently working on a bunch of passion projects, and I'm open to new opportunities.
            </IntroTextH2>

        </IntroBackgroundContainer>

    )
}