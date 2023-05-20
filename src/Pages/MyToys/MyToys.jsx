import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  useTitle("Speedy Nook | My Toys");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setIsLoading(false);
      });
  }, [user?.email]);

  console.log(myToys);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/details/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
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
              </h2>{" "}
            </div>
            <div className="bg-slate-200 p-2 rounded-xl">
              <ul className="menu menu-horizontal bg-base-100 rounded-box p-2">
                <li tabIndex={0}>
                  <span>Sort by Price</span>
                  <ul className="rounded-box bg-base-100 p-2">
                    <li>
                      <a>Low to High</a>
                    </li>
                    <li>
                      <a>High to Low</a>
                    </li>
                  </ul>
                </li>
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
