import ServiceItems from "./ServiceItems";

function Services() {
  let serviceItems = [
    {
      id: 1,
      head: "Renovation and restoration",
      description:
        " Experience the fusion of imagination and expertise with EtudesArchitectural Solutions.",
    },
    {
      id: 2,
      head: "Countinuous Support",
      description:
        "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
    },
    {
      id: 3,
      head: "App Access",
      description:
        "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
    },

    {
      id: 4,
      head: "Consulting",
      description:
        "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
    },
    {
      id: 5,
      head: "Project Management",
      description:
        "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
    },
    {
      id: 6,
      head: "Architectural Solutions",
      description:
        "Experience the fusion of imagination and expertise with Etudes Architectural Solutions.",
    },
  ];

  return (
    <div className="service-page">
      <div className="service-head">
        <h3 className="the-head">*</h3>
        <div className="the-head">A passion for creating spaces</div>
        <p>
          Our comprehensive suite of professional services caters to a diverse
          clientele, ranging from homeowners to commercial developers.
        </p>
      </div>
      <div>
        <ServiceItems />
      </div>
    </div>
  );
}

export default Services;
