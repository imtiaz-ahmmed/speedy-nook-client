import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";
const MyToyInfoUpdate = () => {
  const navigate = useNavigate();
  useTitle("Speedy Nook | Update");
  const toy = useLoaderData();
  const { _id, price, availableQuantity, detailDescription } = toy;
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.availableQuantity.value;
    const detailDescription = form.detailDescription.value;
    const updateToyDetails = {
      _id: _id,
      price: price,
      availableQuantity: availableQuantity,
      detailDescription: detailDescription,
    };

    fetch(`http://localhost:5000/details/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToyDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Successfully!",
            icon: "success",
            showConfirmButton: false,
          });
          navigate("/my-toys");
        } else {
          alert("Waring! Failed to Add.");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdateToy} className="card-body ">
        <div
          className="form-control "
          style={{
            display: "none",
          }}
        >
          <label className="label">
            <span className="label-text">Id</span>
          </label>
          <input
            defaultValue={_id}
            name="id"
            type="text"
            placeholder="ID"
            className="input input-bordered "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            defaultValue={price}
            name="price"
            type="text"
            placeholder="Price"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            defaultValue={availableQuantity}
            name="availableQuantity"
            type="text"
            placeholder="Available Quantity"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail Description</span>
          </label>
          <input
            defaultValue={detailDescription}
            name="detailDescription"
            type="text"
            placeholder="Detail Description"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-green-400 hover:bg-green-500 border-none"
          >
            Update Toy Car Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyToyInfoUpdate;
