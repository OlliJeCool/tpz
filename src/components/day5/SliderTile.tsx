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
  0: "/first.jpeg",
  1: "/second.jpeg",
  2: "/third.jpeg",
  3: "/fourth.jpeg",
  4: "/fifth.jpeg",
  5: "/sixth.jpeg",
  6: "/seventh.jpeg",
  7: "/eighth.jpeg",
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
        <Image
          //@ts-ignore
          src={tileImages[index]}
          alt={`Tile ${index}`}
          fill // This will make the image take the full space of its parent
          style={{
            objectFit: "cover", // Ensures the image covers the div
            objectPosition: "center", // Centers the image
          }}
          priority={index === 4} // Prioritize loading for the fifth image
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
