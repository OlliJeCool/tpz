import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface SliderTileProps {
  index: number;
  onClick: (a: number) => void;
  setGameEnd: (a: boolean) => void;
  isSolved: boolean;
}

const tileImages = {
  0: "static/images/first.jpeg",
  1: "static/images/second.jpeg",
  2: "static/images/third.jpeg",
  3: "static/images/fourth.jpeg",
  4: "static/images/fifth.jpeg",
  5: "static/images/sixth.jpeg",
  6: "static/images/seventh.jpeg",
  7: "static/images/eighth.jpeg",
};

const SliderTile = ({
  index,
  onClick,
  isSolved,
  setGameEnd,
}: SliderTileProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Trigger a re-render on the client side
  }, []);
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.06 }}
      onClick={() => index != Infinity && onClick(index)}
      className={`relative w-full h-full flex items-center justify-center ${
        index !== Infinity ? "bg-blue-100" : ""
      } rounded-xl overflow-hidden`}
    >
      {index != Infinity ? (
        <img
          //@ts-ignore
          src={tileImages[index]}
          alt={`Tile ${index}`}
          style={{
            objectFit: "cover", // Ensures the image covers the div
            objectPosition: "center", // Centers the image
          }}
          className="rounded-xl"
        />
      ) : (
        isSolved && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.06 }}
            className="bg-blue-200 transition-colors duration-300 hover:bg-blue-300 py-3 px-5 rounded-xl"
            onClick={() => setGameEnd(true)}
          >
            Hurá! :D
          </motion.button>
        )
      )}
    </motion.div>
  );
};

export default SliderTile;
