import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-base-200 rounded-t-3xl">
      <footer className="footer max-w-screen-2xl container mx-auto sm:footer-horizontal  text-base-content p-10 
">
        <aside>
          <img
          className="w-30"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnW0MqjLYV1a2AfgYUhkaSyU21_bp9fYnDZg&s" alt=""
           />
          <p>
            Polytechify 
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">About us</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
          <Link to="" className="link link-hover">Privacy Policy</Link>
          <Link to="" className="link link-hover">Terms</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Course</h6>
          <Link to="/course" className="link link-hover">Courses</Link>
          <Link className="link link-hover">Notice</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Details</h6>
          <a className="link link-hover">01840004456</a>
          <a className="link link-hover">support@polytechify.com</a>
          <a className="link link-hover">Rangpur, Bangladesh</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
