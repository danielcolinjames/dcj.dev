// import styled from 'styled-components';
import React from 'react';

// import luxx from '../images/luxx.png';

import photo1 from '../images/Abacus/logo-495.png';
import photo2 from '../images/Abacus/hero_web-445.png';
import photo3 from '../images/Abacus/iphone_main-950.png';
import photo4 from '../images/Abacus/iPhone X_chart-969.png';


import {
    ContentBackground,
    OverviewBarContainer,
    OverviewBarHeaderContainer,
    OverviewHeader,
    OverviewContent,
    OverviewUnderContainer,
    OverviewUnderContent,
    // OverviewTeamContainer,
    OverviewRoleContainer,
    OverviewTechContainer,
    MainContentContainer,
    HeaderTextSeparator,
    HeaderText,
    BodyText,
    // BodyList,
    // BodyListItem,
    BodyCalloutText,
    BodyImageContainer,
    BodyImage,
    VimeoEmbed,
    BodyVideoContainer,
} from './ProjectContent';

export default (props) => {

    return (
        <ContentBackground
            bgc="#fff">
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

                    <OverviewRoleContainer>
                        <OverviewHeader secondary>
                            My role
                        </OverviewHeader>
                        <OverviewContent secondary>
                            Product manager
                        </OverviewContent>
                        <OverviewContent secondary>
                            Front-end developer
                        </OverviewContent>
                    </OverviewRoleContainer>

                    <OverviewTechContainer>
                        <OverviewHeader secondary>
                            Tech & tools
                        </OverviewHeader>
                        <OverviewContent secondary>
                            React
                        </OverviewContent>
                        <OverviewContent secondary>
                            react-vis
                        </OverviewContent>
                    </OverviewTechContainer>

                </OverviewUnderContent>
            </OverviewUnderContainer>

            <MainContentContainer>
                <BodyImageContainer>
                    <BodyImage
                        imgsrc={photo2} >
                    </BodyImage>
                </BodyImageContainer>
                <BodyImageContainer>
                    <BodyImage
                        imgsrc={photo1}
                        abacus1 >
                    </BodyImage>
                </BodyImageContainer>


                <HeaderText>
                    Final product — a functional demo
                </HeaderText>
                <HeaderTextSeparator
                    colour={props.themeColourReal} />
                <BodyText>
                    We built a working web app that can be connected to any Binance account. Abacus will display all of a user's trades, with buy and sell orders visually indicated over the price chart for each of their holdings.
                </BodyText>
                <BodyText>
                    Here it is, plugged into Keyvan's Binance account. Everything in this video is real data (except the account balance, and the summary numbers at the top).
                </BodyText>
                <BodyVideoContainer>
                    <VimeoEmbed
                        video="315554128"
                        // showTitle="false"
                        showByline="false"
                        showPortrait="false"
                    >
                    </VimeoEmbed>
                </BodyVideoContainer>



                <HeaderText>
                    NOTE
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    This page is under construction, and I'm actively updating this story to be more cohesive.
                </BodyText>



                <HeaderText>
                    Project background
                </HeaderText>
                <HeaderTextSeparator
                    colour={props.themeColourReal} />
                <BodyText>
                    I made Abacus with Keyvan Mosharraf (back-end) and Evan Feng (design).
                </BodyText>
                <BodyText>
                    We spent four months building Abacus between May and August of 2018. It was the thesis project for our Master of Digital Media degree.
                </BodyText>


                <HeaderText>
                    Why did we make this?
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    Toward the end of 2017, as the price of Bitcoin and the hype surrounding it were hitting new all-time highs every day, we had a choice to make: did we want to spend our last term at CDM doing another client project, or did we want to create something of our own?
                </BodyText>
                <BodyText>
                    We chose to make something of our own.
                </BodyText>


                <HeaderText>
                    The problem space
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    As many have said more elegantly than I can, the blockchain is like a mind virus. Once you start thinking and learning about it, you can’t stop.
                </BodyText>
                <BodyText>
                    Keyvan and I started to learn about the cryptocurrency and blockchain space the same way that a lot of people do: we started doing some amateur trading.
                </BodyText>
                <BodyText>
                    That’s when we realized how unapproachable this whole world is for new users. Signing up for an exchange, trying to understand what all the technical terminology means, and being overwhelmed with a deluge of visual and technical information on every screen.
                </BodyText>
                <BodyText>
                    This tends to happen with any new technology frontier—programmers and techies start excitedly building stuff without placing much focus on user-friendly design.
                </BodyText>
                <BodyText>
                    We ran through a design sprint for our first two weeks. Going through this sprint, we were able to hone in on exactly what problem we were going to try and solve, and how we might get there.
                </BodyText>
                <BodyText>
                    So the problem we decided to focus on was this:
                </BodyText>
                <BodyCalloutText>
                    Cryptocurrency trading is too difficult for new users.
                </BodyCalloutText>

                <HeaderText>
                    Our solution — how we decided what to make
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    We talked to some local experts: the CEO of a blockchain analytics startup, and the CEO of a community-focused cryptocurrency company.
                </BodyText>
                <BodyText>
                    Our target audience was people like us: those new to trading assets digitally.
                </BodyText>


                <HeaderText>
                    Gallery
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    Here are some photos of the designs for the finished product.
                </BodyText>
                <BodyImageContainer>
                    <BodyImage
                        imgsrc={photo3} >
                    </BodyImage>
                </BodyImageContainer>
                <BodyImageContainer>
                    <BodyImage
                        imgsrc={photo4} >
                    </BodyImage>
                </BodyImageContainer>



            </MainContentContainer>
        </ContentBackground>
            )
}