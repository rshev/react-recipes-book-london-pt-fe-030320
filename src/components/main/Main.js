import React from "react";
import Header from "../header/Header";
import Nav from "../nav/Nav";

const Main = (props) => {
  return (
    <div className="main_page">
      <Header />
      <Nav />
      <main className="main"></main>
    </div>
  );
};

export default Main;
