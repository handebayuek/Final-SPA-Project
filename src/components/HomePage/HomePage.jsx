import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <h1 className="brand-name">BotaniPure.</h1>
        <div className="homepage-body">
          <div className="homepage-container">
            <div className="homepage-body-p">
              <p>
                Our products – and the formulas that make them up – work hard.
                They only contain ingredients that are essential to their
                effectiveness, never unnecessary extras and never irritating
                preservatives.
              </p>
            </div>
            <div className="homepage-img">
              <img src="../public/image/background2.jpg" alt="homepage-img" />
            </div>
            <div className="homepage-box">
              <h1>99.8 %</h1>
              <h2>
                <span className="span-1">Organic.</span>
                <span className="span-2"> 100%</span>
                <span className="span-3"> You.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
