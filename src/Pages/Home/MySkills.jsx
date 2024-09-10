import React from "react";
import html from "../../asset/html copy.png";

// import data from "../../data/index./json";

const MySkills = () => {
  return (
    <section className="skills--section" id="Stack">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Technical Skills</h2>
      </div>

      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Frontend Development</h3>
          </div>
          <div className="skills--section--card--content">
            <div>
              <b>HTML, CSS, JavaScript, React.js, <br /> <br /> Bootstrap, Redux</b>
            </div>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Backend Development</h3>
          </div>
          <div><b>Node.js, RESTful APIs, Python</b></div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Database Management</h3>
          </div>
          <div><b>MySQL, PostgreSQL</b></div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Tools & Frameworks</h3>
          </div>
          <div>
            <b>WordPress, Next.js, Tutor LMS, <br /> <br /> WooCommerce, Elementor</b>
          </div>
        </div>
      </div>

      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img-versionC">
            <h3 className="skills--section--title">
              Version Control & Collaboration
            </h3>
          </div>
          <div>
            <b>Git, GitHub, Agile, Jira</b>
          </div>
          {/* <div className="skills--section--card--content">
            <div className="skills--section--description">
              <div className="skills--section--list">
                <img className="skills--section--icon" src={git} alt="" /> Git
              </div>
            </div>
          </div> */}
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Quality Assurance</h3>
          </div>
          <div>
            <b>
              Testing methodologies, <br /> <br /> Bug tracking, Debugging tools
            </b>
          </div>
        </div>

        <div className="skills--section--card">
          <div className="skills--section--img">
            <h3 className="skills--section--title">Soft Skills</h3>
          </div>
          <div>
            <b>
              Analytical Thinking, Teamwork <br /> <br /> Problem-Solving,
              Leadership, <br /> <br /> Communication
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
