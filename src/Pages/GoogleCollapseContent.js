// import styled from 'styled-components';
import React from 'react';

import hgc1 from '../images/HGC/hgc.jpeg';
import hgc2 from '../images/life-after-google-2.jpg';
import hgc3 from '../images/life-after-google.jpg';

import {
    ContentBackground,
    OverviewBarContainer,
    OverviewBarHeaderContainer,
    OverviewHeader,
    OverviewContent,
    // OverviewUnderContainer,
    // OverviewUnderContent,
    // OverviewTeamContainer,
    // OverviewRoleContainer,
    // OverviewTechContainer,
    MainContentContainer,
    HeaderTextSeparator,
    HeaderText,
    BodyText,
    // BodyList,
    // BodyListItem,
    // BodyCalloutText,
    BodyImageContainer,
    BodyImage,
    // VimeoEmbed,
    // BodyVideoContainer,
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

            <BodyImageContainer hgc1>
                <BodyImage
                    src={hgc1}
                >

                </BodyImage>
            </BodyImageContainer>


            <MainContentContainer>

                <HeaderText>
                    NOTE
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    This page is under construction, and I'm actively updating this page to be a complete and cohesive overview of the project.
                </BodyText>



                <HeaderText>
                    The idea
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    I had the idea awhile ago that it would be fun to challenge the seemingly-commonplace perception that Google is invincible. I'll state here for the record that I do not hate Google. I use multiple Google products every day and I think it's one of the coolest companies on the planet. But it needs to find another source of revenue soon.
                </BodyText>

                <HeaderText>
                    Admission essay
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    When I applied to the Master of Digital Media program at the Center for Digital Media, they required a short essay as part of the application.
                </BodyText>
                <BodyText>
                    It seemed like the perfect opportunity to explore the idea, so I did.
                </BodyText>

                <HeaderText>
                    Re-writing
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    I had fun exploring the idea, and I felt like it could be fleshed out in a lot of different directions, with a lot of sources to back up my claims.
                </BodyText>
                <BodyText>
                    I started re-writing the piece with the audience of Medium in mind.
                </BodyText>

                <HeaderText>
                    Posting
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    When I first posted the article, it didn't garner much attention. Shortly after I published it, I happened upon a relevant reddit thread right as it was gaining attention. I posted a link to my article in the comments, and it got a couple hundred hits.
                </BodyText>
                <BodyText>
                    It was quiet for a little while, and then the views started consistently coming in. I think the views from my reddit comment told Medium's algorithm that my article might be worth recommending to a few people.
                </BodyText>

                <HeaderText>
                    Gaining traction
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    A couple days after it was published, the editor in chief of Startup Grind (the fourth biggest publication on Medium at the time) saw the story. He wrote me a nice note inviting me to publish it under Startup Grind. It was an easy decision.
                </BodyText>
                <BodyText>
                    After it was posted on Startup Grind, the article gained a lot of traction, and spent several days in the "top 10 posts of the day" list on Medium.
                </BodyText>
                <BodyText>
                    A few months after traffic had slowed down, one of the editors at Hacker Noon reached out to see if I'd be interested in posting it on their publication. Since the traffic from Startup Grind had mostly tapered off, it seemed like a great opportunity to get the article some more attention, so I said yes. Hacker Noon is where the article now lives.
                </BodyText>

                <HeaderText>
                    A job offer!
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    During the height of the article's popularity, someone in my city (Toronto) saw the article, and followed the link to my personal website, where she reached out to me via email. That someone was the CEO of BiblioCommons, and after chatting back and forth a bit, she offered me a summer job!
                </BodyText>
                <BodyText>
                    So I spent the summer between my undergrad and my Masters helping with various writing projects at BiblioCommons.
                </BodyText>

                <HeaderText>
                    Life After Google by George Gilder
                </HeaderText>
                <HeaderTextSeparator colour={props.themeColourReal} />
                <BodyText>
                    A commenter in the middle of 2018 commented on my article and told me I should read a book called Life After Google by George Gilder.
                </BodyText>
                <BodyText>
                    I listened to an audiobook version, and almost fell out of my chair when the author mentioned my name.
                </BodyText>
                <BodyText>
                    It was one of the coolest experiences of my life so far.
                </BodyText>
                <BodyText>
                    Here's the main passage. It continues on into the remainder of that chapter, but you'll have to buy your own copy of the book to read the rest <span role="img" aria-label="wink">😉</span>
                </BodyText>

                <BodyImageContainer>
                    <BodyImage
                        src={hgc3} >
                    </BodyImage>
                </BodyImageContainer>

                <BodyImageContainer>
                    <BodyImage
                        src={hgc2} >
                    </BodyImage>
                </BodyImageContainer>


            </MainContentContainer>
        </ContentBackground>
    )
}