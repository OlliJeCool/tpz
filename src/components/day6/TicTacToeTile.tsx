import React from "react";
import { motion } from "motion/react";
interface TileProps {
  index: number;
  value: string | null;
  onClick: (a: number) => void;
}

const TicTacToeTile = ({ index, value, onClick }: TileProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateZ: 2 }}
      whileTap={{ scale: 1.2 }}
      onClick={() => index < 0 && onClick(index)}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`flex justify-center items-center bg-slate-100 rounded-xl`}
    >
      <h1
        className={`text-9xl ${
          index === 0 ? "text-red-400" : index === 1 && "text-blue-600"
        } font-bold`}
      >
        {value}
      </h1>
    </motion.div>
  );
};

export default TicTacToeTile;
