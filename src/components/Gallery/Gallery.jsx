import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Gallery = () => {
  return (
    <div className="pt-4 pb-4 bg-cyan-100">
      <h2 className="font-bold text-center text-5xl text-green-400 mb-12 mt-8">
        Speedy Corner
      </h2>
      <div className="grid grid-cols-1  lg:grid-cols-3">
        <div
          className="bg-indigo-200 p-4"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="https://images.unsplash.com/photo-1595641416278-c4469e0a22d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div
          className="bg-red-200 p-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="https://images.unsplash.com/photo-1531693251400-38df35776dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </div>
        <div
          className="bg-amber-200 p-4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="https://images.unsplash.com/photo-1578652520385-c05f6f3b5de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div
          className="bg-gray-200 p-4 "
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="https://images.unsplash.com/photo-1609909468438-6b62c4ce4af8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80"
            alt=""
          />
        </div>
        <div
          className="bg-cyan-200 p-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="
        https://images.unsplash.com/photo-1568145399768-d78dc816f339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div
          className="bg-violet-200 p-4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div
          className="bg-stone-200 p-4"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="https://images.unsplash.com/photo-1581235707960-23b7e8612c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
        </div>
        <div
          className="bg-pink-200 p-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="https://images.unsplash.com/photo-1630333338159-a5e5828f417c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div
          className="bg-green-200 p-4"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <img
            className="w-full h-80 rounded-xl"
            src="https://images.unsplash.com/photo-1558563763-9157dc01afbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
