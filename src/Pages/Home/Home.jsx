import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Category from "../../components/Category/Category";
import HappyKids from "../../components/HappyKids/HappyKids";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  useTitle("Speedy Nook | Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <HappyKids></HappyKids>
      <Contact></Contact>
    </div>
  );
};

export default Home;
