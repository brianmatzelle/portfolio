import React from "react";
import "./App.css";
import 'react95/dist/themes/original';
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Cube3D from "./components/Cube3D";
import BlenderComponent from "./components/BlenderComponent";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: teal;
  }
`;

function App() {
  return (
    <div className="App">
      {/* <GlobalStyles /> */}
      <Home />
      <Projects />
      <Resume />
      <Contact />
      {/* <Cube3D /> */}
      <BlenderComponent />
    </div>
  );
}

export default App;
