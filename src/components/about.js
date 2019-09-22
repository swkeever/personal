import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              About Me
            </h2>
            <p className="lead mb-5">
              I'm a full-stack developer and senior studying Computer Engineering at the&nbsp;
              <a href="https://www.cs.washington.edu/" target="_blank">University of Washington</a>. 
              Currently, I'm geeking out over GraphQL, styled-components, and Gatsby.js. Ask me if you have any questions.
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#skills"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
