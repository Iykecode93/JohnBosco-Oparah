import React from "react";
import pics2 from "../../asset/IMG-20201124-WA0006 copy.jpg";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={pics2} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section-description">
            A dynamic and deeply motivated front-end developer, driven by
            enthusiasm and possessing a robust background in web development,
            coupled with an insatiable thirst for learning. Armed with two years
            of hands-on experience in frontend technologies, I'm enthusiastic
            about making valuable contributions to pioneering projects.
            Proficient in HTML, CSS, JavaScript and React, and eager to further
            develop expertise in frameworks like Node.js, C# and other
            cutting-edge technologies.
          </p>
          <p className="hero--section-description">
            My strengths lie in adept problem-solving, collaborative skills, and
            a natural ability to adapt to fresh challenges. I'm unwaveringly
            committed to delivering top-notch, usercentric web applications
            while continually honing my skills in the realm of full-stack
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
