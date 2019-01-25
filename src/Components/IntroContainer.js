import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.div(props => ({
    background: props.background,
    height: '600px',
    width: '100%',
}));

const IntroContent = styled.div`
    width: 75%;
    height: 100px;
    background-color: red;
`

export default (props) => (
    <IntroContainer background="#EFEFEF">
        <IntroContent>

        </IntroContent>
    </IntroContainer>
)