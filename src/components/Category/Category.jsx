import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SportsCar from "../SportsCar/SportsCar";
import Truck from "../Truck/Truck";
import MiniFireTruck from "../MiniFireTruck/MiniFireTruck";

const Category = () => {
  const [sportsCars, setSportsCars] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [miniFireTrucks, setMiniFireTrucks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://speedy-nook-server.vercel.app/details/subCategory/sportsCars"
    )
      .then((res) => res.json())
      .then((data) => {
        setSportsCars(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://speedy-nook-server.vercel.app/details/subCategory/trucks")
      .then((res) => res.json())
      .then((data) => {
        setTrucks(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://speedy-nook-server.vercel.app/details/subCategory/miniFireTrucks"
    )
      .then((res) => res.json())
      .then((data) => {
        setMiniFireTrucks(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-violet-100 p-12 ">
      <h2 className="text-5xl font-bold text-green-500 text-center mt-12 mb-8">
        Shop By Category
      </h2>
      <Tabs>
        <TabList className="text-lg font-bold text-stone-500 p-8 bg-violet-200 rounded-lg mb-8 ">
          <Tab>Sports Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Mini Fire Truck</Tab>
        </TabList>

        {/* Sports Car */}
        {isLoading ? (
          <div className="text-center">
            <img
              className="h-40 w-40  mx-auto"
              src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
              alt=""
            />
          </div>
        ) : (
          <TabPanel>
            <div className="flex flex-col md:flex-row items-center  gap-11 justify-center">
              {sportsCars.map((sportsCar) => {
                return (
                  <SportsCar
                    key={sportsCar._id}
                    sportsCar={sportsCar}
                  ></SportsCar>
                );
              })}
            </div>
          </TabPanel>
        )}

        {/* Truck */}

        {isLoading ? (
          <div className="text-center">
            <img
              className="h-40 w-40  mx-auto"
              src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
              alt=""
            />
          </div>
        ) : (
          <TabPanel>
            <div className="flex flex-col md:flex-row items-center  gap-11 justify-center">
              {trucks.map((truck) => {
                return <Truck key={truck._id} truck={truck}></Truck>;
              })}
            </div>
          </TabPanel>
        )}

        {/* Mini Fire Truck */}
        {isLoading ? (
          <div className="text-center">
            <img
              className="h-40 w-40  mx-auto"
              src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
              alt=""
            />
          </div>
        ) : (
          <TabPanel>
            <div className="flex flex-col md:flex-row items-center  gap-11 justify-center">
              {miniFireTrucks.map((minFireTruck) => {
                return (
                  <MiniFireTruck
                    key={minFireTruck._id}
                    miniFireTruck={minFireTruck}
                  ></MiniFireTruck>
                );
              })}
            </div>
          </TabPanel>
        )}
      </Tabs>
    </div>
  );
};

export default Category;
