function Social(props) {
  const styles = {
    footerItem: {
      display: "inline-block",
      margin: "2%",
      color: "azure",
      fontSize: "31px",
    },
  };

  return (
    <div style={styles.footerItem}>
      <a href={props.link}>
        <p> {props.URL}</p>
      </a>
    </div>
  );
}

export default Social;
