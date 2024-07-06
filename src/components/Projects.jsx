import React from "react";
import myntra1 from "../../public/myntra1.png";
import todoApp from "../../public/todoApp.jpeg";
import netflix from "../../public/netflix.jpeg";
import calculator from "../../public/calculator.jpeg";
import converter from "../../public/converter.jpeg";
import components from "../../public/components.jpeg";
function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: todoApp,
      name: "Todo App",
      data: "This project showcases my skills in front-end development, specifically using React, and demonstrates my ability to create functional and user-friendly applications.",
    },
    {
      id: 2,
      logo: calculator,
      name: "Calculator",
      data: "I developed this calculator app using JavaScript, HTML, and CSS to showcase my front-end development skills. This fully functional calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The design is clean and user-friendly, ensuring an intuitive experience.",
    },
    {
      id: 3,
      logo: converter,
      name: "Currency Converter",
      data: "I created this currency converter application using JavaScript, HTML, and CSS to demonstrate my ability to work with APIs and build dynamic, user-friendly interfaces. The app allows users to convert amounts between different currencies.",
    },
    {
      id: 4,
      logo: netflix,
      name: "Netflix Clone",
      data: "I developed a Netflix clone to replicate the core functionalities of the popular streaming platform by using TMDB API. This project demonstrates my skills in building responsive user interfaces and also highlights my ability to integrate APIs.",
    },

    {
      id: 5,
      logo: myntra1,
      name: "E-commerce Website",
      data: "I developed a E-commerce website. This project features a user-friendly interface where users can add items to their cart, and see the total price updated in real-time as they add or remove items.",
    },
    {
      id: 6,
      logo: components,
      name: "Water Pump Wireless Monitoring and Control System",
      data: "This is my final year project. We developed a Water Pump Wireless Monitoring and Control System to address the problem of water overflow in storage tanks. This project integrates multiple sensors and a Raspberry Pi Pico W to monitor water levels and control the water pump accordingly. The system includes an ultrasonic sensor to measure the water level, a soil moisture sensor for additional environmental data, and a relay module to control the water pump. By using a wireless connection, the system can send real-time updates.",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="font-semibold">Mini Projects + Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-5">
          {cardItem.map(({ id, logo, name, data }) => (
            <div
              className="md:w-[630px] md:h-[550px] border-[2px] rounded-lg shadow-lg p-1.5 cursor-pointer "
              key={id}
            >
              <img
                src={logo}
                className="w-[620px] h-[300px]  border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{data}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
