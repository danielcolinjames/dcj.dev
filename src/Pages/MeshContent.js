import styled from 'styled-components';
import React from 'react';

import mesh1 from '../images/Mesh/mesh_hero.png';
import mesh2 from '../images/Mesh/mesh_logo.png';

import mesh3 from '../images/Mesh/mesh_logo.png';
import mesh4 from '../images/Mesh/mesh_logo.png';
import mesh5 from '../images/Mesh/mesh_logo.png';
// import luxx from '../images/luxx.png';
// import luxx from '../images/luxx.png';

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
    SubHeaderText,
    BodyText,
    BodyList,
    BodyListItem,
    BodyCalloutText,
    BodyImageContainer,
    BodyImage,
    VimeoEmbed,
    BodyVideoContainer,
} from './ProjectContent';

export default (props) => {

    return (
        <ContentBackground
            bgc="#fff" >

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
                            Front-end developer
                        </OverviewContent>
                    </OverviewRoleContainer>

                    <OverviewTechContainer>
                        <OverviewHeader secondary>
                            Tech & tools
                        </OverviewHeader>
                        <OverviewContent secondary>
                            React Native
                        </OverviewContent>
                        <OverviewContent secondary>
                            D3.js
                        </OverviewContent>
                        <OverviewContent secondary>
                            Firebase
                        </OverviewContent>
                    </OverviewTechContainer>

                </OverviewUnderContent>
            </OverviewUnderContainer>


            <MainContentContainer>
                <BodyImageContainer mesh1>
                    <BodyImage
                        imgsrc={mesh1}
                    >
                    </BodyImage>
                </BodyImageContainer>
                <BodyImageContainer mesh2>
                    <BodyImage
                        imgsrc={mesh2}
                    >

                    </BodyImage>
                </BodyImageContainer>

                <HeaderText>
                    Final product — launching at a 3000+ attendee conference
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    In four months, we managed to build an app that went live at a conference held in Vancouver in the summer of 2018. Here’s a video capturing some of the main features of the app:
                </BodyText>
                <BodyVideoContainer>
                    <VimeoEmbed
                        video="267830512"
                        showTitle="false"
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
                    This page is under construction, and I'm actively updating this page to be a complete and cohesive overview of the project.
                </BodyText>



                <HeaderText>
                    Project background
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    As part of a long lasting relationship between the Centre for Digital Media and Elevator Strategy, our team was tasked with creating a digital product for one of Elevator Strategy’s most valuable clients: Sustainable Brands.
                </BodyText>
                <BodyText>
                    This project involved the design and development of Mesh—an extension for the existing event app used by Sustainable Brands during their conferences. The primary aim of the project was to design and develop a product that would make it easier for conference attendees to connect with each other.
                </BodyText>


                <HeaderText>
                    Conference attendee painpoints
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    The brief that our team was faced with was to tackle some pain points that the attendees of the Sustainable Brands conference experienced. The main 3 pain points were:
                </BodyText>
                <BodyList>
                    <BodyListItem>
                        It’s hard to start conversations with strangers at conferences, and networking can be intimidating.
                    </BodyListItem>
                    <BodyListItem>
                        It’s cumbersome to exchange information with other people.
                    </BodyListItem>
                    <BodyListItem>
                        It’s hard to keep new connections going after the conference has ended.
                    </BodyListItem>
                </BodyList>


                <HeaderText>
                    My roles and responsibilities
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    I was the front-end developer on this project.
                </BodyText>
                <BodyText>
                    Since the existing app only allowed extensions to be built in React Native, I had to learn how to use React Native.
                </BodyText>
                <BodyText>
                    It was my job to collaborate with the designers and make an interface that enabled all the functionality necessary.
                </BodyText>
                <BodyText>
                    Some of my major tasks in the project were:
                </BodyText>
                <BodyList>
                    <BodyListItem>
                        developing React Native components to use in our app's interface
                    </BodyListItem>
                    <BodyListItem>
                        figuring out what was necessary in our app's interface
                    </BodyListItem>
                    <BodyListItem>
                        developing the interface to ensure seamless and intuitive navigation
                    </BodyListItem>
                    <BodyListItem>
                        working with the designers to make sure we included as much as we could from their designs
                    </BodyListItem>
                </BodyList>


                <HeaderText>
                    Key features of Mesh
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <SubHeaderText>
                    Add/scan a card
                </SubHeaderText>
                <BodyText>
                    On the main page of the app, press the “+” button to pull up the scanner. Scan a QR code on someone else’s phone or badge to add them to your connections.
                </BodyText>

                <SubHeaderText>
                    Show QR code
                </SubHeaderText>
                <BodyText>
                    On the main page of the app, pressing the top bar with your name and picture will pull up your QR code for someone else to scan. Press ‘Back’ to close this popup.
                </BodyText>

                <SubHeaderText>
                    Delete card
                </SubHeaderText>
                <BodyText>
                    To delete a card, in your list of cards, press a card and hold it down until a pop-up comes up. Respond ‘yes’ to remove that card. Note: This will not delete your card from the other user.
                </BodyText>

                <SubHeaderText>
                    Show card
                </SubHeaderText>
                <BodyText>
                    On the main page, tap on someone’s card to show their information.
                </BodyText>

                <SubHeaderText>
                    External links
                </SubHeaderText>
                <BodyText>
                    Once you have opened a card, tapping on the links with open the person’s contact information in the respective apps. Tapping on the LinkedIn logo will open that user’s LinkedIn profile either in the LinkedIn app or the browser if LinkedIn isn’t installed. Tapping the ‘Email’ button will open your email app with that person’s email address in the “to” field.
                </BodyText>

                <SubHeaderText>
                    Export all
                </SubHeaderText>
                <BodyText>
                    On the main page, if there are existing connections, press the “Export All” button to export the current cards in a text file. This information can be added to Notes or Emailed.
                </BodyText>









                <HeaderText>
                    Challenges
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />

                <SubHeaderText>
                    New platform
                </SubHeaderText>
                <BodyText>
                    I am fairly well versed in web development, but I had limited experience working with React Native. There was a learning curve at the beginning, but I was able to pick it up quickly and deploy the extension successfully.
                </BodyText>
                <BodyText>
                    During the initial stages we were weighing the pros and cons between building a new application or building on top of the Sustainable Brands app. Because we didn’t want the user to download two apps or enter their information twice, we decided that building on top of the current app was the obvious choice.
                </BodyText>

                <SubHeaderText>
                    Platform limitations
                </SubHeaderText>
                <BodyText>
                    The DoubleDutch development kit, which we used to develop the React Native extension, is relatively new. In fact, we were told we were among the first to build on it. Due to this, there was a lack of documentation on how to use it and what could be done with it, and we were frequently in touch with DoubleDutch engineers in order to get parts of the app working. Further issues related to the development kit included:
                </BodyText>
                <BodyList>
                    <BodyListItem>
                        Inability to use the “camera” while developing in-app
                    </BodyListItem>
                    <BodyListItem>
                        No access to the actual event information or other users
                    </BodyListItem>
                </BodyList>
                <BodyText>
                    We were able to get around these issues by making frequent deploys to the app and testing it in the app; but it delayed our development process significantly.
                </BodyText>
                <BodyText>
                    Due to constraints with the DoubleDutch API, when adding a user by scanning their identifier (scanning the badges instead of in-app), the user doing the scanning will be unable to retrieve the email of the scanned person. We were in contact with DoubleDutch about this and we were told you cannot get user emails by identifier for privacy reasons.
                </BodyText>
                <BodyText>
                    Again, due to DoubleDutch API constraints, scanning users by identifier will become increasingly slow as the conference moves on, as the lookup requires getting all users before searching through them. DoubleDutch confirmed this is the only way to lookup users by identifier.
                </BodyText>


                <HeaderText>
                    Future directions
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />

                <BodyText>
                    Like with any project, by the end of the term, we were unable to  develop all the features and functions we had envisioned for Mesh.
                </BodyText>
                <BodyText>
                    Here are a few of those ideas.
                </BodyText>
                <BodyList>
                    <BodyListItem>
                        Have the leaderboard showcase which attendee is in the lead with number of connections. This will encourage more people to engage with the app, generate meaningful conversations and create a healthy competition between the attendees. The main issue with this piece is the sensitive user contact data that needs to be stored; special attention should be paid to ensure its safety to protect user privacy.
                    </BodyListItem>
                    <BodyListItem>
                        The CDM team thinks it would be a great incentive for the user if their engagement with the extension were compensated with some short of donation for a meaningful cause. Something like: 12,000 connections were made so Sustainable Brands with its partners will donate $ 12,000 to an NGO that is working with clean energy.
                    </BodyListItem>
                    <BodyListItem>
                        One of the biggest requests is for the user to be able to identify themselves in the data visualization, either through their phone or on the displays around the conference.
                    </BodyListItem>
                    <BodyListItem>
                        Another feature that would add a lot of value would be the ability to look through your own personal network.
                    </BodyListItem>
                    <BodyListItem>
                        Some visual feedback after a card is added would be useful. Right now there is no feedback explaining that a card was added. This could be especially valuable for people who have been added by other attendees, because it might not be immediately clear that connections are bi-directional.
                    </BodyListItem>
                </BodyList>


            </MainContentContainer>
        </ContentBackground>
    )
}