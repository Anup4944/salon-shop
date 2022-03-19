import React from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Section = styled.section``;
const Container = styled.div``;
const FooterTop = styled.div``;
const Quotes = styled.div``;
const FooterInfo = styled.div``;
const FooterBottom = styled.div``;
const Contact = styled.div``;
const SocialIcons = styled.div``;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <Quotes>
            <h3>
              Let's find <br /> you dream haircut{" "}
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
              <FaYoutube />
            </a>
          </SocialIcons>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <FaInstagram />
            </a>
          </SocialIcons>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              <FaFacebook />
            </a>
          </SocialIcons>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter />
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
