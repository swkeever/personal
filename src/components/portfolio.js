import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const origin = "https://swkeever.github.io"

/**
 * Requires images are 700 x 467 px
 */
const portfolioItems = [
  {
    imgSrc: "./img/333gle.jpg",
    heading: "333gle",
    description: "Google search mock-up. Built in CSE 333 course at the University of Washington.",
    link: "https://mock-google.herokuapp.com/"
  },
  {
    imgSrc: "./img/campus-paths.jpg",
    heading: "Campus Paths",
    description: "Finds the shortest path between two buildings using Dijkstra's algorithm. Built in CSE 331 course at the University of Washington.",
    link: origin + "/campuspaths"
  },
  {
    imgSrc: "./img/todo.jpg",
    heading: "Simple Todo",
    description:
      "A minimal todo list app with good ol' HTML, CSS, and JavaScript. Built in Colt Steele's Web Developer Bootcamp.",
    link: origin + "/todo"
  },
  {
    imgSrc: "./img/rbg-game.jpg",
    heading: "The Color Guessing Game",
    description:
      "If I give you RGB values, can you guess the color? Built in Colt Steele's Web Developer Bootcamp.",
    link: origin + "/colorgame"
  }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Recent Projects</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href={project.link} target="_blank">
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
