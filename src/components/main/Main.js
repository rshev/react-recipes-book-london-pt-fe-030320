import React from "react";
import Header from "../header/Header";
import FeaturedItem from "../featuredItem/FeaturedItem";

const Main = (props) => {
  return (
    <div className="main_page">
      <Header />
      <main className="featured_items_container">
        <FeaturedItem small-image_1="" small-image_2="" image="./image_1.jpg">
          <h2>Choose your meals</h2>
          <p>
            Our chef-designed recipes include balanced Mediterranean meals,
            quick one-pan dinners, and top-rated customer favorites.
          </p>
        </FeaturedItem>
        <FeaturedItem small-image_1="" small-image_2="" image="./image_2.jpg">
          <h2>Unpack your box</h2>
          <p>
            We guarantee the freshness of all our ingredients and deliver them
            in an insulated box right to your door.
          </p>
        </FeaturedItem>
        <FeaturedItem small-image_1="" small-image_2="" image="./image_3.jpg">
          <h2>Create magic</h2>
          <p>
            Following our step-by-step instructions you'll experience the magic
            of cooking recipes that our chefs create with your family's tastes
            in mind.
          </p>
        </FeaturedItem>
      </main>
    </div>
  );
};

export default Main;
