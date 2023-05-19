import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  useTitle("Speedy Nook | Register");
  const { createUser, updateUser, logOut } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        alert("Registration Completed Successfully");
        updateUser(name, photo);
        setRegisterError("");
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setRegisterError(errorMessage);
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            The ultimate destination for toy car enthusiasts. Explore our
            extensive collection of high-speed wonders and find your perfect
            miniature ride. Start racing today!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="enter your url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
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
            <p className="text-red-600 ">
              <small>{registerError}</small>
            </p>
            <div className="form-control mt-6">
              <button className="btn bg-green-400 hover:bg-green-500 rounded-lg border-none text-md ">
                Register to your account
              </button>
            </div>
            <small className="font-bold">
              Already registered?
              <Link to="/login">
                <span className="text-blue-500"> Login </span>
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
