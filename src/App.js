import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import AboutMe from "./components/AboutMe";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/footer";

function App() {

  return (
    <Fragment>

      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Portfolio />
      <ContactMe />
      <Footer />
    </Fragment>
  );
}

export default App;
