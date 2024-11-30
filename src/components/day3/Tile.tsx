import React from "react";
import { motion } from "motion/react";

interface TileProps {
  correct: boolean;
  color: string;
  changeColor: (a: number) => void;
  index: number;
  delay: number;
}

const Tile = ({ color, changeColor, index, delay }: TileProps) => {
  return (
    <motion.div
      whileTap={{ scale: 1.2 }}
      whileHover={{ scale: 1.06 }}
      initial={{ scale: 0.5, opacity: 0, y: 200 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay, type: "spring" }}
      className={`w-full h-full rounded-xl transition-colors duration-300 ${color}`}
      onClick={() => changeColor(index)}
    />
  );
};

export default Tile;
