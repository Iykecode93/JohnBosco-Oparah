import React from "react";
import downloadIcon from "../../asset/—Pngtree—file download icon_4719240 copy.png";
import pics from "../../asset/john0 copy.png";

const HeroSection = () => {

  const onButtonClick = () => {
    fetch("JOHNBOSCO IKECHUKWU OPARAH FEDev..pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL =
            window.URL.createObjectURL(blob);

            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "JOHNBOSCO I. OPARAH";
            alink.click();
      })
    })
  }

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm JohnBosco</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Front-End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Enthusiastic and highly motivated Front-End Developer with a strong
            foundation in web development and a passion for learning.
          </p>
        </div>
        <button onClick={onButtonClick} className="btn btn-primary">
          <img className="btn-download" src={downloadIcon} alt="" />{" "}
          <h4>Resume</h4>
        </button>
      </div>
      <div className="hero--section--img">
        <img src={pics} alt="Hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
