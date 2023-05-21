import React from "react";

const HappyKids = () => {
  return (
    <div className="bg-yellow-50 p-12">
      <h2 className="text-green-500 text-5xl font-bold mb-12 pt-12 text-center">
        Happy Kids
      </h2>
      <div className="flex flex-col gap-4 md:flex-row w-4/5 mx-auto">
        <div className="md:w-1/2 flex">
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="md:w-1/2 flex">
          <div className="card w-full bg-base-100 shadow-xl image-full flex flex-col">
            <figure className="flex-grow">
              <img
                className="w-full h-full"
                src="https://images.unsplash.com/photo-1570619367330-f794786ab176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-justify text-orange-400">
                Enjoy Our Speedy World!
              </h2>
              <p>
                Speedy Nook, the perfect haven for young car aficionados, is a
                delightful toy car shop. Step into our enchanting world, where
                children can embark on thrilling journeys with their favorite
                toy cars. Our vast collection boasts a diverse range of sleek
                sports cars, rugged off-roaders, and everything in between,
                ensuring endless excitement. Experience the joy radiating from
                your child's face as they select their dream car from Speedy
                Nook. Prepare for unforgettable adventures and cherished
                memories. Discover happiness at Speedy Nook, the go-to
                destination for toy car enthusiasts.
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-green-400 hover:bg-green-500 border-none">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyKids;
