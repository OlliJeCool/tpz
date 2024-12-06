"use client";
import Popup from "@/components/day1/Popup";
import { motion } from "motion/react";
import { useState } from "react";

const Day1 = () => {
  const [displayTimer, setDisplayTimer] = useState(false);

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-tr from-sky-100 to-fuchsia-100 flex justify-center items-center">
      {!displayTimer ? (
        <Popup setDisplayTimer={setDisplayTimer} />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-1/2 h-1/3 flex flex-col items-center text-2xl"
        >
          <motion.p className="py-4">Dnešní písmeno je...</motion.p>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag
            dragSnapToOrigin
            className="text-8xl font-extrabold bg-gradient-to-b from-violet-200 to-pink-200 bg-clip-text text-transparent py-2"
          >
            E
          </motion.h2>
          <p className="text-lg py-4">Snad ti bude chutnat pochoutka 😁</p>
        </motion.div>
      )}
    </div>
  );
};

export default Day1;
