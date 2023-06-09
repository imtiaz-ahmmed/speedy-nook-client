import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
const MyToys = () => {
  useTitle("Speedy Nook | My Toys");

  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" for low to high, "desc" for high to low

  useEffect(() => {
    fetch(
      `https://speedy-nook-server-production.up.railway.app/myToys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setIsLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result) {
        fetch(
          `https://speedy-nook-server-production.up.railway.app/details/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your added toy has been deleted.",
                "success"
              );
              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleSort = () => {
    const sortedToys = [...myToys].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setMyToys(sortedToys);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="overflow-x-auto w-full p-6">
      {isLoading ? (
        <div className="text-center">
          <img
            className="h-40 w-40  mx-auto"
            src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
            alt=""
          />
        </div>
      ) : (
        <div>
          <div className="flex justify-center items-center gap-7">
            <div>
              <h2 className="font-bold text-3xl text-green-500">
                Added Toys Information
              </h2>
            </div>
            <div className="bg-slate-200 p-2 rounded-xl">
              <h3 className="font-bold text-center">Sort by Price</h3>
              <ul className="menu menu-horizontal  rounded-box">
                <ul className="rounded-box ">
                  <li>
                    <a onClick={handleSort}>
                      {sortOrder === "asc" ? "Low to High" : "High to Low"}
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <table className="table mx-auto mt-28">
            <thead>
              <tr>
                <th>Seller Info</th>
                <th>Toy Info</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Available Quantity</th>
                <th>Description</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((myToy) => (
                <MyToysRow
                  key={myToy._id}
                  myToy={myToy}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyToys;
