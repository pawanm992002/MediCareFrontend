import React from "react";
const About = () => {
  return (
    <>
      <section
        style={{
          background: "#e9e9e9",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={require("./my pic.jpg")}
          alt="my pic"
          style={{
            width: "80%",
            maxWidth: "250px",
            height: "300px",
          }}
        />

        <h2>Who i am</h2>
        <p>
          I am highly motivated and dedicated towards my job. I am hard worker
          and always try to think innovative. I am a quick learner and know how
          to solve any problem. I have also worked on these technologies by
          myself and have potential to handle the work. My strengths are mern
          stack (mongo db, express js, react js, node js) and react native
          (Android development). I have done projects like whatsup clone, kishan
          Hiteshi app(app that provides services to farmers) and many more. I
          also have knowledge on many programming languages like c/cpp, python,
          html, css, javascript (advanced). I have many projects you can check
          my github: https://github.com/pawanm992002
        </p>
      </section>
      <div
        style={{
          background: "wheat",
          padding: "10px",
        }}
      >
        Contact us: xxxxxx4657
        <br />
        Email id: Paw*****@gmail.com
        <hr />
        <footer>
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default About;
