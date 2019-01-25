import React from 'react';
import { Fragment } from 'react';
import Header from '../Components/Header';
import IntroSection from '../Components/IntroSection';
import ProjectsSection from '../Components/ProjectsSection';

export default (props) => {
    return (
        <Fragment>
            <Header background="#EFEFEF"/>
            <IntroSection />
            <ProjectsSection />
        </Fragment>
    )
}