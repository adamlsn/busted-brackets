import Project from "./Project";
import Social from "./Social";

const links = [
  {
    URL: "Github",
    link: "https://github.com/mspierings96",
  },
  {
    URL: "Stack Overflow",
    link: "https://stackoverflow.com/users/14948647/mspierings96",
  },
  {
    URL: "Linkedin",
    link: "https://www.linkedin.com/in/mitchell-s-153a06117/",
  },
];

function Footer({}) {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#4e3d42" }}>
      {links.map((link) => (
        <Social URL={link.URL} link={link.link} />
      ))}
    </div>
  );
}

export default Footer;
