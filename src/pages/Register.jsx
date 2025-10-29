import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-00">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 shadow-md rounded-lg text-gray-50 border border-accent ">
        <h2 className="text-3xl font-bold text-center ">Register Page</h2>

        {/* register form here */}
        <form className="space-y-5">
          <label className="block font-semibold">Name :</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-400 rounded-2xl outline-none"
          />
          <label className="block font-semibold">Email:</label>
            <input
                type="email"
                className="w-full p-2 border border-gray-400 rounded-2xl outline-none"
            />
            <label className="block font-semibold">Password:</label>
            <input
                type="password"
                className="w-full p-2 border border-gray-400 rounded-2xl outline-none"
            />
            <button className="btn btn-primary mt-4 w-full rounded-2xl">Register</button>

            <p className="text-center text-gray-300"> Already have
                <Link to="/login">
                  <span className="text-accent hover:underline"> a Account </span>
                </Link> 
            </p>

        </form>
      </div>
    </div>
  );
}

export default Register;
