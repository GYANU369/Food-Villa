import {LINKEDIN_LINK} from "../../public/common/constants.js";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>❤️</span>
      <a className="linkedin-name" href={LINKEDIN_LINK} target="_blank">
        GyanSagar Gautam
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        Tasty <span>Trails</span>
      </strong>
    </div>
  );
};

export default Footer;