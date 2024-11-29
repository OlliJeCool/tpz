"use client";
import Popup from "@/components/day1/Popup";
import Day2 from "@/components/day2/Day2";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [displayTimer, setDisplayTimer] = useState(false);

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-tr from-sky-100 to-fuchsia-100 flex justify-center items-center">
      <Day2 />
    </div>
  );
}
