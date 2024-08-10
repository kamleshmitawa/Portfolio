import "./Projects.css";
import {
  SiHtml5,
  // SiExpress,
  // SiMongodb,
  // SiNodedotjs,
  SiReact, SiMui, SiPrettier
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsFiletypeScss } from "react-icons/bs";
import { FaBitbucket, FaJira } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import sarma from "../../assets/sarma.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";

export const Projects = () => {
  return (
    <div className="section">
      <h2 className="section__title different">Projects</h2>
      <div className="allProjects">
        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={sarma} alt="StoryBook" />
              </div>
            </div>
            <div className="project_information">
              <h2>Sarma</h2>
              <p>
                Sarma is the Mistral Data stock resource allocation system.
                Using Sarma, allocations can be updated quickly via the
                web-based user interface with changes validated and immediately
                pushed out in real- time to control centers, staff, and other
                systems.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
                <SiReact />
                <FaBitbucket />
                <SiMui />
                <SiPrettier />
                <VscGithub />
                <FaJira />
                <BsFiletypeScss />
              </div>
              <a
                href="https://www.mistral-data.com/product/sarma/"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btns onbt">
                  Click to View
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={project6} alt="Weather" />
              </div>
            </div>
            <div className="project_information">
              <h2>Weather App</h2>
              <p>
                Introducing a weather app. It&apos;s your go-to destination for
                accurate weather forecasts, offering detailed information for
                weather-tracking experience.
                <br />
                <br />A distinctive Weather app project, expertly developed by
                me within a swift 6-hour timeframe.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://get-live-weather-details.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/rkvirajgupta/Weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div id="newset">
                <img id="newsetimg" src={project7} alt="Translator" />
              </div>
            </div>
            <div className="project_information">
              <h2>Translator App</h2>
              <p>
                Introducing a fresh app named &quot;Translator App.&quot; It&apos;s a renowned
                language hub, offering a variety of languages for translation.
                <br />
                <br />
                An innovative Translator app project, meticulously crafted by me
                in a mere 6 hours,
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://translate-language-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/rkvirajgupta/Translator-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
