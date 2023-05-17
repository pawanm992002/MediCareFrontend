import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
  const [country, setCountry] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key":
              "1d003f2aa3msha7f9ffde615ba49p1cbf1djsnfcb361988460",
          },
        }
      );

      const data = await res.json();
      setCountry(data.countries_stat);
    } catch (err) {
      console.log("covid api not fetched");
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center"> World Covid-19 Dashboard</h1>
        </div>
        <div id="country_table" className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Country</th>
                <th>Active Cases</th>
                <th>Cases</th>
                <th>Deaths</th>
                <th>Total Recovered</th>
                <th>Total Tests</th>
              </tr>
            </thead>
            <tbody>
              {country.map((curEle, index) => {
                return (
                  <tr key={index}>
                    <td>{curEle.country_name}</td>
                    <td>{curEle.active_cases}</td>
                    <td>{curEle.cases}</td>
                    <td>{curEle.deaths}</td>
                    <td>{curEle.total_recovered}</td>
                    <td>{curEle.total_tests}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Covid;
