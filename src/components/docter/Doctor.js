import React from "react";
import Dregister from "./Dregister";
import Dlogin from "./Dlogin";
import ReactDOM from "react-dom";
import "./docter.css";
import docterPic from "./docter.jpg";

const showRegister = () => {
  ReactDOM.render(
    <>
      <Dregister />
    </>,
    document.querySelector(".cont")
  );
};
const showLogin = () => {
  ReactDOM.render(
    <>
      <Dlogin />
    </>,
    document.querySelector(".cont")
  );
};

const Docter = () => {
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
        <div className="row d-flex justify-content-center align-items-center h-100">
          <img
            style={{ width: "80%", maxWidth: "250px", height: "200px" }}
            src={docterPic}
            className="dimage"
          />
        </div>
        <div className="cont">
          <Dlogin />
          {/* You can register as doctor, if already registered than Log in please. */}
        </div>
      </div>
    </>
  );
};

export default Docter;
