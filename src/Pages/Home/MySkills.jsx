import React from "react";
import image from "../../asset/feather-pen-1 copy.png";
// import data from "../../data/index./json";

const MySkills = () => {
  return (
    <section className="skills--section" id="Stack">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Tech Stack</h2>
      </div>

      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Front-End Technologies</h3>
          </div>
          <div className="skills--section--card--content">
            <ul className="skills--section--description">
              <li className="skills--section--list">
                <img src={image} alt="" /> HTML
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> CSS
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> JavaScript
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> React
              </li>
            </ul>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Version Control</h3>
          </div>
          <div className="skills--section--card--content">
            <ul className="skills--section--description">
              <li className="skills--section--list">
                <img src={image} alt="" /> HTML
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> CSS
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> JavaScript
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> React
              </li>
            </ul>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Text Editors/IDEs</h3>
          </div>
          <div className="skills--section--card--content">
            <ul className="skills--section--description">
              <li className="skills--section--list">
                <img src={image} alt="" /> HTML
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> CSS
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> JavaScript
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> React
              </li>
            </ul>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Soft Skills</h3>
          </div>
          <div className="skills--section--card--content">
            <ul className="skills--section--description">
              <li className="skills--section--list">
                <img src={image} alt="" /> HTML
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> CSS
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> JavaScript
              </li>
              <li className="skills--section--list">
                <img src={image} alt="" /> React
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default MySkills;
