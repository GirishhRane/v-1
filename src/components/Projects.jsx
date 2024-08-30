import React from "react";
import myntra1 from "../../public/myntra1.png";
import todoApp from "../../public/todoApp.jpeg";
import netflix from "../../public/netflix.jpeg";
import calculator from "../../public/calculator.jpeg";
import converter from "../../public/converter.jpeg";
import components from "../../public/components.jpeg";
import Google from "../../public/google.png";
import paris from "../../public/paris.png";
function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: paris,
      name: "Paris Olympics 2024 Dashboard",
      data: "Developed a Paris Olympics 2024 Dashboard using Power BI to analyze and visualize medal distributions and athlete performance.Designed dynamic visualizations such as medal counts by country, gender, and type (gold, silver, bronze),providing clear insights into national and individual achievements. Integrated historical data and age category breakdowns to offer deeper context and trend analysis, enabling comprehensive understanding of the event.",
    },
    {
      id: 2,
      logo: Google,
      name: "Google Trends Dashboard",
      data: "Developed a Google Trend Dashboard in Power BI to analyse and visualize search trends over time. Designed interactive visualizations to display search volumes for various topics, providing insights into their popularity and trends. Included a map visualization that allows users to click on different regions to view search data specific to those areas, enabling detailed regional analysis. Enhanced user engagement with dynamic filters and interactive elements, facilitating a comprehensive exploration of search interest across various locations.",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>

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
