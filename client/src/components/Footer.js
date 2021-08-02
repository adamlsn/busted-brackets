// import Project from "./Project";
import Social from "./Social";

const links = [
  {
    URL: "Github",
    link: "https://github.com/adamlsn/busted-brackets",
  },
];

function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#4e3d42",
      }}
    >
      {links.map((link) => (
        <Social URL={link.URL} link={link.link} />
      ))}
      <h2>
        Contributions: Adam Olson, Devon Ross, Kaan Nazlioz, Mitchell Spierings,
        Luca Wickland
      </h2>
    </div>
  );
}

export default Footer;
