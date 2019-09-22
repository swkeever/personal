import React, { Component } from "react";

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1">Sean Keever</h1>
      <h2 className="mb-5">
        Welcome to my personal page
      </h2>
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
        Learn More
      </a>
    </div>
    <div className="overlay" />
  </header>
);

export default Header;
