import React from "react";
import styled from "styled-components";
import Homebg from "../images/home-background.png";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
export default function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0px calc(3.5vw + 5px);
  position: relative;
  &:before {
    background: url(${Homebg}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
  }
`;
