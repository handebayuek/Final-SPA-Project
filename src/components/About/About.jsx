import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-page">
        <div className="left-side">
          <h1 className="about-header">
            ABOUT <span>OUR</span> PRODUCTS
          </h1>
          <h3 className="about-explain">
            Our organic skincare line offers a range of natural, eco-friendly
            products designed to nourish and rejuvenate your skin without the
            use of harmful chemicals. Made from the finest botanical
            ingredients, each product is carefully crafted to enhance your
            skin's natural beauty while promoting overall health and wellness.
          </h3>
        </div>
        <div className="right-side">
          <div className="about-container1">
            <div>
              <h4 className="about-container-h4">safe and gentle</h4>
            </div>
            <div>
              <p>
                Unlike conventional skincare products that often contain harsh
                chemicals and synthetic ingredients, our organic products are
                free from toxins, making them safe for all skin types, including
                sensitive skin
              </p>
            </div>
          </div>
          <div className="about-container2">
            <div>
              <h4 className="about-container-h4">
                eco-<span>friendly</span>
              </h4>
            </div>
            <div>
              <p>
                Our commitment to sustainability ensures that our products are
                not only good for your skin but also for the planet. We use
                environmentally responsible packaging and ethically sourced
                ingredients.
              </p>
            </div>
          </div>
          <div className="about-container3">
            <div>
              <h4 className="about-container-h4">
                nutrient-<span>rich</span>
              </h4>
            </div>
            <div>
              <p>
                Organic skincare ingredients are packed with vitamins,
                antioxidants, and essential fatty acids that help repair and
                protect your skin, giving you a healthy, radiant glow.
              </p>
            </div>
          </div>
          <div className="about-container4">
            <div>
              <h4 className="about-container-h4">
                ethical and <span>cruelty-free</span>
              </h4>
            </div>
            <div>
              <p>
                We prioritize ethical practices, ensuring our products are
                cruelty-free, vegan, and not tested on animals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
