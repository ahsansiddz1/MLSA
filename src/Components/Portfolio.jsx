

import React from "react";
import image from "../images/siddz.jpg";

const imageAltText = "Ahsan Siddz Picture";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Designed a website for a softwTalking Canvas - Designed UI/UX ",
    description:
      "Talking Canvas Began As A Portrait Studio With The Ambition Of Communicating An Image's Energy Through Imaginative Means.",
    url: "https://thetalkingcanvas.com/",
  },
  {
    title: "My All social accounts and portfolio",
    description:
      "My Linktr.ee profile",
    url: "https://linktr.ee/ahsansiddz",
  },
  {
    title: "My Portfolio WebSite",
    description:
      "Includes my experience and design abilities.",
    url: "https://ahsansiddz1.github.io/",
  },
  {
    title: "How To become an MLSA",
    description:
      "Demo Video interview for MLSA",
    url: "https://www.youtube.com/watch?v=SxTfT9QqSpY&t=48s",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
