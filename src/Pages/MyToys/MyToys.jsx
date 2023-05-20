import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";

const MyToys = () => {
  useTitle("Speedy Nook | My Toys");

  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email]);

  console.log(myToys);
  return (
    <div>
      <h2>My toys</h2>
    </div>
  );
};

export default MyToys;
