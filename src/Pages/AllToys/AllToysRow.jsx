import React from "react";
import { Link } from "react-router-dom";

const AllToysRow = ({ allToy }) => {
  const { _id, toyName, price, availableQuantity, sellerName, subCategory } =
    allToy;

  return (
    <tr>
      <td data-label="Seller Name">
        <div className="font-bold">{sellerName}</div>
      </td>
      <td data-label="Toy Name">
        <div className="font-bold">{toyName}</div>
      </td>
      <td data-label="Sub Category">{subCategory}</td>
      <td data-label="Price">{price}</td>
      <td data-label="Available Quantity">{availableQuantity}</td>
      <td data-label="Details">
        <Link to={`/details/subCategory/${_id}`}>
          <button className="btn btn-success btn-xs text-white">
            View details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
