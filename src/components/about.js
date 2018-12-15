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
              I am a Junior studying computer science and engineering at the&nbsp;
              <a href="https://www.cs.washington.edu/" target="_blank">University of Washington</a> in Seattle. 
              I am driven to develop scalable software and I strive to learn something new every day. 
              I am currently seeking a software engineering internship for summer 2019. <a href="mailto:swkeever@gmail.com">Let me know</a> if you 
              know someone looking for a motivated developer. <i class="far fa-smile-beam"></i>
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#portfolio"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
