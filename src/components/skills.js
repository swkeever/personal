import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

// currently description is not being used, maybe later I will add something.
const ServicesOffered = [
  {
    title: "Tools",
    description: "Git, Docker, Ubuntu",
    icon: "fas fa-toolbox"
  },
  {
    title: "Languages",
    description: "Java, C, JavaScript",
    icon: "fas fa-code"
  },
  {
    title: "Databases",
    description: "SQL Server, SQL++, Azure",
    icon: "fas fa-database"
  },
  {
    title: "Hardware",
    description: "SystemVerilog, FPGA/ASIC design",
    icon: "fas fa-server"
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="skills">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Skills</h3>
          <h2 className="mb-5">Languages &amp; Technologies</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className={service.icon} />
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
