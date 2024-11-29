import React from "react";
import { motion } from "motion/react";

interface popupPropData {
  setDisplayTimer: (a: boolean) => void;
}

const Popup = ({ setDisplayTimer }: popupPropData) => {
  const handleClick = () => {
    setTimeout(() => {
      setDisplayTimer(true);
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="w-[30%] h-[30%] bg-white bg-opacity-25 border-blue-200 rounded-2xl flex items-center flex-col p-6"
    >
      <h1 className="text-2xl font-bold py-2">{"Hola <3"}</h1>
      <p className="text-center py-4">
        Tohle je trochu netradiční způsob TPZky, ale doufám, že se ti bude
        líbit.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => handleClick()}
        className="bg-blue-300 py-2 mt-4 w-1/3 rounded-lg hover:bg-blue-400"
      >
        Klik 🫣
      </motion.button>
    </motion.div>
  );
};

export default Popup;
