import React from "react";
import { Link } from "react-router-dom";

const MyToysRow = ({ myToy, handleDelete }) => {
  const {
    _id,
    toyPhotoURL,
    toyName,
    price,
    availableQuantity,
    sellerName,
    sellerEmail,
    rating,
    detailDescription,
    subCategory,
  } = myToy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{sellerName}</div>
            <div className="text-sm opacity-50">{sellerEmail}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={toyPhotoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">{subCategory}</div>
          </div>
        </div>
      </td>
      <td data-label="Sub Category">{price}</td>
      <td data-label="Price">{rating}</td>
      <td data-label="Available Quantity">{availableQuantity}</td>
      <td data-label="Available Quantity">{detailDescription}</td>
      <td data-label="Update">
        <Link to={`/details/update/${_id}`}>
          <button className="btn btn-success btn-xs text-white">Update</button>
        </Link>
      </td>
      <td data-label="Delete">
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-success btn-xs text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
