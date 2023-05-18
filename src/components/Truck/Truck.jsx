import React from "react";
import { Link } from "react-router-dom";

const Truck = ({ truck }) => {
  const { _id, toyPictureURL, toyName, price, rating } = truck;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-72 w-full" src={toyPictureURL} alt="Sports car" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-teal-400 text-2xl ">{toyName}</h2>
          <p className="text-lg">Price : {price} $</p>
          <p>Ratings: {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/subCategory/sportsCars/${_id}`}>
              <button className="btn bg-green-400 hover:bg-green-500 rounded-lg border-none text-md ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Truck;