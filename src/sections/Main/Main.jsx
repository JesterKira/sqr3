import React from "react";
import { About, Features, Intro, Projects, Reviews } from "./components";

const Main = () => {
  return (
    <main className="Main">
      <Intro></Intro>
      <About></About>
      <Features></Features>
      <Projects></Projects>
      <Reviews></Reviews>
    </main>
  );
};

export default Main;
