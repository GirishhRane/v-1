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
            Hello, I’m Girish Rane, a passionate React Developer dedicated to
            crafting impactful and visually compelling solutions that drive
            meaningful business outcomes.
          </p>
          <br />
          <h1 className="text-green-600 font-semibold text-2xl">Education</h1>
          <span className="text-lg">
            Electronics and telecommunication Engineering | Dhole Patil College
            Of Engineering | Nov'20-May'24
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
            As a passionate React developer, my mission is to transform complex
            user requirements into efficient, responsive web applications that
            enhance user experience and drive business growth. By leveraging
            modern web development techniques, component-based architecture, and
            a deep understanding of industry trends, I strive to deliver
            scalable, high-performance solutions that empower organizations to
            achieve their goals and optimize their digital presence.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
