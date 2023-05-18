import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Category from "../../components/Category/Category";

const Home = () => {
  useTitle("Speedy Nook | Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
    </div>
  );
};

export default Home;
