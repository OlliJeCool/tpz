'use client'

import Heart from "@/components/day1/Heart";
import Popup from "@/components/day1/Popup";
import { useState } from "react";

export default function Home() {
  const [displayTimer, setDisplayTimer] = useState(false)
  const [clickedHearts, setClickedHearts] = useState<boolean[]>(Array(10).fill(false))

  const handleHeartClick = (hearIndex: number) => {
   setClickedHearts((prevClicked) => prevClicked.map((flag, i) => (i === hearIndex ? true : flag))); 
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-200 flex justify-center items-center">
      { 
      !displayTimer ? <Popup setDisplayTimer={setDisplayTimer} /> : (
      <div> 
        <Heart isLiked={clickedHearts[1]} onLikeToggle={() => handleHeartClick(1)}/>
      </div>
      )}
    </div>
  );
}
