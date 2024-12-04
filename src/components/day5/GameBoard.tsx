import React from "react";
import { useState } from "react";
import SliderTile from "./SliderTile";

//XETIŠTX
const GameBoard = () => {
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const startOrder = [
    [5, 7, 3],
    [2, Infinity, 0],
    [6, 1, 4],
  ];

  const solvedOrder = [
    [0, 1, 2],
    [3, Infinity, 4],
    [5, 6, 7],
  ];

  const [tileOrder, setTileOrder] = useState(startOrder);
  const [solved, setSolved] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  const isInBounds = (row: number, col: number) => {
    return 0 <= row && row < 3 && 0 <= col && col < 3;
  };

  const verifyMoveValidity = (row: number, col: number) => {
    if (tileOrder[row][col] === Infinity) return false;
    let valid: boolean = false;
    dirs.forEach((x) => {
      let n_row = row + x[0];
      let n_col = col + x[1];
      if (isInBounds(n_row, n_col) && tileOrder[n_row][n_col] == Infinity)
        valid = true;
    });
    return valid;
  };

  const handleClick = (index: number) => {
    const elemetIndex = tileOrder.flat().indexOf(index);
    const index_row = Math.floor(elemetIndex / 3);
    const index_col = elemetIndex % 3;

    if (verifyMoveValidity(index_row, index_col)) {
      const emptyIndex = tileOrder.flat().indexOf(Infinity);
      const empty_row = Math.floor(emptyIndex / 3);
      const empty_col = emptyIndex % 3;
      let newOrder = [...tileOrder];
      newOrder[empty_row][empty_col] = index;
      newOrder[index_row][index_col] = Infinity;
      /*newOrder = [
        [0, 1, 2],
        [3, Infinity, 4],
        [5, 6, 7],
      ];*/
      setTileOrder(newOrder);
      if (newOrder.flat().toString() === solvedOrder.flat().toString())
        setSolved(true);
    }
  };

  return (
    <>
      {!gameEnd ? (
        <div className="w-full h-full flex justify-center items-center flex-col gap-6">
          <div className="w-1/2 h-3/4 bg-sky-100 rounded-md grid gap-2 p-6 grid-cols-3 grid-rows-3 grid-flow-row">
            {tileOrder.flat().map((x) => (
              <SliderTile
                index={x}
                onClick={handleClick}
                isSolved={solved}
                key={x}
                setGameEnd={setGameEnd}
              />
            ))}
          </div>
          <button
            className="underline"
            onClick={() => {
              setTileOrder(startOrder);
              setSolved(false);
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-6 items-center justify-center">
          <h2 className="text-2xl">Dnešní písmeno je:</h2>
          <h1 className="text-7xl font-extrabold bg-gradient-to-tl from-pink-200 to-sky-200 bg-clip-text text-transparent">
            I
          </h1>
          <p>(velké i, to jen pro jistotu :D)</p>
        </div>
      )}
    </>
  );
};

export default GameBoard;
