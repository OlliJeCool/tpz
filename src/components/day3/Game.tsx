import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import { motion } from "motion/react";

interface gameProps {
  triggerSnow: (a: boolean) => void;
}

const Game = ({ triggerSnow }: gameProps) => {
  const [sequence, setSequence] = useState([1, 3, 0, 2]);
  const [isCorret, setCorrect] = useState([false, false, false, false]);
  const [allCorrect, setAllCorrect] = useState(false);
  const colors = [
    "bg-lime-200",
    "bg-orange-300",
    "bg-violet-200",
    "bg-emerald-300",
  ];
  const correct = [0, 1, 2, 3];
  const handleChange = (index: number) => {
    if (!allCorrect) {
      let newSequence = [...sequence];
      newSequence[index] = (sequence[index] + 1) % 4;
      setSequence(newSequence);
      let newCorrect = [...isCorret];
      newCorrect[index] = correct[index] === newSequence[index] ? true : false;
      setCorrect(newCorrect);
    }
  };

  useEffect(() => {
    let count = 0;
    sequence.forEach((element, index) => {
      element === correct[index] ? count++ : null;
    });
    if (count === 4) {
      setAllCorrect(true);
      triggerSnow(true);
    }
  }, sequence);

  useEffect(() => {}, [sequence]);
  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      className="mt-36 grid w-1/2 h-2/5 gap-4 grid-cols-4 grid-rows-2 grid-flow-rows"
    >
      <Tile
        color={colors[sequence[0]]}
        changeColor={handleChange}
        correct={isCorret[0]}
        index={0}
        delay={0.2}
      />
      <Tile
        color={colors[sequence[1]]}
        changeColor={handleChange}
        correct={isCorret[1]}
        index={1}
        delay={0.4}
      />
      <Tile
        color={colors[sequence[2]]}
        changeColor={handleChange}
        correct={isCorret[2]}
        index={2}
        delay={0.6}
      />
      <Tile
        color={colors[sequence[3]]}
        changeColor={handleChange}
        correct={isCorret[3]}
        index={3}
        delay={0.8}
      />

      <p className="text-lg font-medium  w-full text-center">Orange</p>
      <p className="text-lg font-medium text-center">Emerald</p>
      <p className="text-lg font-medium  w-full text-center">Lime</p>
      <p className="text-lg font-medium w-full text-center">Violet</p>
    </motion.div>
  );
};

export default Game;
