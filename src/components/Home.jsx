import React from "react";

import pic1 from "../../public/Profilepic.jpeg";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm</h1>
              <h1> </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-blue-700 font-bold"
                strings={["Girish Rane", "a Data Analyst"]}
                typeSpeed={50}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-lg md:text-md text-justify">
              I'm excited to share my portfolio with you, showcasing projects
              that demonstrate my skills and passion for creating impactful
              digital experiences. Let's connect and explore how I can
              contribute to your next project!
            </p>
            <br />
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic1}
              className="rounded-full md:w-[420px] md:h-[420px] cursor-pointer hover:scale-110 duration-300"
              alt="Photo"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
