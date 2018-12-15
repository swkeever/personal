import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const origin = "https://swkeever.github.io"

/**
 * Requires images are 700 x 467 px
 */
const portfolioItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Campus Paths",
    description: "Find out the shortest path between two buildings at the University of Washington.",
    link: origin + "/campuspaths"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "(Old) Personal Page",
    description:
      "This was my old personal webpage before I gave it the update you're seeing now. :)",
    link: origin + "/personal-page-old"
  },
  {
    imgSrc: "./img/portfolio-3.jpg",
    heading: "Simple Todo",
    description:
      "A minimal todo list app with good ol' HTML, CSS, and JavaScript.",
    link: origin + "/todo"
  },
  {
    imgSrc: "./img/portfolio-4.jpg",
    heading: "The Color Guessing Game",
    description:
      "If I give you RGB values, can you guess the color?",
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
