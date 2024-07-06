import React from "react";
import html from "../../public/html.png";
import css from "../../public/csss.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import mysql from "../../public/mysql.png";

import react from "../../public/reactjs.png";
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 3,
      logo: mysql,
      name: "MySQL",
    },
    {
      id: 5,
      logo: react,
      name: "React",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  ">
          Over the past 2-3 years, I have dedicated myself to developing the
          following skills:
        </p>
        <br />

        <br />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
