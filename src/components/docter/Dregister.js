import React, { useState } from "react";
const ENDPOINT = "https://medicareserver.onrender.com";

const Dregister = () => {
  const [inputs, setInputs] = useState({
    dname: "",
    demail: "",
    dmobile: "",
    doccupation: "",
    dpassword: "",
    dcpassword: "",
  });

  let name, value;

  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      dname,
      demail,
      dmobile,
      doccupation,
      dpassword,
      dcpassword,
    } = inputs;
    const res = await fetch(`${ENDPOINT}/dregister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dname,
        demail,
        dmobile,
        doccupation,
        dpassword,
        dcpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("invalid registration");
      alert("Invalid registration");
    } else {
      console.log("registration successfull");
      alert("registration successfull");
    }
  };
  return (
    <>
      <section className="dsection">
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <form method="POST" className="dform mx-1 mx-md-4" id="register-form">
          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="" htmlFor="dname">
                Your Name
              </label>
              <input
                value={inputs.name}
                onChange={handleChange}
                type="text"
                id="dname"
                className="form-control"
                name="dname"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example3c">
                Your Email
              </label>
              <input
                value={inputs.email}
                onChange={handleChange}
                type="email"
                id="form3Example3c"
                className="form-control"
                name="demail"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="dmobile">
                Your Mobile no
              </label>
              <input
                value={inputs.mobile}
                onChange={handleChange}
                type="number"
                id="dmobile"
                className="form-control"
                name="dmobile"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="doccupation">
                occupation
              </label>
              <input
                value={inputs.doccupation}
                onChange={handleChange}
                type="text"
                id="doccupation"
                className="form-control"
                name="doccupation"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4c">
                Password
              </label>
              <input
                value={inputs.password}
                onChange={handleChange}
                type="password"
                id="form3Example4c"
                className="form-control"
                name="dpassword"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4cd">
                Repeat your password
              </label>
              <input
                value={inputs.cpassword}
                onChange={handleChange}
                type="password"
                id="form3Example4cd"
                className="form-control"
                name="dcpassword"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <input
              type="submit"
              className="btn"
              name="dregister"
              value="register"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Dregister;
