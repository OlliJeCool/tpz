import React, { useState } from "react";
import { motion } from "motion/react";

//LETIŠTX
const Day7 = () => {
  const [changedColor, setChangedColor] = useState(false);
  setTimeout(() => setChangedColor(true), 2500);
  return (
    <div className="w-full h-full flex flex-col gap-8 items-center justify-center">
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <p>
          Tak je poslední den (už je dokonce po), a ty určitě víš, že celá
          tajenka byla:
        </p>
        <p>Ale taky ti ještě chybí jedno písmenko, které je...</p>
        <p>{"PS: Dobrou chuť :D <3"}</p>
      </div>
      <div className="w-full flex items-center justify-center gap-24">
        <motion.div
          initial={{ x: 400, y: 100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
          className="text-8xl"
        >
          L
        </motion.div>
        <motion.div
          initial={{ x: -70, y: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
          className="text-8xl"
        >
          E
        </motion.div>
        <motion.div
          initial={{ x: -450, y: -350 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          className="text-8xl"
        >
          T
        </motion.div>
        <motion.div
          initial={{ x: 20, y: -250 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
          className="text-8xl"
        >
          I
        </motion.div>
        <motion.div
          initial={{ x: -600, y: 250 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
          className="text-8xl"
        >
          Š
        </motion.div>
        <motion.div
          initial={{ x: 50, y: 250 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5, type: "spring" }}
          className="text-8xl"
        >
          T
        </motion.div>
        <motion.div
          initial={{ x: 100, y: -200 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
          className={`text-8xl ${
            changedColor && "text-red-300"
          } transition-colors duration-500`}
        >
          Ě
        </motion.div>
      </div>
    </div>
  );
};

export default Day7;
