// import styled, { css } from 'styled-components';
import React, { Fragment } from 'react';

// import picture from '../images/testoutput.png';

import {
    ContentBackground,
    BodyText,
    MainContentContainer,
    BodyLink,
    BodyButton
} from '../Pages/ProjectContent';

export default () => {
    return (
        <Fragment>
            <ContentBackground
                bgc="#fff">
                <MainContentContainer about>
                    <BodyText>
                        I love all things technology.
                    </BodyText>
                    <BodyText>
                        In 2017, I completed my undergraduate degree in Digital Media Development from the Lassonde School of Engineering at York University, where I learned to think like an engineer and an artist.
                    </BodyText>
                    <BodyText>
                        In June 2019, I finished the Master of Digital Media program at the Centre for Digital Media, where I've learned to think like a designer and build effective digital products.
                    </BodyText>
                    <BodyText>
                        I'm endlessly curious about how things work, and I love nothing more than designing and building exciting new things.
                    </BodyText>
                    <BodyText>
                        Feel free to <BodyLink
                                href="mailto:danielcolinjames@gmail.com"
                                target="_blank"
                                linkColour={"#555"}>
                                reach out
                            </BodyLink> at danielcolinjames@gmail.com.
                    </BodyText>
                    <BodyButton
                        // as="a"
                        href="/resume.pdf"
                        target="_blank"
                        buttonColour={"#c0ffee"} >
                        My resume  →
                    </BodyButton>

                </MainContentContainer>
            </ContentBackground>
        </Fragment>
    )
}