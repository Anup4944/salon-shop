import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundForward } from "react-icons/io";
import HomeOne from "../images/img2.jpg";
import HomeTwo from "../images/img7.jpg";

const Section = styled.section`
  height: 100%;
  width: 100%;
  padding: 10rem calc((100vw - 1300px) / 2);
`;
const Conatiner = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;
const Heading = styled.div`
  font-size: 5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
`;
const InfoLink = styled(Link)``;
const Arrow = styled(IoMdArrowRoundForward)``;

const Listing = () => {
  return (
    <Section>
      <Conatiner>
        <Heading></Heading>

        <InfoRow>
          <InfoWrap>
            <Image src={HomeOne} alt="home" />
            <h2>Good hair cut brings good vibes</h2>
            <InfoLink to="/">
              <p>View more</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap>
            <Image src={HomeTwo} alt="home" />
            <h2>Open 7 days till 9PM</h2>
            <InfoLink to="/">
              <p>View more</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Conatiner>
    </Section>
  );
};

export default Listing;
