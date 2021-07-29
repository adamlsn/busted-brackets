function About(props) {
  const style = {
    text: {
      width: "40%",
      margin: "auto",
      fontSize: "22px",
    },
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="pageHeader">About Me</h2>
      <img src={Pic} class="avatar" />
      <p style={style.text}>
        Hello! Thank you for checking out my Web Development Portfolio! My name
        is Mitchell Spierings, I was born and raised a Wisconsin kid through and
        through. I attended the University of Wisconsin Oshkosh from 2014 to
        2018, and graduated with a Bachelors Degree in Business Management with
        an emphasis in Insurance and Risk Management. Before entering the career
        field of Web Development, I held several positions as a Large Loss
        Insurance Adjuster. I was fortenate enough to travel the country with
        this position, but always aspired to being passioante about my career
        and creating something on a daily basis. I am 25 years old, and grew up
        in and around the Madison, Wisconsin area. A few of my favorite hobbies
        are fishing, hunting, weight lifting, and of course web development!
        Please review my portfolio, and reach out to me if you would like to
        work together!
      </p>
    </div>
  );
}

export default About;
