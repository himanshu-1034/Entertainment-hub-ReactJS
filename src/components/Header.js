import React from "react";
import styled from "styled-components";
import AppLogo from "../images/entertainment-logo.png";
import Homeicon from "../images/home-icon.svg";
import Searchicon from "../images/search-icon.svg";
import Watchlisticon from "../images/watchlist-icon.svg";
import Movieicon from "../images/movie-icon.svg";
import Originalicon from "../images/original-icon.svg";
import Seriesicon from "../images/series-icon.svg";
import UserImg from "../images/user-image.png";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/movie/userSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        setUserLogin({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );
      history.push("/");
    });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };
  return (
    <Nav>
      <Logo src={AppLogo} />
      {!userName ? (
        <LoginContainer>
          <LoginBtn onClick={signIn}>Login</LoginBtn>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src={Homeicon} />
              <span>Home</span>
            </a>
            <a>
              <img src={Searchicon} />
              <span>Search</span>
            </a>
            <a>
              <img src={Watchlisticon} />
              <span>WatchList</span>
            </a>
            <a>
              <img src={Originalicon} />
              <span>Originals</span>
            </a>
            <a>
              <img src={Movieicon} />
              <span>Movies</span>
            </a>
            <a>
              <img src={Seriesicon} />
              <span>Series</span>
            </a>
          </NavMenu>
          <UserImage onClick={signOut} src={userPhoto ? userPhoto : UserImg} />
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0px 36px;
`;

const Logo = styled.img`
  width: 100px;
`;

const NavMenu = styled.div`
  display: flex;
  flex:1;
  margin-left:20px;
  a {
    display: flex;
    align-items: center;
    padding: 0px 12px;
    cursor:pointer;
    


    img {
      height: 20px;
    }
    span {
      font-size: 13px
      letter-spacing:1.42px;
      position:relative;


      &:after{
          content:"";
          height:2px;
          background:white;
          position:absolute;
          left:0px;
          right:0;
          bottom:-6px;
          opacity:0;
          transform:scaleX(0);
          transform-origin:left center;
          transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
      }
      
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
  }
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginBtn = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.6);
  transition: all 250ms;
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
