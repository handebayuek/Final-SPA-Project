import React from "react";
import "./HomePage.css";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

function HomePage() {
  const { data } = useFetch("./data.json");

  const bestsellers = data.filter((product) => product.isBestseller);

  return (
    <>
      <div className="homepage">
        <h1 className="brand-name">BotaniPure.</h1>
        <div className="homepage-container">
          <div className="img-container">
            {data.map((product) => (
              <div className="img-item" key={product.id}>
                <img src={product.image} alt={product.product_name} />
              </div>
            ))}
          </div>
          <div className="homepage-body-bottom">
            <div className="bestsellers-container">
              {bestsellers.slice(0, 2).map((product) => (
                <Link to={`/product/`} key={product.id}>
                  <div className="bestseller-item">
                    <div className="bestseller-label">Bestseller</div>
                    <img src={product.image} alt={product.product_name} />
                    <h3>{product.product_name}</h3>
                    <div className="rating">
                      {Array.from({ length: product.rating }, (_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="slogan-container">
              <div className="homepage-box">
                <h1>99.8 %</h1>
                <h2>
                  <span className="span-1">Organic.</span>
                  <br />
                  <span className="span-2"> 100%</span>
                  <span className="span-3"> You.</span>
                </h2>
              </div>
              <div className="homepage-body-p">
                <p>
                  Our products – and the formulas that make them up – work hard.
                  They only contain ingredients that are essential to their
                  effectiveness, never unnecessary extras and never irritating
                  preservatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
