import React from "react";
import "./GuidePage.css";

const GuidePage = () => {
  return (
    <div className="guide-page">
      <div className="guide-section">
        <h1 className="guide-page-title">
          Unlock the Power of Pure, <span>99.8% Organic Skincare</span>
        </h1>
        <div className="guide-column1">
          <h2>DAILY ROUTINE</h2>
          <p>
            We encourage you to make our organic skincare products a part of
            your daily routine. By consistently using these products, you’ll
            start to notice a healthier, more radiant complexion that reflects
            the purity of our ingredients. Regular use, especially morning and
            night, helps maintain the skin’s natural balance and maximizes the
            long-term benefits of the organic ingredients.
          </p>
        </div>

        <div className="guide-column2">
          <h2>PROPER APPLICATION ORDER</h2>
          <p>
            For the best results, we suggest applying our products in the
            correct order: start with the cleanser, follow with the toner, then
            apply the serum, and finish with the moisturizer. This method
            ensures that each layer works effectively, giving your skin the full
            benefit of our organic ingredients.
          </p>
        </div>

        <div className="guide-column3">
          <h2>PERSONALIZED SKINCARE</h2>
          <p>
            We advise performing a patch test before fully integrating any new
            product into your skincare routine. This simple step helps them
            understand how their skin reacts, allowing for personalized use and
            avoiding any potential sensitivities, especially with highly potent
            organic ingredients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
