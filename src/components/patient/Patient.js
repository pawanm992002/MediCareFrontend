import React from "react";
import ReactDom from "react-dom";
import Pregister from "./Pregister";
import Plogin from "./Plogin";
import PatientPic from "./patient.png";

const showRegister = () => {
  ReactDom.render(
    <>
      <Pregister />
    </>,
    document.querySelector(".cont")
  );
};

const showLogin = () => {
  ReactDom.render(
    <>
      <Plogin />
    </>,
    document.querySelector(".cont")
  );
};

const Patient = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="btns">
          <button className="btn" onClick={showRegister}>
            Register
          </button>
          <button className="btn" onClick={showLogin}>
            login
          </button>
        </div>
        <div className="dimage row d-flex justify-content-center align-items-center h-100">
          <img
            style={{ width: "80%", maxWidth: "300px", height: "200px" }}
            src={PatientPic}
          />
        </div>
        <div className="cont">
          <Plogin />
          {/* You can register as Patient, if already registered than Log in please. */}
        </div>
      </div>
    </>
  );
};

export default Patient;
