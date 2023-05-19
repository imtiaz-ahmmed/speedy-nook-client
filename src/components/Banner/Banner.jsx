import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md" data-aos="fade-up" data-aos-duration="3000">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Speedy Nook</h1>
            <p className="mb-5">
              A vibrant toy car shop with a wide collection of miniature cars.
              From vintage classics to sleek sports cars, it's a haven for car
              enthusiasts of all ages.
            </p>
            <Link>
              <button className="btn bg-green-400 hover:bg-green-500 rounded-lg border-none text-lg ">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
