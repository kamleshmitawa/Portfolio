import { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/Theme";

export const Footer = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <div className={"section " + themename}>
      <div className="footerBox">
        <h3 className="footer">Made By Kamlesh 🚀</h3>
      </div>
    </div>
  );
};
