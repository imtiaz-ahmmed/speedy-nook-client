import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  useTitle("Speedy Nook | All Toys");
  const [allToys, setAllToys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://speedy-nook-server.vercel.app/details")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="overflow-x-auto w-full p-12">
      {isLoading ? (
        <div className="text-center">
          <img
            className="h-40 w-40  mx-auto"
            src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
            alt=""
          />
        </div>
      ) : (
        <table className="table mx-auto">
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((allToy) => (
              <AllToysRow key={allToy._id} allToy={allToy} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllToys;
