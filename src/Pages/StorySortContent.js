import styled from "styled-components";
import React from "react";

import ReactCodeSinppet from "react-code-snippet";

import Highlight from "react-highlight";

import { Helmet } from "react-helmet";

import storybooksort from "../images/storybooksort.jpg";

import {
  ContentBackground,
  OverviewBarContainer,
  OverviewBarHeaderContainer,
  OverviewHeader,
  OverviewContent,
  OverviewUnderContainer,
  OverviewUnderContent,
  // OverviewTeamContainer,
  OverviewRoleContainer,
  OverviewTechContainer,
  MainContentContainer,
  HeaderTextSeparator,
  HeaderText,
  SubHeaderText,
  BodyText,
  BodyList,
  BodyListItem,
  // BodyCalloutText,
  BodyImageContainer,
  BodyImage,
  VimeoEmbed,
  BodyVideoContainer
} from "./ProjectContent";

const CodeSnippet = styled(ReactCodeSinppet)`
  font-size: 20px;
  font-family: monospace;
`;

export default props => {
  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="/node_modules/highlight.js/styles/github.css"
        />
      </Helmet>
      <ContentBackground bgc="#fff">
        <MainContentContainer>
          <BodyImageContainer>
            <BodyImage imgsrc={storybooksort}></BodyImage>
          </BodyImageContainer>
          <HeaderText>Context</HeaderText>
          <HeaderTextSeparator colour={props.themeColourReal} />
          <BodyText>
            One of the newest features in Storybook (released in version 5.2) is
            a new way to define the order in which Storybook will display your
            stories. Yay!
          </BodyText>
          <BodyText>
            I'm hopeful that the documentation of these new features will
            improve over time, but until then, I figured I'd write a blog post
            to describe how to use the new storySort function, and hopefully
            save someone some time that I spent figuring this out.
          </BodyText>
          <HeaderText>storySort</HeaderText>
          <BodyText>
            The new function is called storySort, and you can define it inside
            your config.js file like this: file
          </BodyText>
          <CodeSnippet lang="js" code={`int i = 0;`}></CodeSnippet>
          <BodyText>LISTNAME</BodyText>
          <BodyList>
            <BodyListItem>LIST ITEM</BodyListItem>
            <BodyListItem>LIST ITEM</BodyListItem>
          </BodyList>
          <HeaderText>HEADER</HeaderText>
          <HeaderTextSeparator colour={props.themeColourReal} />
          <SubHeaderText>SUBHEADER</SubHeaderText>
          <BodyText>Subheader</BodyText>
          <SubHeaderText>Show QR code</SubHeaderText>
          <BodyText>
            On the main page of the app, pressing the top bar with your name and
            picture will pull up your QR code for someone else to scan. Press
            ‘Back’ to close this popup.
          </BodyText>
          <CodeSnippet
            lang="javascript"
            code={`
addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});
          `}
          ></CodeSnippet>{" "}
          <SubHeaderText>New platform</SubHeaderText>
          <BodyText>
            I am fairly well versed in web development, but I had limited
            experience working with React Native. There was a learning curve at
            the beginning, but I was able to pick it up quickly and deploy the
            extension successfully.
          </BodyText>
          <Highlight language="javascript">
            {`function foo() { return 'bar' }`}
          </Highlight>
        </MainContentContainer>
      </ContentBackground>
    </React.Fragment>
  );
};
