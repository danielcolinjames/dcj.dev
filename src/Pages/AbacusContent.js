import styled from 'styled-components';
import React from 'react';

// import luxx from '../images/luxx.png';

import {
    ContentBackground,
    OverviewBarContainer,
    OverviewBarHeaderContainer,
    OverviewHeader,
    OverviewContent,
    OverviewUnderContainer,
    OverviewUnderContent,
    OverviewTeamContainer,
    // OverviewRoleContainer,
    // OverviewTechContainer,
    MainContentContainer,
    HeaderText,
    BodyText,
    VimeoEmbed,
    BodyVideoContainer,
} from './ProjectContent';

export default (props) => {

    return (
        <ContentBackground
            bgc="#fff"
            themeColour={props.themeColour}>
            <OverviewBarContainer
                backgroundColour={props.themeColourLight}>
                <OverviewBarHeaderContainer>
                    <OverviewHeader>
                        Overview
                    </OverviewHeader>
                    <OverviewContent>
                        {props.projectOverview}
                    </OverviewContent>
                </OverviewBarHeaderContainer>
            </OverviewBarContainer>

            <OverviewUnderContainer
                colour={"white"}>
                <OverviewUnderContent>
                    <OverviewTeamContainer>

                        {/* <OverviewHeader>
                            Team members
                        </OverviewHeader>
                        <OverviewContent>
                            Daniel James
                        </OverviewContent>
                        <OverviewContent>
                            Keyvan Mosharraf
                        </OverviewContent>
                        <OverviewContent>
                            Evan Feng
                        </OverviewContent> */}

                        <OverviewHeader>
                            My role
                        </OverviewHeader>
                        <OverviewContent>
                            Product manager
                        </OverviewContent>
                        <OverviewContent>
                            Front-end developer
                        </OverviewContent>

                    </OverviewTeamContainer>
                    <OverviewTeamContainer>
                        <OverviewHeader>
                            Tech & tools
                        </OverviewHeader>
                        <OverviewContent>
                            React
                        </OverviewContent>
                        <OverviewContent>
                            react-vis
                        </OverviewContent>
                    </OverviewTeamContainer>

                </OverviewUnderContent>
            </OverviewUnderContainer>

            <MainContentContainer>
                {/* <HeaderText colour={props.themeColour}> */}
                <HeaderText colour={props.themeColourDark}>
                    Final product demo
                </HeaderText>

                <BodyVideoContainer>
                    <VimeoEmbed
                        video="315554128">
                    </VimeoEmbed>
                </BodyVideoContainer>

                <HeaderText colour={props.themeColourDark}>
                    Story
                </HeaderText>
                <BodyText>
                    I made Abacus with Keyvan Mosharraf (back-end) and Evan Feng (design).
                </BodyText>
                <BodyText>
                    We spent four months building Abacus between May and August of 2018. It was the thesis project for our Master of Digital Media degree.
                </BodyText>
                <BodyText>
                    We built a working web app that could be plugged into any Binance account to display a user's trades, with buy and sell orders visually indicated over the price chart for each of their holdings.
                </BodyText>
                <BodyText>
                    Here it is, plugged into Keyvan's Binance account. Everything in this video is real data (except the account balance, and the summary numbers at the top).
                </BodyText>

            </MainContentContainer>
        </ContentBackground>
    )
}