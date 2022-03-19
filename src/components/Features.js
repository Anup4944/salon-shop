import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import ImageNine from "../images/imgNine.jpg";

const Section = styled.section`
  background: #000d1a;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
`;
const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -8px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ColumnLeft>
            <Content>
              <h1>Sunning customer Service</h1>
              <p>
                What is Lorem Ipsum in English? The lorem ipsum is a placeholder
                text used in publishing and graphic design. This filler text is
                a short paragraph that contains all the letters of the alphabet.
                The characters are spread out evenly so that the reader's
                attention is focused on the layout of the text instead of its
                content.
              </p>
              <p>
                The characters are spread out evenly so that the reader's
                attention is focused on the layout of the text instead of its
                content.
              </p>
              <Button to="/"> Learn More</Button>
            </Content>
          </ColumnLeft>

          <ColumnRight>
            <Image src={ImageNine} />
          </ColumnRight>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Features;
