import React, { Fragment } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import HomeIcon from '../images/ic_home_24px.png';
import AboutIcon from '../images/ic_person_24px.png';

const Header = styled.div`
    background: ${props => props.background};
    height: 60px;
    width: 100%;
    
    position: sticky;
    top: 0;
    z-index: 2;

    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr;

    grid-template-areas:
        "first middle last";

    @media(max-width: 700px) {
        grid-template-columns: 1fr 1fr 1fr;
        height: 80px;

        grid-template-areas:
        "first middle last";
    }
`;

const FirstLinkContainer = styled.div`
    /* background-color: red; */
    grid-area: first;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 700px) {
        justify-self: start;
        padding-left: 30px;
    }
`;

const MiddleLinksContainer = styled.div`
    /* background-color: blue; */
    grid-area: middle;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
`;

const LastLinkContainer = styled.div`
    /* background-color: green; */
    grid-area: last;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: flex-end;

    @media(max-width: 700px) {
        justify-self: end;
        padding-right: 30px;
    }
`;

const HeaderLinkContainer = styled(NavLink)`
    /* width: 100%;
    height: 100%; */
    min-height: 40px;
    min-width: 140px;
    max-width: 150px;

    text-decoration: none;

    /* padding: 10px 50px 10px 50px; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: 10px;

    border-radius: 5px;
    /* border: 1px solid */

    @media(max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        min-height: 60px;
        min-width: 75px;

        margin: 0 0;

        /* padding: 10px 50px 10px 50px; */
    }

    /* transition: transform 0.3s; */
    background-color: none;

    :hover {
        /* transform: translate(0, -2.5px); */
        background-color: ${props => props.hoverColour};
        transition: background-color 150ms linear;
    }

    @media (hover: none) {
        /* on devices that do not have a pointer, don't have hover effects */
        :hover{
            transform: none;
        }
    }
`;

const HeaderLinkIcon = styled.img.attrs({
    src: props => props.imgsrc
})`
    max-height: 10px;
    width: auto;
    /* background-color: purple; */
`;

const HeaderLinkText = styled.p`
    text-decoration: none;
    text-align: left;
    color: #777;
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 1em;
    margin: 0 0 0 10px;

    @media(max-width: 700px) {
        margin: 5px 0 0 0;
        font-size: 0.8em;
    }

    /* background-color: pink; */
`;

export default (props) => {
    return (
        <Fragment>
            <Header
                background={props.background}
                >
                <FirstLinkContainer>
                    <HeaderLinkContainer
                        to="/"
                        hoverColour={props.hoverColour}>

                        <HeaderLinkIcon
                            imgsrc={HomeIcon}>
                        </HeaderLinkIcon>

                        <HeaderLinkText>
                            Home
                        </HeaderLinkText>

                    </HeaderLinkContainer>
                </FirstLinkContainer>

                <MiddleLinksContainer>
                </MiddleLinksContainer>

                <LastLinkContainer>
                    <HeaderLinkContainer
                        to="/about"
                        hoverColour={props.hoverColour}>

                        <HeaderLinkIcon
                            imgsrc={AboutIcon}>
                        </HeaderLinkIcon>

                        <HeaderLinkText>
                            About me
                        </HeaderLinkText>

                    </HeaderLinkContainer>
                </LastLinkContainer>
            </Header>
        </Fragment>
    )
}