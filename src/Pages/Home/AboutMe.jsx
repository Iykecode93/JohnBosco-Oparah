import React from "react";
import pics2 from "../../asset/imageedit_22_2252662819 copy.gif";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={pics2} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="about--section--heading">About Me</h1>
          <p className="about--section--description">
            Passionate Software Engineer with 2+ years of experience
            specializing in front-end development and UI/UX optimization. Adept
            at delivering high-performance web applications using JavaScript,
            React.js, and other modern frameworks. <br/> Proven track record of
            boosting system efficiency, improving user experience, and leading
            full project lifecycles. Seeking opportunities to apply innovative
            solutions to complex problems within a dynamic development team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
