import React from "react";
import styled from "styled-components";
import Viewers1 from "../images/viewers-disney.png";
import Viewers2 from "../images/viewers-marvel.png";
import Viewers3 from "../images/viewers-national.png";
import Viewers4 from "../images/viewers-pixar.png";
import Viewers5 from "../images/viewers-starwars.png";
import Video1 from "../videos/disney.mp4";
import Video2 from "../videos/marvel.mp4";
import Video3 from "../videos/national-geographic.mp4";
import Video4 from "../videos/pixar.mp4";
import Video5 from "../videos/star-wars.mp4";
export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={Viewers1} />
      </Wrap>
      <Wrap>
        <img src={Viewers2} />
      </Wrap>
      <Wrap>
        <img src={Viewers3} />
      </Wrap>
      <Wrap>
        <img src={Viewers4} />
      </Wrap>
      <Wrap>
        <img src={Viewers5} />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 30px 0px 26px;
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
