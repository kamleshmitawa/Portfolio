import "./Techstacks.css";
import { skills } from "../../Constants";

export const Techstacks = () => {
  return (
    <div className="section" data-aos="fade-right">
      <h2 className="section__title different">Skills</h2>
      <div className="techsection">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index}>
              <IconComponent size={55} />
              <h5>{skill.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
