"use client";
import Link from "next/link";
import { motion } from "motion/react";

const Menu = () => {
  return (
    <motion.div
      className="fixed top-1/3 left-0 h-1/3 bg-zinc-700 rounded-r-lg group"
      initial={{ width: "20px" }}
      whileHover={{ width: "100px" }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
    >
      <div className="h-full flex flex-col justify-start items-start text-white overflow-hidden">
        {/* Menu Header */}
        <div className="px-4 py-4 bg-zinc-800 w-full rounded-r-lg">
          <h2 className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Menu
          </h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col mt-4 space-y-2 px-4 py-4">
          <li className="hover:text-gray-300 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/day1">Day 1</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/day2">Day 2</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/day3">Day 3</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/day4">Day 4</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/day6">Day 6</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href="/">Day 7</Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Menu;
