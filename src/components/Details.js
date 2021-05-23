import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayBtnImg from "../images/play-icon-black.png";
import TrailerBtnImg from "../images/play-icon-white.png";
import GroupIcon from "../images/group-icon.png";
import { useHistory, useParams } from "react-router-dom";
import db from "../firebase";
export default function Details() {
  const { id } = useParams();
  const [selectedMovieData, setSelectedMovieData] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((data) => {
        if (data.exists) {
          setSelectedMovieData(data.data());
        } else {
          alert("Selected Movie Exists No Longer");
        }
      });
  }, []);

  return (
    <Container>
      {selectedMovieData && (
        <>
          {" "}
          <Background>
            <img src={selectedMovieData.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={selectedMovieData.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src={PlayBtnImg} />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src={TrailerBtnImg} />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src={GroupIcon} />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{selectedMovieData.subTitle}</SubTitle>
          <Description>{selectedMovieData.description}</Description>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  margin-top: 60px;
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  transition: 250ms;
  &:hover {
    background: rgb(198, 198, 198);
    color: black;
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
