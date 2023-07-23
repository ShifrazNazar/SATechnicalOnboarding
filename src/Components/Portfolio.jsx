/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pattern.jpg";

const imageAltText = "pattern";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Linkedin Clone",
    description:
      "I have developed a LinkedIn clone website utilizing ReactJS, Redux, and Firebase by following a tutorial led by Sonny Sangha. The platform allows users to establish login profiles and features a live chat system. This project serves as a demonstration of my proficiency in web development, showcasing my capability to create functional, user-friendly websites.",
    url: "https://linkedin-clone-6b0d4.web.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "The website being viewed was created by me. Its development was motivated by my desire to gain more knowledge about Next JS, Typescript, Framer Motion, Tailwind and Sanity CMS. This website incorporates a backend using Sanity, which allows for updates to be made to the website's information without requiring the rebuilding of the application. The initial inspiration for the website was derived from a video on YouTube presented by Sonny Sangha.",
    url: "https://portfolio-ruby-eta-31.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "The weather app was created using HTML, CSS, JavaScript, and RapidAPI. The app allows users to search for a location and displays the current weather information for that location, including temperature, sun rise and sun set. The app has a clean and user-friendly interface and is responsive on any device. The project demonstrates proficiency in HTML, CSS, JavaScript, and working with APIs.",
    url: "https://shifraznazar.github.io/Weather-API/",
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
