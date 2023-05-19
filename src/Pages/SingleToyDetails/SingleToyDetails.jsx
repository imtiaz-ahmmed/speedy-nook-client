import React from "react";
import { useLoaderData } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import useTitle from "../../Hooks/useTitle";

const SingleToyDetails = () => {
  useTitle("Speedy Nook | Details");
  const details = useLoaderData();
  const {
    toyPictureURL,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    detailDescription,
  } = details;
  return (
    <div className="p-12 bg-slate-100">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-green-400 text-3xl">{toyName}</h2>
          <em className="font-bold">Seller Name : {sellerName}</em>
          <em>Seller Email : {sellerEmail}</em>
          <p>Price : {price} $</p>
          <p>
            Rating : {rating}{" "}
            <StarIcon className="inline-block h-6 w-6 text-blue-500" />
          </p>
        </div>
        <figure>
          {toyPictureURL ? (
            <img className="h-96 w-full" src={toyPictureURL} alt="Shoes" />
          ) : (
            "Picture is Loading"
          )}
        </figure>
      </div>
    </div>
  );
};

export default SingleToyDetails;
