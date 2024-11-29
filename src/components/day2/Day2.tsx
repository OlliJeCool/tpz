import React, { useState } from "react";
import { motion } from "motion/react";

const Day2 = () => {
  const [found, setFound] = useState(false);

  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: "linear",
      }}
      className="w-[100vw] h-[100vh] bg-rose-100"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => setFound(true)}
        className="w-24 h-12 transition-colors hover:bg-red-400 absolute top-48 left-48 hover:text-sky-300 font-bold rounded-lg text-rose-100 hover:text-"
      >
        Kuk o.O
      </motion.button>
      <div className="w-full h-full flex flex-col items-center justify-center gap-12">
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: 1,
            ease: "linear",
          }}
          className="text-blue-300 font-bold text-3xl"
        >
          Hledej :D
        </motion.h1>
        <motion.div
          animate={{
            scale: [0, 1.2, 1],
            y: [200, 0, 0],
            opacity: [1, 1, 1],
          }}
          initial={{ scale: 0.5, y: 0 }}
          transition={{ duration: 0.8, delay: 1, type: "spring" }}
          className="bg-red-400 w-24 h-24 rounded-full flex justify-center items-center"
        >
          {found ? (
            <h1 className="font-bold text-6xl text-rose-100">Š</h1>
          ) : null}
        </motion.div>
      </div>
    </motion.div>
  );
};
//ŠE

export default Day2;
