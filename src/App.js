import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import { SliderData } from "./data/SliderData";
import DropDown from "./components/DropDown";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import Listing from "./components/Listing";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listing />
    </>
  );
}

export default App;
