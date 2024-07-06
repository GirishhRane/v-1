import React from "react";
import pic from "../../public/girishPhoto.jpeg";
import { Link } from "react-scroll";
function Navbar() {
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Projects",
    },
    {
      id: 5,
      text: "Hobbies and Interests",
    },

    {
      id: 6,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-5xl  px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img
              src={pic}
              className="h-12 w-12 rounded-full md:w-[43px] md:h-[45px]"
              alt="Photo"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Girish Rane
              <p className="text-sm">Frontend Developer</p>
            </h1>
          </div>

          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-300 cursor-pointer"
                  key={id}
                >
                  <Link to={text} smooth={true} duration={700} offset={-70}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
