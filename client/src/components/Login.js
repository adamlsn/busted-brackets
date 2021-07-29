function Project(props) {
  return (
    <div style={{ display: "inline-block", margin: "3%", width: "200px" }}>
      <img
        style={{ width: "150px", height: "150px" }}
        src={props.img}
        alt="Project photo"
      />
      <h2>{props.name}</h2>
      <a href={props.deployed}>Live Link</a>
      <a href={props.repository}>Repository Link</a>
    </div>
  );
}

export default Project;
