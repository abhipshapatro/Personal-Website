import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#111827] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-slate-300">
          Abhipsha Patro
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-slate-500">
          I'm a FrontEnd Developer.
        </h2>
        <p className="text-slate-500 py-4 max-w-[700px]">
          I'm a frontend developer specializing in building (and occasionally designing) exceptional digital experiences.Currently, I'm focused on building responsive full-stack web applications.
        </p>
        <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                <Link to="work" smooth={true} duration={500}> View Work </Link>
                <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
                </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
