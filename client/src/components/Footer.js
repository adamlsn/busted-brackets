// import Project from "./Project";
import Social from "./Social";

const links = [
  {
    URL: "Github",
    link: "https://github.com/adamlsn/busted-brackets",
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
