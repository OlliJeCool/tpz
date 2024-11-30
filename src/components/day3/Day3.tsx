import React, { useState } from "react";
import Game from "./Game";
import { motion } from "motion/react";

//XETXŠXX
const Day3 = () => {
  const [snow, setSnow] = useState(false);
  return (
    <div
      className={`w-full h-full ${
        !snow ? "bg-red-300" : "bg-blue-200"
      } flex justify-center items-center flex-col`}
    >
      {snow ? (
        <>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-2xl text-white font-bold">
              Dnešní písmeno je:
            </h2>
            <motion.h1
              animate={{ scale: [1, 1.25, 1.1, 1], rotateZ: [0, 30, -20, 0] }}
              transition={{
                duration: 1.5,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="text-5xl text-rose-400 font-extrabold"
            >
              T
            </motion.h1>
            <p className="mt-4 text-lg text-white">
              {"Dneska i trocha sněhu když je toho 1. prosince :D I wuf you <3"}
            </p>
          </div>
          <div className="initial-snow">
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
            <div className="snow">&#10052;</div>
          </div>
        </>
      ) : (
        <Game triggerSnow={setSnow} />
      )}
    </div>
  );
};

export default Day3;
