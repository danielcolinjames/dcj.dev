import styled, { css } from 'styled-components';
// import React from 'react';
import VimeoPlayer from '@u-wave/react-vimeo';

export const ContentBackground = styled.div`
    background-color: ${props => props.bgc};

    /* min-height: 850px; */
    width: 100%;
    padding-bottom: 100px;

    ${props => props.noMatch404 && css`
        flex: 1;
    `};
`;

export const OverviewBarContainer = styled.div`
    min-height: 90px;
    width: 100%;
    background: ${props => props.backgroundColour};
    
    @media (max-width: 700px) {
        min-height: 90px;
        padding-bottom: 0;
    }
`;

export const OverviewBarHeaderContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 0;
    
    @media (max-width: 700px) {
        padding: 30px 0;
    }
`;

export const OverviewHeader = styled.h2`
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    color: #777;

    margin: 0 10px 10px 50px;

    ${props => props.secondary && css`
        color: #999;
        font-size: 1em;

        @media(max-width: 700px) {
            font-size: 0.9em;
        }
    `};
`;

export const OverviewContent = styled.p`
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 1.2em;
    color: #999;
    
    margin: 0 50px 0 50px;

    @media(max-width: 700px) {
        font-size: 1.1em;
    }

    ${props => props.secondary && css`
        margin: 0 10px 0 50px;
        color: #bbb;
        font-size: 1em;

        @media(max-width: 700px) {
            font-size: 0.9em;
        }
    `};
`;

export const OverviewUnderContainer = styled.div`
    min-height: 100px;
    width: 100%;

    /* background-color: #FBFBFB; */
    background-color: ${props => props.colour};
`;

export const OverviewUnderContent = styled.div`
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
    padding: 40px 0;

    /* background-color:red; */

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;

    @media (max-width: 700px) {
        grid-template-columns: auto auto;
        padding: 30px 0;
    }
`;

export const OverviewTeamContainer = styled.div`

`;

export const OverviewRoleContainer = styled.div`

`;

export const OverviewTechContainer = styled.div`

`;

export const MainContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 0;

    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 700px) {
        grid-template-rows: auto;
        grid-gap: 0;
    };

    ${props => props.about && css`
        padding-top: 50px;
    `};

    ${props => props.noMatch404 && css`
        flex: 1;
    `};
`;

export const HeaderTextSeparator = styled.div`
    background-color: ${props => props.colour};
    height: 32px;
    width: 95%;
    margin: -25px 20px;

    z-index: 0;

    /* border-radius: 0 5px 30px 0; */

    @media (max-width: 700px) {
        height: 25px;
        width: 85%;
        margin: -15px 30px;
    }
`;

export const HeaderText = styled.h2`
    color: black;
    /* background-color: ${props => props.colour}; */
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 3em;
    z-index: 1;

    margin: 150px 50px 0 50px;

    @media (max-width: 700px) {
        margin: 100px 50px 0 50px;
        font-size: 2em;
    }

    ${props => props.first && css`
        margin: 40px 50px 0 50px;
    `}
`;
export const SubHeaderText = styled.h3`
    color: #666;;
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 2.5em;
    z-index: 1;

    margin: 30px 50px 0 50px;

    @media (max-width: 700px) {
        margin: 30px 50px 0 50px;
        font-size: 1.75em;
    }
`;

export const BodyText = styled.p`
    /* color: ${props => props.colour}; */
    color: #999;
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 1.5em;

    margin: 20px 50px 0 50px;

    @media (max-width: 700px) {
        font-size: 1.35em;
    }
`;

export const BodyList = styled.ul`

`;

export const BodyListItem = styled.li`
    color: #999;
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 1.5em;

    margin: 20px 50px 0 50px;

    @media (max-width: 700px) {
        font-size: 1.35em;
    }
`;

export const BodyCalloutText = styled.p`
    color: #777;
    /* background-color: #efefef; */
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 3.5em;

    margin: 30px 50px 30px 50px;

    @media (max-width: 700px) {
        font-size: 2.5em;
    }
`;

export const BodyLink = styled.a`
    color: ${props => props.linkColour};
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 700;

    text-decoration: none;

    /* margin: 20px 50px 0 50px; */

    @media (max-width: 700px) {

    }
`;

export const BodyButton = styled.a`
    background-color: #c0ffee;
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    color: black;
    text-align: center;
    line-height: inherit;

    text-decoration: none;

    width: 150px;
    height: 30px;

    padding: 20px;
    margin: 50px 50px;

    border: 3px solid black;

    transition: 200ms;

    :hover {
        background-color: white;
        color: black;

        box-shadow: 0 0 50px rgba(0,0,0,0.05), 0 0 100px #c0ffee88;
    }

    @media (max-width: 700px) {
        font-size: 1.25em;
    }
`;

export const BodyImageContainer = styled.div`
    padding: 30px 0 30px 0;
    margin: 20px auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        padding: 20px 0;
        margin: 20px 5px;
    }

    ${props => props.mesh1 && css`
        margin: 75px 10px 0 10px;
    `}

    ${props => props.mesh2 && css`
        width: 75%;
        margin: 0 auto;

        @media (max-width: 700px) {
            margin: 0 auto;
        }
    `}

    ${props => props.hgc1 && css`
        margin: 50px 200px;
        @media (max-width: 1200px) {
            margin: 30px 20px;
        }
    `}
`;

export const BodyImage = styled.img.attrs({
    src: props => props.imgsrc
})`
    width: 100%;

    /* special rules for particular images */
    ${props => props.abacus1 && css`
        width: 91%;
        /* margin: 20px 10px; */
    `}

    ${props => props.mesh2 && css`
        margin: 0 auto;
    `}
`;

export const BodyVideoContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
`;

export const VimeoEmbed = styled(VimeoPlayer)`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 0;
    height: 0;
    overflow: hidden;
    margin: 20px 50px 20px 50px;

    @media(max-width: 700px) {
        margin: 20px 0;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;