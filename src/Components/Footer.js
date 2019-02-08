import React, { Fragment } from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

import { SocialIcon } from 'react-social-icons';

const FooterContainer = styled.div`
    background-color: #EFEFEF;
    min-height: 100px;
    width: 100%;

    @media(max-width: 700px) {
        min-height: 80px;
    }
`

const FooterContentContainer = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas:
            "credit social";

    @media(max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "credit"
            "social";
    }
`

const FooterCreditContainer = styled.div`
    grid-area: credit;

    height: 100%;
    /* padding: 50px 0 0 0; */

    align-self: center;
    justify-self: center;
`;

const FooterCredit = styled.p`
    font-family: "Europa", Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 1em;
    color: #888;


    padding: 50px;
    margin: 0;

    @media(max-width: 1200px) {
        padding: 20px 50px 0 50px;
        align-self: center;
        justify-self: center;
        text-align: center;
    }
`;

const FooterSocialLinksContainer = styled.div`
    grid-area: social;

    height: 100%;
    width: 100%;
    margin: 0 auto;

    @media(max-width: 1200px) {
        max-width: 700px;
    }
`;

const FooterSocialLinksContentContainer = styled.div`
    height: 100%;
    padding: 0 30px;

    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: 1fr;
`;

const FooterLinkContainer = styled(SocialIcon)`
    align-self: center;
    justify-self: center;
`;

export default (props) => {
    return (
        <Fragment>
            <FooterContainer>
                <FooterContentContainer>

                    <FooterCreditContainer>
                        <FooterCredit>
                            <p>© 2019 Daniel James</p>
                            <p>Designed and developed by Daniel James</p>
                        </FooterCredit>
                    </FooterCreditContainer>

                    <FooterSocialLinksContainer>
                        <FooterSocialLinksContentContainer>
                            <FooterLinkContainer
                                url="https://medium.com/@dacoja"
                                bgColor={props.bgColor}
                                fgColor={props.fgColor}
                                target="_blank" >
                            </FooterLinkContainer>
                            <FooterLinkContainer
                                url="https://twitter.com/dcwj"
                                bgColor={props.bgColor}
                                fgColor={props.fgColor}
                                target="_blank" >
                            </FooterLinkContainer>
                            <FooterLinkContainer
                                url="https://github.com/danielcolinjames"
                                bgColor={props.bgColor}
                                fgColor={props.fgColor}
                                target="_blank" >
                            </FooterLinkContainer>
                            <FooterLinkContainer
                                url="https://linkedin.com/in/danielcolinjames"
                                bgColor={props.bgColor}
                                fgColor={props.fgColor}
                                target="_blank" >
                            </FooterLinkContainer>
                            <FooterLinkContainer
                                url="https://open.spotify.com/user/danielcolinjames"
                                bgColor={props.bgColor}
                                fgColor={props.fgColor}
                                target="_blank" >
                            </FooterLinkContainer>
                            {/* I refuse to have the old Instagram logo on my site. Gotta submit a PR to the library to fix this.
                            <FooterLinkContainer
                                url="https://instagram.com/d.cj"
                                bgColor={props.bgColor}
                                fgColor={props.fgColor} 
                                target="_blank" >
                            </FooterLinkContainer> */}
                        </FooterSocialLinksContentContainer>

                    </FooterSocialLinksContainer>

                </FooterContentContainer>
            </FooterContainer>
        </Fragment>
    )
}