import React from "react";
import header from "../assets/img/header.jpg";
const styles = {
  header: {
    backgroundImage: `url(${header})`,
    backgroundSize: "stretch",
    width: "100%",
    height: 300,
  },
  p: {
    fontFamily: "Rubik Moonrocks",
    fontSize: "6.75rem",
    color: "#133c14",
    textShadow: "2px 4px #efddb2",
  },
};

const Header = () => {
  return (
    <>
      <div style={styles.header}>
        <div classname="">
          <p className="text-sm-center text-justify pt-5 " style={styles.p}>
            Pizza GO
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
