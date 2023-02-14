import React from "react";

import Title from "../components/Title";

function Home() {
  return (
    <div className="flex items-start flex-col space-y-5 mx-10">
      <Title title="code wise" />
      <div className="flex flex-col lg:flex-row justify-center bg-blue-600/20 dark:bg-blue-600/10 rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="w-[640px] lg:h-96 object-cover lg:rounded-lg"
        />
        <div className="px-5 flex flex-col space-y-2 md:space-y-5 lg:space-y-1 xl:space-y-5 justify-center py-3">
          <h2 className=" uppercase md:text-xl lg:text-base text-slate-800/70 dark:text-gray-50/80 tracking-widest lg:tracking-wide xl:tracking-widest">
            Mastering the Latest Tech Skills:
          </h2>
          <p className="font-poppins text-slate-700 dark:text-emerald-400 text-4xl md:text-5xl xl:text-6xl md:tracking-widest lg:tracking-wider font-semibold">
            Step-by-Step Tutorials for Every Level
          </p>
          <p className="text-slate-800/70 dark:text-gray-50/80 text-xl lg:text-lg xl:text-2xl">
            Unlock your potential with our comprehensive tech tutorials and take
            your skills to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
