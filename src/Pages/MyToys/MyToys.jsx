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
  return (
    <div className="overflow-x-auto w-full p-12">
      {isLoading ? (
        <div className="text-center">
          <img
            className="h-40 w-40  mx-auto"
            src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
            alt=""
          />
        </div>
      ) : (
        <table className="table mx-auto">
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
              <MyToysRow key={myToy._id} myToy={myToy} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyToys;
