import React from "react";
import "../styles/styles_home.css";
import Home_Side_BG from "../../assets/Home_Img/Home_Side_BG.jpg";
import { footerHomeData, headerHomeData } from "../data/HomeData";
import { MoveRight } from "lucide-react";
const Home = () => {
  return (
    <>
      {/* <Loading/>  */}
      {/* Header Part */}
      <div className="grid grid-cols-2">
        {/* Left Header Part */}
        <div className="relative overflow-hidden">
          <img
            src={Home_Side_BG}
            alt=""
            className="object-cover h-screen w-full "
          />
          <div className="absolute w-[30rem] h-[15rem] bg-white top-[15rem] left-[8%] p-5 opacity-90">
            <div className="border-2 border-orange-500 flex flex-col w-full h-full items-center gap-5 p-10">
              <span className="text-2xl font-bold">
                Welcome to DishDiscovery,
              </span>
              <p className="text-center">
                where culinary adventures await! Explore a world of
                mouthwatering recipes, cooking tips, and food inspiration from
                around the globe.
              </p>
            </div>
          </div>
        </div>
        {/* Right Header Part */}
        <div className="rightSidePart_css scroll">
          {headerHomeData.map((item, i) => (
            <div key={i} className="border-2 border-orange-500 p-1 h-[12rem]">
              <div className="border-2 border-orange-500 w-full h-full flex flex-col gap-2 justify-around py-5 px-2 items-center overflow-hidden">
                <span className="font-bold text-lg">{item.recipeName}</span>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Part */}
      <div className="flex justify-center">
        <div className="flex flex-col w-[90%] p-10 gap-10">
          {footerHomeData.map((category, i) => (
            <div key={i} className="flex flex-col gap-5">
              <header className="text-3xl font-bold flex justify-center items-center gap-2 text-orange-500">
                {category.name}
                <MoveRight />
              </header>
              <section className="grid grid-cols-3 gap-5">
                {category.recipes.map((item, j) => (
                  <div key={j}>
                    <img src={item.image} alt="" className="object-cover" />
                    <div className="text-center text-lg font-bold w-full">
                      {item.name}
                    </div>
                    <p className="text-center">{item.description}</p>
                  </div>
                ))}
              </section>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
