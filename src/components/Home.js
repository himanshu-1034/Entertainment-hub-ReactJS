import React, { useEffect } from "react";
import styled from "styled-components";
import db from "../firebase";
import Homebg from "../images/home-background.png";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    let tempMovies;
    db.collection("movies").onSnapshot((snapshot) => {
      tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
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
