import React, { useState } from "react";
const ENDPOINT = "https://medicareserver.onrender.com";

const Pregister = () => {
  const [inputs, setInputs] = useState({
    pname: "",
    pemail: "",
    pmobile: "",
    pseekness: "",
    ppassword: "",
    pcpassword: "",
  });

  let name, value;

  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { pname, pemail, pmobile, pseekness, ppassword, pcpassword } = inputs;
    const res = await fetch(`${ENDPOINT}/pregister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pname,
        pemail,
        pmobile,
        pseekness,
        ppassword,
        pcpassword,
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
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
          Patient Register
        </p>

        <form method="POST" className="dform mx-1 mx-md-4" id="register-form">
          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="pname">
                Patient Name
              </label>
              <input
                value={inputs.pname}
                onChange={handleChange}
                type="text"
                id="pname"
                className="form-control"
                name="pname"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example3c">
                Patient Email
              </label>
              <input
                value={inputs.pemail}
                onChange={handleChange}
                type="email"
                id="form3Example3c"
                className="form-control"
                name="pemail"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="pmobile">
                Patient Mobile no
              </label>
              <input
                value={inputs.pmobile}
                onChange={handleChange}
                type="number"
                id="pmobile"
                className="form-control"
                name="pmobile"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="pseekness">
                Seekness
              </label>
              <input
                value={inputs.pseekness}
                onChange={handleChange}
                type="text"
                id="pseekness"
                className="form-control"
                name="pseekness"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4c">
                Password
              </label>
              <input
                value={inputs.ppassword}
                onChange={handleChange}
                type="password"
                id="form3Example4c"
                className="form-control"
                name="ppassword"
              />
            </div>
          </div>

          <div className="field d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4cd">
                Repeat your password
              </label>
              <input
                value={inputs.pcpassword}
                onChange={handleChange}
                type="password"
                id="form3Example4cd"
                className="form-control"
                name="pcpassword"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <input
              type="submit"
              className="btn"
              name="pregister"
              value="register"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Pregister;
