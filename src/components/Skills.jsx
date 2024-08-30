import React from "react";
import PBI from "../../public/powerbi1.jpg";
import excel from "../../public/excel.png";
import java from "../../public/pyrthon.jpeg";
import javascript from "../../public/javascript.png";
import mysql from "../../public/mysql.png";

import react from "../../public/reactjs.png";
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: PBI,
      name: "Power BI",
    },
    {
      id: 2,
      logo: excel,
      name: "Excel",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: java,
      name: "Python",
    },
    {
      id: 3,
      logo: mysql,
      name: "MySQL",
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
