import { useContext } from "react";
import "./About.css";
import { ThemeContext } from "../../Context/Theme";
import profilePic from "../../assets/profile00.jpeg";

export const About = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (<div className="section" data-aos="fade-right">
    <h2 className="section__title">
      About <span className="different">Me</span>
    </h2>
    <div className={"about " + themename}>
      <div className="about_logocontainer">
        <img src={profilePic} alt="Images" />
      </div>
      <div className="about_datacontainer">
        <p>
          Hello, I&apos;m
          <span className="different"> Kamlesh Mitawa </span> and I am from{" "}
          <span className="different">
            {" "}
            Bhiwani, Haryana, India.{" "}
          </span>
          I hold a Bachelor of Technology (B.Tech) degree in Computer Science from
          <span className="different"> Maharshi Dayanand University (MDU), Rohtak</span>.
          Currently, I am a  <span className="different"> Module Lead </span> at
          <span className="different"> Q3 Technologies, </span> where I contribute to various innovative projects and drive technological advancements.
        </p>
        <h4>Fun Facts & Hobbies That Define Me Beyond Coding :</h4>
        <p>
          <span className="different">
            ⚡ Helping Others Learn: </span> <span className="points">Passionate about supporting and guiding others in their learning journeys.</span>
        </p>
        <p>
          <span className="different">
            🍳 Cooking:</span> <span className="points">Currently diving into the world of culinary arts and trying out new recipes.</span>
        </p>
        <p>
          <span className="different">
            🌍 Traveling: </span> <span className="points">Enjoy exploring new places and cultures during my travels.</span>
        </p>
        <p>
          <span className="different">
            👶 Quality Time with Family: </span> <span className="points">I cherish spending time with children, enjoying playful activities and creating joyful moments together.</span>
        </p>
      </div>
    </div>
  </div>
  );
};
