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
      className={`w-full h-full rounded-xl transition-colors duration-300 ${color}`}
      onClick={() => changeColor(index)}
    />
  );
};

export default Tile;
