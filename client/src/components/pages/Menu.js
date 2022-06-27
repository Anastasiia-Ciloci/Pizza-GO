import React from "react";
const styles = {
  desc: {
    height: "120px",
    overflow: "scroll",
  },
  title: {
    height: "50px",
  },
  image: {
    height: "175px",
  },
};
//need some logic to add to cart
//just UI below
const Menu = () => {
  return (
    <>
      <div className="col-md-3 text-center rounded card mb-5 pb-5">
        <img
          alt="`placeholder`"
          className="mt-3 rounded mx-3"
          src={`http://theawesomedaily.com/wp-content/uploads/2016/09/pictures-of-pizza-23-1.jpg`}
          height="200px"
          length="100%"
        ></img>
        <h4 className="text-uppercase fs-5 mt-4" style={styles.title}>
          name of pizza from DB
        </h4>
        <div className="px-2">
          <p className="text-success fw-bold px-1">$ item price</p>
          <div className="" style={styles.desc}>
            <p>item description</p>
          </div>
          <button
            className="btn btn-success mt-3"
            // onClick={addToCart}
          >
            Add to cart
          </button>

          {/* <div
            className="alert alert-success alert-dismissible fade show mt-5"
            role="alert"
            style={itemAdded()}
            onClick={() => setHasBeenAdded(false)}
          > */}
          <p>
            <strong>This </strong> added to cart!
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="alert"
            aria-label="Close"
          ></button>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Menu;
