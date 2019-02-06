import styled from 'styled-components';
// import React from 'react';
import VimeoPlayer from '@u-wave/react-vimeo';

export const ContentBackground = styled.div`
    background-color: ${props => props.bgc};
    min-height: 850px;
    width: 100%;
`;

export const OverviewBarContainer = styled.div`
    min-height: 90px;
    width: 100%;
    background: ${props => props.backgroundColour};
    
    @media (max-width: 700px) {
        min-height: 90px;
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
    font-family: "Europa-Regular";
    font-size: 1.2em;
    color: #777;
    font-weight: 800;

    margin: 0 10px 10px 50px;
`;

export const OverviewContent = styled.p`
    font-family: "Europa-Light", Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    color: #999;
    font-weight: 400;

    margin: 0 10px 0 50px;

    @media(max-width: 700px) {
        font-size: 1.1em;
    }
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    @media (max-width: 700px) {
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
    }
`;

export const HeaderText = styled.h2`
    color: ${props => props.colour};
    font-family: "Europa-Bold";
    font-size: 3em;

    margin: 50px 50px 0 50px;

    @media (max-width: 700px) {
        font-size: 2em;
    }
`;

export const BodyText = styled.p`
    /* color: ${props => props.colour}; */
    color: #999;
    font-family: "Europa-Light";
    font-size: 1.5em;

    margin: 20px 50px 0 50px;

    @media (max-width: 700px) {
        font-size: 1.35em;
    }
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

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;