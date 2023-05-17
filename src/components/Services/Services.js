import React, { useState } from "react";
import "./Services.css";

const Card = ({ title, img, link }) => {
  //   let r = "jjf"
  return (
    <div className="card">
      <img
        className="card-img"
        src={require(`./img/${img}`)}
        alt="not loading"
      />
      <h1 className="card-title">{title}</h1>
      <a href={link} className="card-link">
        Read More
      </a>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([
    {
      title: "Transplant",
      img: "transplant teaser.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/transplant",
    },
    {
      title: "Orthopedics",
      img: "ortho surgery teaser.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/orthopedics",
    },
    {
      title: "Screening and Diagnostics",
      img: "screening and diagostics teaser.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/screening-and-diagnostics",
    },
    {
      title: "Urology",
      img: "urology teasers.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/urology",
    },
    {
      title: "Plastic and Reconstructive surgery",
      img: "plastic and reconstructive teaser.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/plastic-and-reconstructive-surgery",
    },
    {
      title: "Neurology",
      img: "neurons teaser.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/neurology",
    },
    {
      title: "Gynecology",
      img: "gynecology teaser.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/gynecology",
    },
    {
      title: "Gastroenterology",
      img: "gastroenterology teaser.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/gastroenterology",
    },
    {
      title: "Cardiovascular",
      img: "EKG teaser.jpg",
      link:
        "https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/cardiovascular",
    },
  ]);
  return (
    <>
      <div className="cardCont">
        {services.map(({ title, img, link }) => {
          return <Card title={title} img={img} link={link} key={title} />;
        })}
      </div>
    </>
  );
};
export default Services;
