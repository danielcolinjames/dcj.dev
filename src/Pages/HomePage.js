import React from 'react';
import { Fragment } from 'react';
import MetaTags from 'react-meta-tags';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import IntroSection from '../Components/IntroSection';
import ProjectsSection from '../Components/ProjectsSection';
// import HighlightsSection from '../Components/HighlightsSection';

export default (props) => {
    return (
        <Fragment>
            <MetaTags>
                <title>Daniel Colin James</title>
                <meta name="theme-color" content="#EFEFEF"/>
            </MetaTags>
            <Header
                background="#EFEFEF"
                hoverColour="#DFDFDF"/>
            <IntroSection
                bgc="#EFEFEF"
                emoji="👋"/>
            <ProjectsSection />
            {/* <HighlightsSection /> */}
            <Footer 
                bgColor="#ccc"
                fgColor="#fff" />
        </Fragment>
    )
}