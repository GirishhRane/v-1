import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p className="text-lg">
            Hello, I'm Girish Rane, a passionate Frontend developer. I strive to
            create impactful and visually stunning solutions that leave a
            lasting impression.
          </p>
          <br />
          <h1 className="text-green-600 font-semibold text-2xl">Education</h1>
          <span className="text-lg">
            Electronics and telecommunication Engineering | Dhole Patil College
            Of Engineering | Feb'21-May'24
          </span>
          <br />
          <span className="text-lg">
            Science | Nowrosjee Wadia College | Mar'20
          </span>
          <br />
          <span className="text-lg">
            SSC | Mahila Samiti English High School | Mar'18
          </span>

          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-2xl">
            Mission Statement
          </h1>
          <p className="text-lg">
            As a dedicated Frontend developer, my mission is to create dynamic,
            responsive, and user-friendly web applications. I am committed to
            leveraging the power of React to build scalable, maintainable, and
            high-performance applications. By continuously learning the latest
            technologies and best practices, I aim to contribute to innovative
            solutions that meet the evolving needs of users and businesses
            alike. My focus is on writing clean, efficient, and modular code.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
