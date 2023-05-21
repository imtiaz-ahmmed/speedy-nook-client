import React from "react";

const HappyKids = () => {
  return (
    <div
      className="bg-yellow-50 p-12 flex items-center flex-col "
      data-aos="fade-up"
      data-aos-duration="3000"
    >
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

      <div className="stats shadow mt-12 flex flex-col md:flex-row">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Visitors</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Present</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default HappyKids;
