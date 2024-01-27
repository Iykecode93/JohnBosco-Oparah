import React from "react";
import html from "../../asset/html copy.png";
import css from "../../asset/css copy.png";
import javaScript from "../../asset/javascript copy.png";
import react from "../../asset/react copy.png";
import git from "../../asset/git copy.png";
import vsc from "../../asset/visual-studio-code-logo-png-transparent.png";
import noteBook from "../../asset/NicePng_python-logo-png_701999.png";
import communicate from "../../asset/—Pngtree—communication icon_3607861.png";
import creativity from "../../asset/pngaaa.com-3504579.png";
import learning from "../../asset/pngkey.com-brains-png-1149736.png";
import testing from "../../asset/testing.png";

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
            <h3 className="skills--section--title">Front-End</h3>
          </div>
          <div className="skills--section--card--content">
            <div className="skills--section--description">
              <div className="skills--section--list">
                <img className="skills--section--icon" src={html} alt="" /> HTML
              </div>
              <div className="skills--section--list">
                <img className="skills--section--icon" src={css} alt="" /> CSS
              </div>
              <div className="skills--section--list">
                <img
                  className="skills--section--icon"
                  src={javaScript}
                  alt=""
                />{" "}
                JavaScript
              </div>
              <div className="skills--section--list">
                <img className="skills--section--icon" src={react} alt="" />{" "}
                React
              </div>
            </div>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Text Editors/IDEs</h3>
          </div>
          <div className="skills--section--card--content">
            <div className="skills--section--description">
              <div className="skills--section--list">
                <img className="skills--section--icon" src={vsc} alt="" /> VS
                Code
              </div>
              <div className="skills--section--list">
                <img className="skills--section--icon" src={noteBook} alt="" /> Jupter Notebook
              </div>
            </div>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Version Control</h3>
          </div>
          <div className="skills--section--card--content">
            <div className="skills--section--description">
              <div className="skills--section--list">
                <img className="skills--section--icon" src={git} alt="" /> Git
              </div>
            </div>
          </div>
        </div>
        

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Soft Skill</h3>
          </div>
          <div className="skills--section--card--content">
            <div className="skills--section--description">
              <div className="skills--section--list">
                <img className="skills--section--icon" src={communicate} alt="" />Communication
              </div>
              <div className="skills--section--list">
                <img className="skills--section--icon" src={creativity} alt="" /> Creativity
              </div>
              <div className="skills--section--list">
                <img className="skills--section--icon" src={learning} alt="" />Continuous Learning
              </div>
              <div className="skills--section--list">
                <img className="skills--section--icon" src={testing} alt="" />Testing and QA
              </div>
            </div>
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
