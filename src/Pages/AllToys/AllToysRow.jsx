import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";
const AllToysRow = ({ allToy }) => {
  const { _id, toyName, price, availableQuantity, sellerName, subCategory } =
    allToy;
  const { user } = useContext(AuthContext);
  const handleDetails = () => {
    if (!user) {
      Swal.fire({
        title: "You have to log in first to view details",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };
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
          <button
            onClick={handleDetails}
            className="btn btn-success btn-xs text-white"
          >
            View details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
