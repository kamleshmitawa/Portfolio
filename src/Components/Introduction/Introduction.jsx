import "./Introduction.css";
import { Type } from "../Type/Type";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import KamleshMitawa_Resume from "../../assets/resume/KamleshMitawa_Resume.pdf";
import { email, github, linkedIn, phoneNo } from "../../Constants";

export const Introduction = () => {
  return (
    <div className="introduction center">
      <h1 data-aos="fade-right" className="mobileHead">
        Hello, I am <span className="introduction__name">Kamlesh Mitawa</span>
      </h1>
      <Type />
      <p className="introduction__desc" data-aos="fade-right">
        I’m a passionate React.js Developer with 6 years of experience in web, mobile, and distributed technologies. Specializing in JavaScript, I excel at creating robust applications and scalable solutions with React, Redux, and TypeScript.
        Driven by a continuous desire to learn and innovate, I actively contribute to tech blogs and share my insights on ReactJS. Let’s connect and explore exciting opportunities in web and mobile development!
      </p>
      <div className="introduction__contact center">
        <a
          href={github}
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer"
          aria-label="mail"
          className="link link--icon"
        >
          <EmailIcon />
        </a>
        <a
          href={`tel:${phoneNo}`}
          target="_blank"
          rel="noreferrer"
          aria-label="phone"
          className="link link--icon"
        >
          <PhoneIcon />
        </a>
        <a
          href={linkedIn}
          aria-label="linkedin"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <button
        className="btnResume"
        onClick={() => {
          window.open(KamleshMitawa_Resume);
        }}
      >
        Resume
      </button>
    </div>
  );
};
