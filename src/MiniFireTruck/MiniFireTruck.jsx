import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
const MiniFireTruck = ({ miniFireTruck }) => {
  const { _id, toyPictureURL, toyName, price, rating } = miniFireTruck;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img className="h-72 w-full" src={toyPictureURL} alt="Sports car" />
        </figure>
        <div className="card-body" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="card-title text-teal-400 text-2xl ">{toyName}</h2>
          <p className="text-lg">Price : {price} $</p>
          <p>
            Ratings: {rating}{" "}
            <StarIcon className="inline-block h-6 w-6 text-blue-500" />
          </p>
          <div className="card-actions justify-end">
            <Link to={`/details/subCategory/${_id}`}>
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

export default MiniFireTruck;
