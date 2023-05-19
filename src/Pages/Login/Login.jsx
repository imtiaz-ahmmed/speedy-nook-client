import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
const Login = () => {
  useTitle("Speedy Nook | Login");
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            The ultimate destination for toy car enthusiasts. Explore our
            extensive collection of high-speed wonders and find your perfect
            miniature ride. Start racing today!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-400 hover:bg-green-500 rounded-lg border-none text-md ">
                Login to your account
              </button>
              <br />
              <button className="btn bg-blue-400 hover:bg-blue-500 rounded-lg border-none text-md ">
                <FaGoogle />
                &nbsp;&nbsp;Login with Google
              </button>
            </div>
            <small className="font-bold">
              Not Registered?
              <Link to="/register">
                <span className="text-blue-500">Create Account</span>
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
