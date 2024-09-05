import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <h1 className="header">BotaniPure</h1>
      <div className="main-body">
        <div className="container">
          <div className="body-p">
            <p>
              Our products – and the formulas that make them up – work hard.
              They only contain ingredients that are essential to their
              effectiveness, never unnecessary extras and never irritating
              preservatives.
            </p>
          </div>
          <div className="body-img">
            <img
              src="../public/image/background2.jpg"
              alt="homepage-img"
              width={"500px"}
            />
          </div>
          <div className="body-box">
            <h1>99.8%</h1>
            <h2>
              <span>Organic.</span>
              <span>100%</span>
              <span>You.</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
