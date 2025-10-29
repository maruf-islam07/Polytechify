import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-00">
      <form className="w-full max-w-md p-8 space-y-8 bg-gray-800 shadow-md rounded-3xl text-gray-50 border border-blue-800">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnW0MqjLYV1a2AfgYUhkaSyU21_bp9fYnDZg&s"
          alt=""
          className="w-[150px] mx-auto"
        />
        <h1 className="text-2xl my-8 font-bold">
          Login to your account to start your course
        </h1>
        <label className="label block ">Email</label>
        <input
          type="email"
          className="input w-full rounded-2xl outline-none"
          placeholder="Email"
        />

        <label className="label block">Password</label>
        <input
          type="password"
          className="input w-full rounded-2xl outline-none"
          placeholder="Password"
        />

        <button className="btn btn-primary mt-4 w-full rounded-2xl">Login</button>

        <p className="text-center mt-2">
          {" "}
          Do you want to join create
          <Link to="/register">
            {" "}
            <span className="hover:underline text-accent">a Account</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
