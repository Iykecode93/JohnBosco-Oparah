import data from "../../data/index.json";
import React from "react";
import github from "../../asset/github-logo copy 2.png";
import screenshort from "../../asset/Screenshot 2024-01-27 at 10.01.08 PM.png";
import eye from "../../asset/eye-icon-9665.png";
import echete from "../../asset/Screenshot 2024-01-28 at 12.09.37 AM.png";
import calc from "../../asset/Screenshot 2024-01-28 at 12.27.49 AM.png";

const MyPortfolio = () => {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="about--section--heading">Projects</h2>
        </div>
        <div>
          <a
            className="btn btn-github"
            href="https://github.com/Iykecode93"
            target="_blank"
          >
            <img className="btn-github-img" src={github} alt="" />
            Visit My GitHub
          </a>
        </div>
      </div>

      <div className="portfolio--container-box">
      <div className="portfolio--section--container">
          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={screenshort} alt="" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Mentor-Challenge</h3>
                <p className="text-md">
                  Get your team in snyc, no matter your location. Streamline
                  processes, create team rituals, and watch productivity soar.
                </p>
              </div>
              <div className="view--link">
                <div className="text-sm portfolio--link">
                  <img className="btn-github-img--link" src={github} alt="" />
                  <a
                    className="portfolio--link--a"
                    href="https://github.com/Iykecode93/mentor-challenge.git"
                    target="_blank"
                  >
                    <span>gitHub</span>
                  </a>
                </div>
                <div className="text-sm portfolio--link">
                  <img className="btn-github-img--link" src={eye} alt="" />
                  <a
                    className="portfolio--link--a"
                    href="https://mentor-challenge.vercel.app/"
                    target="_blank"
                  >
                    <span>live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio--section--container">
          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={screenshort} alt="" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Mentor-Challenge</h3>
                <p className="text-md">
                  Get your team in snyc, no matter your location. Streamline
                  processes, create team rituals, and watch productivity soar.
                </p>
              </div>
              <div className="view--link">
                <div className="text-sm portfolio--link">
                  <img className="btn-github-img--link" src={github} alt="" />
                  <a
                    className="portfolio--link--a"
                    href="https://github.com/Iykecode93/mentor-challenge.git"
                    target="_blank"
                  >
                    <span>gitHub</span>
                  </a>
                </div>
                <div className="text-sm portfolio--link">
                  <img className="btn-github-img--link" src={eye} alt="" />
                  <a
                    className="portfolio--link--a"
                    href="https://mentor-challenge.vercel.app/"
                    target="_blank"
                  >
                    <span>live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio--section--container">
          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={echete} alt="" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Echete Academy</h3>
                <p className="text-md">
                  Our workplace culture promotes learning and knowledge sharing.
                  <br /> The Best Tech. Learning Platform...
                </p>
              </div>
              <div className="view--link">
                <div className="text-sm portfolio--link">
                  <img className="btn-github-img--link" src={github} alt="" />
                  <a
                    className="portfolio--link--a"
                    href="https://github.com/Iykecode93/Echete_Academy_Project1.git"
                    target="_blank"
                  >
                    <span>gitHub</span>
                  </a>
                </div>
                <div className="text-sm portfolio--link">
                  <img className="btn-github-img--link" src={eye} alt="" />
                  <a
                    className="portfolio--link--a"
                    href="https://echete-academy.vercel.app/"
                    target="_blank"
                  >
                    <span>live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio--section--container">
          <div className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={calc} alt="" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">Supa Calc.</h3>
                <p className="text-md">
                  In today's fast-paced world, efficiency and accuracy matter
                  more than ever. Our state-of-the-art Online
                  Calculator.
                </p>
              </div>
              <div className="view--link">
                <div className="text-sm portfolio--link">
                  <img className="btn-github-img--link" src={github} alt="" />
                  <a className="portfolio--link--a" href="https://github.com/Iykecode93/Calculator.git" target="_blank">
                    <span>gitHub</span>
                  </a>
                </div>
                <div className="text-sm portfolio--link">
                  <img className="btn-github-img--link" src={eye} alt="" />
                  <a
                    className="portfolio--link--a"
                    href="https://calculator-vert-chi.vercel.app/"
                    target="_blank"
                  >
                    <span>live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default MyPortfolio;
