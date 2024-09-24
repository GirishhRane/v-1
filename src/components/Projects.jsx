import React from "react";
import myntra1 from "../../public/myntra1.png";
import todoApp from "../../public/todoApp.jpeg";
import netflix from "../../public/netflix.jpeg";
import calculator from "../../public/calculator.jpeg";
import converter from "../../public/converter.jpeg";
import components from "../../public/components.jpeg";
import Google from "../../public/google.png";
import paris from "../../public/paris.png";
import waterapp from "../../public/image.png";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: todoApp,
      name: "Todo Application",
      data: "Developed a dynamic to-do list application using React, allowing users to easily add and delete tasks in real time. This project showcases my ability to build interactive and responsive user interfaces using React's state management.",
    },
    {
      id: 2,
      logo: calculator,
      name: "Calculator",
      data: "Build a calculator application using React, demonstrating my ability to create interactive and user-friendly web applications. The calculator supports basic arithmetic operations with a clean and responsive interface. This project highlights my expertise in React's component structure and state management to deliver a seamless and efficient user experience.",
    },
    {
      id: 3,
      logo: waterapp,
      name: "Water Pump Wireless Monitoring and Control System",
      data: "Designed and implemented a Water Pump Wireless Monitoring and Control System, utilizing sensors such as ultrasonic, soil moisture, and DHT11 to automate the water pump's operation based on environmental conditions. The system includes a custom-built app, allowing users to remotely start and stop the pump with ease. This project highlights my expertise in IoT, sensor integration, and mobile app development, providing an efficient and user-friendly solution for water management.",
    },
    {
      id: 4,
      logo: netflix,
      name: "Netflix Clone",
      data: "Developed a Netflix clone, focusing on replicating key frontend features using React. The project includes dynamic user interfaces, allowing users to browse through a collection of movies and TV shows. By integrating API calls to fetch real-time data, I was able to create a responsive and interactive platform. This project demonstrates my skills in React and building scalable web applications with a strong focus on user experience.",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Mini Projects + Projects</h1>

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
