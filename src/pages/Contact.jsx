import React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-00">
      <div className="w-full max-w-md p-8 space-y-16 shadow-md rounded-lg text-gray-50 ">
        
          <h1 className="text-4xl text-center md:text-5xl mb-4  font-bold">
            Contact Us
          </h1>
          <div className="border border-secondary w-30 mx-auto"></div>
        

        {/* form  */}
        <form className="space-y-3">
          <label className="label block font-semibold ">Your Name</label>
          <input
            type="text"
            className="input  w-full  rounded-xl"
            placeholder="আপনার নাম লিখুন"
          />
          <label className="label block font-semibold">Mobile Number</label>
          <input
           type="number"
           className="input w-full p-3  rounded-xl" 
           placeholder="01XXXXXXXXX"
          />

          <label className="label block">Subject</label>
          <input
           type="text"
           className="input w-full p-3  rounded-xl"
           placeholder="বিষয় লিখুন"
          />
          <label className="label block">Message</label>
          <textarea
           className="w-full border border-gray-500 min-h-32 p-3  rounded-xl"
           placeholder="আপনার মেসেজ লিখুন"
          ></textarea>

          <button className="btn btn-primary mt-4 w-full rounded-2xl">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
