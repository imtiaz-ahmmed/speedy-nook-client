import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
const Login = () => {
  useTitle("Speedy Nook | Login");
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setLoginError("");
        console.log(loggedUser);
        form.reset;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log In Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        //navigate(from, { replace: true });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <form onSubmit={handleLogin} className="card-body">
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
            <p className="text-red-600 ">
              <small>{loginError}</small>
            </p>
            <div className="form-control mt-6">
              <button className="btn bg-green-400 hover:bg-green-500 rounded-lg border-none text-md ">
                Login to your account
              </button>
              <br />
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-blue-400 hover:bg-blue-500 rounded-lg border-none text-md "
              >
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
