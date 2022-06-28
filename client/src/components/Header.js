import React from "react";

const styles = {
  header: {
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
    height: 300,

    h1: {
      height: 200,
      fontFamily: "Kaushan Script",
      fontSize: "2rem",
    },
  },
};

const Header = () => {
  return (
    <>
      <div style={styles.header} className="p-4 ">
        <div className="mt-8">
          <h1 className=" mb-2 text-center ">Pizza GO</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
