import React from "react";
import styled from "styled-components";
import LoginImgBg from "../images/login-background.jpg";
import CTA1 from "../images/cta-logo-one.svg";
import CTA2 from "../images/cta-logo-two.png";
import CompanyLogo from "../images/entertainment-logo.png";
export default function Login() {
  return (
    <Container>
      <ContentAction>
        <ContentActionLogoThree src={CompanyLogo} />
        <ContentActionLogoOne src={CTA1} />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </Description>
        <ContentActionLogoTwo src={CTA2} />
      </ContentAction>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    opacity: 0.8;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    z-index: -1;
    background: url(${LoginImgBg});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ContentAction = styled.div`
  max-width: 650px;
  margin-top: 100px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentActionLogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const ContentActionLogoTwo = styled.img`
  width: 90%;
`;
const ContentActionLogoThree = styled.img`
  width: 70%;
  margin-bottom: 20px;
`;
