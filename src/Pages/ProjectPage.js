import React from 'react';
import { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

import AbacusContent from '../Pages/AbacusContent';
import LUXXContent from '../Pages/LUXXContent';
import GoogleCollapseContent from '../Pages/GoogleCollapseContent';
import Header from '../Components/Header';
import styled from 'styled-components';

import { IntroBackgroundContainer, IntroTextH1, IntroTextH2, IntroPicture } from '../Components/IntroSection';

// import projectPicture from '../images/abacus.png';

export default (props) => {
    return (
        <Fragment>
            <MetaTags>
                <title>{props.projectTitle}</title>
                <meta name="theme-color" content={props.themeColour}/>
            </MetaTags>
            {/* <Header background={props.themeColour}></Header> */}
            <Header background={props.themeColour}></Header>

            <IntroBackgroundContainer
                bgc={props.themeColour}
                project>
                <IntroPicture
                    imgsrc={props.projectImgSrc}
                    alignment='center'
                    alignmentMobile='center'
                    justifyMobile='start'
                    marginBottom='60px'
                    project />

                <IntroTextH1 project>
                    {props.projectTitle}
                </IntroTextH1>

                <IntroTextH2 project>
                    {props.projectType}
                </IntroTextH2>
            </IntroBackgroundContainer>

            <Switch>
                <Route path="/abacus"
                    render={() => <AbacusContent {...props} />}/>
                <Route path="/how-google-collapsed"
                    render={() => <GoogleCollapseContent {...props} />}/>
                <Route path="/luxx"
                    render={() => <LUXXContent {...props} />}/>
            </Switch>
        </Fragment>
    )
}