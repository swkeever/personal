import React, { Component } from "react";

const Header = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto">
      <h1 className="mb-1">Sean Keever</h1>
      <h3 className="mb-5">
        Design. Develop. Deliver.
      </h3>
      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
        Discover
      </a>
    </div>
    <div className="overlay" />
  </header>
);

export default Header;
