import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  useTitle("Speedy Nook | All Toys");
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/details")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div className="overflow-x-auto w-full p-12">
      <table className="table mx-auto ">
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
    </div>
  );
};

export default AllToys;
