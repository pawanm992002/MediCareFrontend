import React from "react";
import { NavLink } from "react-router-dom";
import crouser1 from "./img/crouser-1.jpeg";
import crouser2 from "./img/crouser-2.jpeg";
import crouser3 from "./img/crouser-3.jpeg";
import card1 from "./img/card-1.jpeg";
import card2 from "./img/card-2.jpg";
import card3 from "./img/card-3.jpeg";
import card4 from "./img/card-4.jpg";
import card5 from "./img/card-5.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="getdp">
          <a
            className="btn"
            href="https://livlong.com/services/doctor-consultation/gp-night?utm_source=google&utm_medium=GP&utm_campaign=Night_Physician_Exact&utm_term=physician%20consultation%20online&utm_content=transactionjourney&gclid=CjwKCAjw9pGjBhB-EiwAa5jl3G705sFT_uUY-qHXeMIg3dnLsJ8wYuLKvcN_ziEYf1gO7Ku2vNeXLhoCuWYQAvD_BwE"
          >
            Get Docters
          </a>
          <a
            className="btn"
            href="https://curoflow.se/en?gclid=CjwKCAjw9pGjBhB-EiwAa5jl3KxQ9ZD0lFzPKvdIBug369b7Mh1E05mYB_QaD5txoHIZXL9okijpNRoCGakQAvD_BwE"
          >
            Get Patients
          </a>
        </div>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={crouser1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block font-fam-2">
              <h3>Welcome in our HealthTaker</h3>
              <p>
                Health care systems are organizations established to meet the
                health needs of targeted populations. According to the World
                Health Organization (WHO)
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={crouser2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block font-fam-2">
              <h3>We have Introduce the best doctor </h3>
              <p>
                The COVID-19 pandemic has impacted healthcare workers physically
                and psychologically.[1] Healthcare workers are more vulnerable
                to COVID-19 infection than the general population due to
                frequent contact with infected individuals.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={crouser3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block font-fam-2">
              <h3>We have contact with labs</h3>
              <p>
                A medical laboratory or clinical laboratory is a laboratory
                where tests are carried out on clinical specimens to obtain
                information about the health of a patient to aid in diagnosis,
                treatment, and prevention of disease.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!-- Section of departments  --> */}
      <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center my-3">Departments</h2>
            <p>
              There are several departments are found in hospitals namely
              Cardiology, Neurology, Hepatology, Eye Care, Inpatient Service
              (IP), Medical Department, Nursing Department, Paramedical
              Department, Physical Medicine and Rehabilitation Department,
              Operation Theatre Complex (OT), Pharmacy Department, Radiology
              Department (X-ray), Dietary Department, Non-professional Services
              (Business Management), Medical Record Department (MRD) and
              Personnel Department..
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Cardiology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Neurology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Hepatology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    Dietary
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                    Eye Care
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3 className="text-center">Cardiology</h3>
                      <p className="fst-italic">
                        Cardiology is a branch of medicine that deals with the
                        disorders of the heart as well as some parts of the
                        cardiovascular system. The field includes medical
                        diagnosis and treatment of congenital heart defects,
                        coronary artery disease, heart failure, valvular heart
                        disease and electrophysiology.
                      </p>
                      <p className="fst-italic">
                        Physicians who specialize in this field of medicine are
                        called cardiologists, a specialty of internal medicine.
                        Pediatric cardiologists are pediatricians who specialize
                        in cardiology.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={card1} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3 className="text-center">Neurology</h3>
                      <p className="fst-italic">
                        Neurology is a branch of medicine dealing with disorders
                        of the nervous system.
                      </p>
                      <p className="fst-italic">
                        Neurology deals with the diagnosis and treatment of all
                        categories of conditions and disease involving the
                        central and peripheral nervous systems (and their
                        subdivisions, the autonomic and somatic nervous
                        systems), including their coverings, blood vessels, and
                        all effector tissue, such as muscle. Neurological
                        practice relies heavily on the field of neuroscience,
                        the scientific study of the nervous system.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={card2} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3 className="text-center">Hepatology</h3>
                      <p className="fst-italic">
                        Hepatology is the branch of medicine that incorporates
                        the study of liver, gallbladder, biliary tree, and
                        pancreas as well as management of their disorders.
                        Although traditionally considered a sub-specialty of
                        gastroenterology, rapid expansion has led in some
                        countries to doctors specializing solely on this area,
                        who are called hepatologists.
                      </p>
                      <p className="fst-italic">
                        Diseases and complications related to viral hepatitis
                        and alcohol are the main reason for seeking specialist
                        advice. More than two billion people have been infected
                        with hepatitis B virus at some point in their life, and
                        approximately 350 million have become persistent
                        carriers. Up to 80% of liver cancers can be attributed
                        to either hepatitis B or hepatitis C virus
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={card3} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3 className="text-center">
                        Related To Diet Or Healthy Food
                      </h3>
                      <p className="fst-italic">
                        In nutrition, diet is the sum of food consumed by a
                        person or other organism.The word diet often implies the
                        use of specific intake of nutrition for health or
                        weight-management reasons (with the two often being
                        related)..
                      </p>
                      <p className="fst-italic">
                        Although humans are omnivores, each culture and each
                        person holds some food preferences or some food
                        taboosThis may be due to personal tastes or ethical
                        reasons. Individual dietary choices may be more or less
                        healthy.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={card4} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Related With Eye Care Or Protections </h3>
                      <p className="fst-italic">
                        Eye protection is protective gear for the eyes, and
                        sometimes face, designed to reduce the risk of injury.
                        Examples of risks requiring eye protection can include:
                        impact from particles or debris, light or radiation,
                        wind blast, heat, sea spray or impact from some type of
                        ball or puck used in sports.
                      </p>

                      <p>
                        Eye protection are typically separated into categories
                        based on the style of eye wear and the hazard they are
                        designed to reduce. There categories include: Spectacles
                        with side protection; Goggles; Welding helmet; Welding
                        Hand Shields; Non-Rigid Helmets (hoods); Face shield;
                        and Respirator Face pieces.
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img src={card5} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
