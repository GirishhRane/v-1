import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <div className="flex flex-row mb-4">
          <span className="text-gray-700 flex items-center">
            <FaPhoneAlt className="mr-2" /> 7249053107
          </span>
        </div>
        <div className="flex flex-row mb-4">
          <span className="text-gray-700 flex items-center">
            <MdEmail className="mr-2" /> girishsrane82gmail.com
          </span>
        </div>
        <div className="flex flex-row mb-4">
          <span className="text-gray-700 flex items-center">
            <FaInstagram className="mr-2" /> girishr1012
          </span>
        </div>
      </div>
    </>
  );
}
export default Contact;
