import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              I'm glad you're here!
            </h2>
            <p className="lead mb-5">
              I am a senior studying Computer Engineering at the&nbsp;
              <a href="https://www.cs.washington.edu/" target="_blank">University of Washington</a>. 
              I will be working with the web development team at <a href="https://www.offerup.com/" target="_blank">OfferUp</a> as an intern this summer.
              Feel free to <a href="mailto:swkeever@gmail.com">reach out</a> to me if you have any questions!
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
