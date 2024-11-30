import React from "react";
import { motion } from "motion/react";

interface TileProps {
  correct: boolean;
  color: string;
  changeColor: (a: number) => void;
  index: number;
}

const Tile = ({ color, changeColor, index }: TileProps) => {
  return (
    <motion.div
      whileTap={{ scale: 1.2 }}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.4, type: "spring" }}
      className={`w-full h-full rounded-xl transition-colors duration-300 ${color}`}
      onClick={() => changeColor(index)}
    />
  );
};

export default Tile;
