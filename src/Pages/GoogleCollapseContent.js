import styled from 'styled-components';
import React from 'react';

// import luxx from '../images/luxx.png';

import {
    ContentBackground,
    OverviewBarContainer,
    MainContentContainer,
    HeaderText,
} from './ProjectContent';

export default (props) => {
    
    return (
        <ContentBackground
            bgc="#fff"
            themeColour={props.themeColour}>
            <OverviewBarContainer
                backgroundColour={props.themeColourLight}>

            </OverviewBarContainer>
            
            <MainContentContainer>
                <HeaderText colour={props.themeColour}>
                    TESTING!
                </HeaderText>
            </MainContentContainer>
        </ContentBackground>
    )
}