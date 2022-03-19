import React from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Section = styled.section`
  background: #000d1a;
  color: #fff;
  min-height: 600px;
  padding: 3rem calc((100vw - 1300px));
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;
const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Quotes = styled.div`
  flex: 1;
  padding: 2rem 0rem;

  h3 {
    font-size: clamp(2rem, 8vw, 5rem);
  }
`;
const FooterInfo = styled.div`
  padding: 3rem;
  line-height: 3;
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;
const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
`;
const YouTube = styled(FaYoutube)`
  ${Icons}
`;
const FaceBook = styled(FaFacebook)`
  ${Icons}
`;
const Insta = styled(FaInstagram)`
  ${Icons}
`;
const Twitter = styled(FaTwitter)`
  ${Icons}
`;
const Contact = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 7680px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quotes>
            <h3>
              Let's find <br /> your dream haircut{" "}
            </h3>
          </Quotes>
          <FooterInfo>
            <h4>Contact Us</h4>
            <Link to="/">FAQ </Link>
            <Link to="/">Support </Link>
            <Link to="/">Question </Link>
          </FooterInfo>
          <FooterInfo>
            <h4>Location</h4>
            <Link to="/">Princess Highway </Link>
            <Link to="/">Rockdale NSW </Link>
            <Link to="/">Sydney </Link>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <YouTube />
            </a>
          </SocialIcons>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <Insta />
            </a>
          </SocialIcons>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <FaceBook />
            </a>
          </SocialIcons>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Twitter />
            </a>
          </SocialIcons>
          <Contact>
            <Button to="/">
              Let's chat <IoMdArrowRoundForward />
            </Button>
          </Contact>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
