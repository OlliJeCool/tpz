import React from "react";
import { motion } from "motion/react";

interface SliderTileProps {
  index: number;
  onClick: (a: number) => void;
  setGameEnd: (a: boolean) => void;
  isSolved: boolean;
}

const tileImages = {
  0: "first.jpeg",
  1: "second.jpeg",
  2: "third.jpeg",
  3: "fourth.jpeg",
  4: "fifth.jpeg",
  5: "sixth.jpeg",
  6: "seventh.jpeg",
  7: "eigth.jpeg",
};

const SliderTile = ({
  index,
  onClick,
  isSolved,
  setGameEnd,
}: SliderTileProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.06 }}
      onClick={() => index != Infinity && onClick(index)}
      style={{
        //@ts-ignore
        backgroundImage: `url(${tileImages[index]})`, // Use the image based on index
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-full h-full flex items-center justify-center ${
        index != Infinity && "bg-blue-100"
      } rounded-xl`}
    >
      {index != Infinity
        ? null
        : isSolved && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1.06 }}
              className="bg-blue-200 transition-colors duration-300 hover:bg-blue-300 py-3 px-5 rounded-xl"
              onClick={() => setGameEnd(true)}
            >
              Hurá! :D
            </motion.button>
          )}
    </motion.div>
  );
};

export default SliderTile;
