import React, { Fragment } from "react";

import {
  ContentBackground,
  BodyText,
  MainContentContainer,
  BodyLink,
  HeaderText,
  HeaderTextSeparator
} from "../Pages/ProjectContent";

export default () => {
  return (
    <Fragment>
      <ContentBackground noMatch404 bgc="#fff">
        <MainContentContainer noMatch404>
          <HeaderText>404 — Page not found</HeaderText>
          <HeaderTextSeparator colour={"#c0ffee"} />
          <BodyText>
            My bad! This page doesn't exist. It's probably my fault.
          </BodyText>

          <BodyText>
            Head back to the main page{" "}
            <BodyLink href="/" linkColour={"#30403B"}>
              here
            </BodyLink>
            .
          </BodyText>
        </MainContentContainer>
      </ContentBackground>
    </Fragment>
  );
};
