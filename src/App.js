import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import DropDown from "./components/DropDown";
import Footer from "./components/Footer";
import { BrowserRouter as Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
