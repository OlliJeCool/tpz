import React, { useEffect } from "react";
import { useState } from "react";
import TicTacToeTile from "./TicTacToeTile";

const TicTacToe = () => {
  const startOrder = [
    [-1, -2, -3],
    [-4, -5, -6],
    [-7, -8, -9],
  ];

  const [gameBoard, setGameBoard] = useState(startOrder);
  const [gameEnd, setGameEnd] = useState(false);
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState([0, 0]);

  const isInBounds = (row: number, col: number) => {
    return 0 <= row && row < 3 && 0 <= col && col < 3;
  };

  const makeMove = (turn: number, player: number, row: number, col: number) => {
    if (isInBounds(row, col) && gameBoard[row][col] < 0 && turn === player) {
      const newBoard = gameBoard.map((r) => [...r]);
      newBoard[row][col] = player;
      setGameBoard(newBoard);
    }
  };

  const handleClick = (index: number) => {
    const elemetIndex = gameBoard.flat().indexOf(index);
    const index_row = Math.floor(elemetIndex / 3);
    const index_col = elemetIndex % 3;

    makeMove(turn, 1, index_row, index_col);
    setTurn(0);
  };

  const findMoves = () => {
    const myPlays: number[][] = [];
    gameBoard.flat().forEach((element, index) => {
      if (element < 0) {
        const empty_row = Math.floor(index / 3);
        const empty_col = index % 3;
        myPlays.push([empty_row, empty_col]);
      }
    });
    return myPlays;
  };

  const checkWin = (board: number[][] = gameBoard): number | null => {
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] === board[row][1] &&
        board[row][1] === board[row][2] &&
        board[row][0] >= 0
      ) {
        return board[row][0];
      }
    }
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col] &&
        board[0][col] >= 0
      ) {
        return board[0][col];
      }
    }

    if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] >= 0
    ) {
      return board[0][0];
    }

    if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] >= 0
    ) {
      return board[0][2];
    }

    return null;
  };

  useEffect(() => {
    if (turn === 0) {
      const plays = findMoves();
      const random = plays[Math.floor(Math.random() * plays.length)];
      if (random) {
        makeMove(turn, 0, random[0], random[1]);
        setTurn(1);
      }
    }
  }, [gameBoard, turn]);

  useEffect(() => {
    const win = checkWin();
    if (win !== null) {
      const newScore = [...score];
      newScore[win] += 1;
      setScore(newScore);

      if (newScore[1] === 3) {
        setGameEnd(true);
      } else {
        setGameBoard(startOrder);
      }
    } else if (findMoves().length === 0) {
      setGameBoard(startOrder);
    }
  }, [gameBoard]);

  return (
    <>
      {!gameEnd ? (
        <div className="w-full h-full flex justify-center items-center flex-col gap-6">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-xl">{`Moje zlatíčko <3 | Robot Robotový`} </h1>
            <h2 className="text-xl font-bold">{`${score[1]} : ${score[0]}`}</h2>
          </div>
          <div className="w-1/2 h-3/4 bg-sky-100 rounded-md grid gap-2 p-6 grid-cols-3 grid-rows-3 grid-flow-row">
            {gameBoard.flat().map((x, i) => (
              <TicTacToeTile
                index={x}
                value={x >= 0 ? (x === 1 ? "X" : "O") : null}
                onClick={handleClick}
                key={i}
              />
            ))}
          </div>
          <button
            className="underline"
            onClick={() => {
              setGameBoard(startOrder);
              setScore([0, 0]);
              setGameEnd(false);
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-6 items-center justify-center">
          <h1 className="text-2xl">Vyhrála jsi! Gratuluju :D</h1>
          <p className="text-lg">
            Za to si zaloužíš pochoutku.. kterou najdeš pod písmenem
          </p>
          <h1 className="text-7xl font-bold bg-gradient-to-bl from-pink-400 to-blue-300 bg-clip-text text-transparent">
            L
          </h1>
          <p className="text-lg">Dobrou chuť :3</p>
        </div>
      )}
    </>
  );
};

export default TicTacToe;
