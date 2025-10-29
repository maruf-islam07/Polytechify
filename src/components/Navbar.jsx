import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className=" mx-auto fixed top-0 w-full z-50 bg-[#0f0715]/20 backdrop-blur-md">
      <div className="navbar max-w-screen-2xl container mx-auto  px-5 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li 
                key={item.path} 
                className="text-2xl font-bold"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* logo */}
          <Link to="/" className="flex gap-1.5 items-center text-xl font-bold">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnW0MqjLYV1a2AfgYUhkaSyU21_bp9fYnDZg&s"
              alt=""
              className="w-10 rounded-xl"
            />
            <span className="hidden sm:inline-block">
              Poly<span className="text-yellow-300">Techify</span>
            </span>
          </Link>
        </div>
        {/* desktop menu */}
        <div className=" hidden navbar-center lg:block">
          <ul className=" flex gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${isActive ? "text-secondary" : "text-shadow-gray-50"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-secondary lg:p-0`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* menu end */}
        <div className="navbar-end space-x-3">
          <Link to="/login" className="btn btn-soft btn-primary">
            Log In
          </Link>
          <Link className="btn btn-soft btn-secondary hidden sm:flex ">
            Call Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
