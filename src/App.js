import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import DropDown from "./components/DropDown";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Homes from "./pages/Homes";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => [Aos.init()], []);
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/homes" exact component={Homes} />
        <Route path="/about" exact component={About} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/contact" exact component={Contact} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
