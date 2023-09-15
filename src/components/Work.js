import React from "react";
import ShortUrl from "../assets/projects/shorturl.png";
import TodoList from "../assets/projects/todolist.png";
import ChromeDino from "../assets/projects/chromedino.png";
import Delivery from "../assets/projects/delivery.png";
import RealtimeChat from "../assets/projects/realtimechat.png";
import Clock from "../assets/projects/clock.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-[#111827] text-gray-300"
    >
      {/* conatiner */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* projects card container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* card item 0 */}
          <div
            style={{ backgroundImage: `url(${RealtimeChat})` }}
            className="shadow-lg shadow-[#334155] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Realtime Chat Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://tele-chatapp.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhipshapatro/chat_and_notification_feature_codepth"
                  target="_blank"
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* card item 1*/}
          <div
            style={{ backgroundImage: `url(${Clock})` }}
            className="shadow-lg shadow-[#334155] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Retro Clock
              </span>
              <div className="pt-8 text-center">
                <a href="https://clockretro.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhipshapatro/Retro-clock"
                  target="_blank"
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* card item 2 */}
          <div
            style={{ backgroundImage: `url(${Delivery})`}}
            className="shadow-lg shadow-[#334155] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food Delivery App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://food-order-delivery.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhipshapatro/Restaurant-app"
                  target="_blank"
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* card item 3*/}
          <div
            style={{ backgroundImage: `url(${ShortUrl})`, backgroundSize: "100% 100%" }}
            className="shadow-lg shadow-[#334155] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Short URL
              </span>
              <div className="pt-8 text-center">
                <a href="https://url-short-app.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhipshapatro/Short-URL"
                  target="_blank"
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* card item 4 */}
          <div
            style={{ backgroundImage: `url(${ChromeDino})`, backgroundSize: "100% 100%" }}
            className="shadow-lg shadow-[#334155] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Chrome Dino Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://dino-chromegame.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhipshapatro/Chrome-Dino-Game"
                  target="_blank"
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* card item 5 */}
          <div
            style={{ backgroundImage: `url(${TodoList})`, backgroundSize: "100% 100%" }}
            className="shadow-lg shadow-[#334155] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo List
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://abhipshapatro.github.io/Todos-list/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/abhipshapatro/Todos-list"
                  target="_blank"
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
