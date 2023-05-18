import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  useTitle("Speedy Nook | Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
