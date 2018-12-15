import React from "react";
import ScrollableAnchor from "react-scrollable-anchor/lib/ScrollableAnchor";

const Interests = () => (
  <ScrollableAnchor id="interests">
    <section className="content-section bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-6">Interests</h2>
        <p className="lead mb-5">
          When I'm not programming, I enjoy being outdoors, exercising, and spending time with my girlfriend 
          and&nbsp;
          <a 
            className="text-secondary" 
            href="https://www.instagram.com/p/BYRt3oGgM7P/" 
            target="_blank"
            rel="noopener noreferrer">
            dog
          </a>.
          I am also a&nbsp;
          <a 
            className="text-secondary" 
            href="https://www.youtube.com/watch?v=Ji6on9Z137c" 
            target="_blank"
            rel="noopener noreferrer">
            musician
          </a>; 
          I play guitar, piano, and produce&nbsp;
          <a 
            className="text-secondary" 
            href="https://soundcloud.com/seankeymusic/sets/while-true-ep" 
            target="_blank"
            rel="noopener noreferrer">
            electronic music
          </a>. 
        </p>
      </div>
    </section>
  </ScrollableAnchor>
);
export default Interests;
