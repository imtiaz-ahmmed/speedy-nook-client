import React from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const handleMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message Send Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };
  return (
    <div className="bg-fuchsia-100  p-12">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-green-500">Contact Us</h1>
            <p className="py-6">
              For any inquiries or to get in touch with us at Speedy Nook,
              please don't hesitate to contact us. . We're always here to assist
              you and provide the best toy car shopping experience for you and
              your little ones.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleMessage} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder=" Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Your Message Here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-400 hover:bg-green-500 border-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
