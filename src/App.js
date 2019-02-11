import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import NoMatchPage from './Pages/404Page';

import abacusImg from './images/abacus.png';
import googleCollapseImg from './images/googlecollapse.png';
import meshImg from './images/mesh.png';
import luxxImg from './images/luxx.png';

import MetaTags from 'react-meta-tags';

import ScrollToTop from './Components/ScrollToTop';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-134209149-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  // if we want to change the background of body later
  // componentWillMount () {
  //   document.body.style.backgroundColor = '#EFEFEF';
  // }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <MetaTags>
              <meta name="description" content="Daniel Colin James — personal website" />
              <meta name="og:title" content="Daniel Colin James — personal website" />
            </MetaTags>
            <Switch>
              <Route exact path="/" component={HomePage} />

              <Route path="/about" component={AboutPage} />

              <Route
                path="/abacus"
                render={props => <ProjectPage {...props}
                  themeColourLight={'#FFFBE5'}
                  themeColourReal={'#FFF5BD'}
                  themeColour={'#FFEB7Caa'}
                  themeColourHeader={'#FFEB7Cdd'}
                  themeColourSolid={'#FFEB7C'}
                  themeColourDark={'#E6D46F'}
                  themeColourDarker={'#BFB05D'}

                  projectTitle={'Abacus'}
                  projectType={'Cryptocurrency Portfolio Tracker'}
                  projectOverview={'I developed the front-end of the web version of a cryptocurrency portfolio tracker.'}
                  projectImgSrc={abacusImg}
                />}
              />
              <Route
                path="/how-google-collapsed"
                render={props => <ProjectPage {...props}
                  themeColourLight={'#EDFFF6'}
                  themeColourReal={'#D2FFE8'}
                  themeColour={'#A5FFD2aa'}
                  themeColourHeader={'#A5FFD2dd'}
                  themeColourSolid={'#A5FFD2'}
                  themeColourDark={'#94E6BD'}
                  themeColourDarker={'#7BBF9D'}
                  
                  projectTitle={'How Google Collapsed'}
                  projectType={'Medium Article'}
                  projectOverview={'I wrote a piece on Medium that went viral, got recommended by Google\'s VP of Design, got me two jobs, and a mention in a book.'}
                  projectImgSrc={googleCollapseImg}
                />}
              />
              <Route
                path="/mesh"
                render={props => <ProjectPage {...props}
                  themeColourLight={'#EDF6FF'}
                  themeColourReal={'#D2E8FF'}
                  themeColour={'#A5D2FFaa'}
                  themeColourHeader={'#A5D2FFdd'}
                  themeColourSolid={'#A5D2FF'}
                  themeColourDark={'#94BDE6'}
                  themeColourDarker={'#7B9DBF'}

                  projectTitle={'Mesh'}
                  projectType={'Live Data Visualization and Mobile App'}
                  projectOverview={'I developed the front-end of a networking app that launched at a 3000+ attendee conference.'}
                  projectImgSrc={meshImg}
                />}
              />
              <Route
                path="/luxx"
                render={props => <ProjectPage {...props}
                  themeColourLight={'#FFEDED'}
                  themeColourReal={'#FFD2D2'}
                  themeColour={'#FFA5A5aa'}
                  themeColourHeader={'#FFA5A5dd'}
                  themeColourSolid={'#FFA5A5'}
                  themeColourDark={'#E69494'}
                  themeColourDarker={'#BF7B7B'}

                  projectTitle={'LUXX'}
                  projectType={'Wearable Technology Multiplayer Game'}
                  projectOverview={'I developed a networking protocol, hardware-level functionality, and game logic for a technology-enhanced version of tag.'}
                  projectImgSrc={luxxImg}
                />}
              />
              <Route component={NoMatchPage} />
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
