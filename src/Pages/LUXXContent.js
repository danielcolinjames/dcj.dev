import styled from 'styled-components';
import React from 'react';

// import luxx from '../images/luxx.png';

import {
    ContentBackground,
    MainContentContainer,
    HeaderText,
} from './ProjectContent';

export default (props) => {
    
    return (
        <ContentBackground
            bgc="#fff"
            themeColour={props.themeColour}>
            <MainContentContainer>
                <HeaderText colour={props.themeColour}>
                    About
                </HeaderText>
            </MainContentContainer>
        </ContentBackground>
    )
}