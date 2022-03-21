import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #000;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  background: #fff;
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const First = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const Input = styled.input`
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  width: 250px;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 10px;
  padding: 10px;
`;

const Second = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  margin-top: 10px;
  margin-left: 50px;
  width: 500px;
  height: 100px;
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
`;

const ContactForm = () => {
  return (
    <Wrapper>
      <Form>
        <First>
          <h3> Full Name</h3>
          <Input placeholder="YOUR FULL NAME" />
        </First>

        <First>
          <h3> Email </h3>
          <Input placeholder="YOUR EMAIL" />
        </First>
        <Second>
          <h3>Message </h3>
          <TextArea placeholder="YOUR MESSAGE" />
        </Second>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
