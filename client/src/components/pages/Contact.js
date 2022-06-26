import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <h1>Contact Me</h1>
        <form className="form-group mb-3">
          <div className="form-group mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Enter your name:
            </label>
            <input
              type="emailtext"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address:
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary" type="button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
