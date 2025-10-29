import React from "react";
import cardImg1 from "../assets/math1.jpg";             
import cardImg2 from "../assets/math2.jpg";             
import { Link } from "react-router-dom";

function Course() {
  const courses = [
    {
      id: 1,
      title: "Mathematics 1",
      image: cardImg2,
    },
    {
      id: 2,
      title: "Mathematics 2",
      image: cardImg1,
    },
    {
      id: 3,
      title: "Digital Electronics",
      image:
        "https://i.ytimg.com/vi/GMwHIPiFt6U/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDncdgKF1wKlisluJgfPPy99WkpTQ",
    },
    {
      id: 4,
      title: "Data Structure and Algorithm",
      image:
        "https://i.ytimg.com/vi/vxLe8CXPZo4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDfyTCmHh5G0voXBT5KLKQB6DuEgw",
    },
  ];

  return (
    <div className="">
      <div className="max-w-screen-2xl py-5 mx-auto px-5 my-10 rounded-lg">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Our Courses</h1>
          <div className="border border-secondary w-24 mx-auto"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full  items-center justify-center place-items-center">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border rounded-lg overflow-hidden shadow-lg bg-gray-200 text-gray-800 hover:scale-105 transition-transform duration-300 flex flex-col justify-between py-4 px-2 w-[350px] md:w-[300px] lg:w-[350px]  h-[400px]"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-44 md:h-48 object-full rounded-lg border border-gray-400"
              />

              {/* Content */}
              <div className="p-4 flex-1">
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <div className="border border-gray-400 w-20"></div>
              </div>

              {/* Button */}
              <div className="p-5">
                <button className="w-full px-4 py-2 bg-purple-600 rounded-2xl hover:bg-purple-500 transition text-gray-100 font-semibold">
                  View All Videos
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* view more courses button */}
        <div className="text-center mt-28">
          <Link to='./course' className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-400 transition">
            {" "}
            View More Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Course;
