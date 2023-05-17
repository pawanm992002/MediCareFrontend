import React, { useState } from "react";

const ENDPOINT = "https://medicareserver.onrender.com";
const Dlogin = () => {
  const [inputs, setInputs] = useState({ dmobile: "", dpassword: "" });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { dmobile, dpassword } = inputs;

    const res = await fetch(`${ENDPOINT}/dlogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dmobile,
        dpassword,
      }),
    });
    const data = await res.json();
    // console.log(data);
  };

  return (
    <>
      <section className="dsection">
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>
        <form method="POST" className="dform">
          <div className="field form-outline mb-4">
            <label className="form-label m-2" htmlFor="form3Example3">
              Mobile No.
            </label>
            <input
              type="number"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid Mobile no."
              name="dmobile"
              value={inputs.dmobile}
              onChange={handleChange}
            />
          </div>

          <div className="field form-outline mb-3">
            <label className="form-label m-2" htmlFor="form3Example4">
              Password
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
              name="dpassword"
              value={inputs.dpassword}
              onChange={handleChange}
            />
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <input
              type="submit"
              className="btn"
              name="dlogin"
              value="Login"
              onClick={handleSubmit}
            />
          </div>
        </form>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
};

export default Dlogin;
