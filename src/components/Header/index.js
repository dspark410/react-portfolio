/** @format */

import React from "react";

function Header() {
  return (
    <>
      <div className="box">
        <img
          data-aos="fade"
          className="profile-pic"
          width="200px"
          height="200px"
          src={process.env.PUBLIC_URL + "/images/profilepic.jpg"}
          alt="David Park"
        />

        <div data-aos="fade" className="border2"></div>
      </div>

      <h1 data-aos="fade" className="name">
        David S. Park
      </h1>

      <h2
        data-aos="fade"
        className="title"
        style={{
          textTransform: "uppercase",
          color: "cornflowerblue",
          fontWeight: "600",
          fontSize: "1.0rem",
        }}
      >
        Full Stack Web Developer
      </h2>
      <div className="mainsummary-container">
        <div className="summary-container">
          <p
            style={{ color: "black", fontWeight: "bold" }}
            className="summary"
            data-aos="fade"
          >
            Hey! My name is David and I'm a software engineer with a passion for
            the front end. I'm a bootcamp graduate from the UC Berkeley
            Extension Full Stack Web Development Program.
          </p>
        </div>
        <div className="summary-container">
          <p
            style={{ color: "black", fontWeight: "bold" }}
            className="summary"
            data-aos="fade"
          >
            When I'm not coding I love to cook, explore different foods from
            various restaurants, weight train, and play video games.
          </p>
        </div>
        <div className="summary-container">
          <p
            style={{ color: "black", fontWeight: "bold" }}
            className="summary"
            data-aos="fade"
          >
            I'm also a certified personal trainer and exercise physiologist.
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
