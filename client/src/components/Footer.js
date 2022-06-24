import React from "react";

const styles = {
  footer: {
    bottom: 0,
    width: "100%",
    backgroundColor: "#0b3008",
  },
  rightBtn: {
    textAlign: "right",
  },
  textLeft: {
    textAlign: "left",
  },
  h5: {
    letterSpacing: "10px",
  },
};

const Footer = () => {
  return (
    <>
      <footer
        className="text-white text-center text-lg-start"
        style={styles.footer}
      >
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <p
                className="text-uppercase mb-4 text-center h5"
                style={styles.h5}
              >
                Pizza Go
              </p>

              <p className="text-center pt-3">
                Pizza Go. All rights reserved since 2022.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
