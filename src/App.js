import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import DropDown from "./components/DropDown";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages";

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
      <Router>
        <Route path="/" exact component={Home} />
      </Router>

      <Footer />
    </>
  );
}

export default App;
