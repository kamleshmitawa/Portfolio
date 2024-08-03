import { useContext, useEffect, useState } from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ThemeContext } from "../../Context/Theme";

export const Timeline = () => {
  const [{ themename }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <div className="section mainsection">
      <h2 className="section__title" data-aos="fade-right">
        My <span className="different">Timeline 💫</span>
      </h2>
      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement
          date={"April 2021 - Present"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Module Lead (Frontend)
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Q3 Infotech Pvt Ltd, Gurugram
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Currently, I am actively managing client projects and leading development efforts on another key project. This involves overseeing project execution, ensuring client requirements are met, and taking charge of development tasks to drive successful project outcomes.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"January 2020 - March 2021"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Software Engineer, Frontend Developer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Square Yards Pvt Ltd, Gurugram
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Participated in the architecture, design, and implementation of the front-end for a comprehensive web application.
            Developed and implemented core features for a real estate web application, ensuring effective property listing and search functionalities.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date={"February 2019 - December 2019"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Software Engineer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Bhadani Technologies Pvt Ltd, Gurgaon
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Integrated Twilio’s communication APIs, enabling real-time chat, voice, and video features within the application to improve communication channels for both agents and customers.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"October 2018 - January 2019"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Jr. JavaScript Developer
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            ZestGeek Solutions, Mohali
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Collaborated with team members to adopt best practices in software design and development.
            Worked closely with design teams and senior engineers to create tailored software solutions for clients.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"July 2014 - June 2018"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            B.Tech in Computer Science
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            BRCM College of Engineering And Technology
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Maharshi Dayanand University (MDU), Rohtak, Haryana
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<StarRateIcon />}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
