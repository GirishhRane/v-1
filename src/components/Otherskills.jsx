import React from "react";
import gamer from "../../public/xbox.jpg";
import filmora from "../../public/filmors.png";
function Otherskills() {
  return (
    <div
      name="Hobbies and Interests"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Hobbies and Interests</h1>
        <br />
        <div className="flex flex-cols-2 md:grid-cols-2 gap-4 my-3 items-center mb-12">
          <div className="flex justify-center ml-12 ">
            <div
              className="flex items-center justify-center border-2 rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={gamer}
            >
              <img
                src={gamer}
                className="w-[150px] rounded-full"
                alt="Gaming"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="max-w-screen-2xl flex-1">
              <strong>Gaming</strong>: Gaming has been a significant part of my
              life, encompassing a wide range of games on both PC and mobile
              platforms. This hobby has not only provided countless hours of
              entertainment but has also enhanced my strategic thinking,
              problem-solving abilities, and teamwork skills. From intense
              multiplayer battles to immersive single-player adventures, gaming
              has been a constant source of challenge and growth.
            </p>
          </div>
        </div>
        <div className="flex flex-cols-2 md:grid-cols-2 gap-4 my-3 items-center">
          <div className="flex justify-center ml-12">
            <div
              className="flex items-center justify-center border-2 rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={gamer}
            >
              <img
                src={filmora}
                className="w-[150px] rounded-full"
                alt="Gaming"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="max-w-screen-2xl flex-1">
              <strong>Editing</strong>: In addition to gaming, I have a passion
              for video editing, particularly using Filmora. Editing allows me
              to express my creativity and storytelling abilities, transforming
              raw footage into engaging content. Whether it's creating highlight
              videos of my gaming sessions or editing personal projects, I enjoy
              the process of cutting, enhancing, and piecing together video
              clips to produce polished final products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Otherskills;
