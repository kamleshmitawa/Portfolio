import { useContext } from "react";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/Theme";
import { FaLinkedin } from "react-icons/fa";
import { email, github, linkedIn, phoneNo } from "../../Constants";
import "./Contact.css";

export const Contact = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <div className="section">
      <h2 className="section__title" data-aos="fade-right">
        Get in <span className="different">Touch</span>
      </h2>
      <div className="contactMain">
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
          >
            <CgMail className="email" />
          </a>
          <a
            href={`tel:${phoneNo}`}
            target="_blank" rel="noreferrer">
            <BsFillTelephoneFill className="phone" />
          </a>
        </div>
        <div className="mailNumber" data-aos="fade-right">
          <div>
            <span>
              <CgMail className="email" />
            </span>
            <span>
              <p>ksmitawa@gmail.com</p>
            </span>
          </div>
          <div className="iconsCont">
            <span>
              <BsFillTelephoneFill className="phone" />
            </span>
            <span>
              <p>+91-9671581175</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
