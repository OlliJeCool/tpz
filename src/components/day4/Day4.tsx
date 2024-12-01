import React from "react";
import { useState } from "react";
import { motion } from "motion/react";

//XETXŠTX
const Day4 = () => {
  const [text, setText] = useState("");
  const handleChange = (text: string) => {
    setText(text);
  };
  return (
    <div className="h-full w-full bg-sky-200 flex flex-col items-center justify-center gap-6">
      <h2 className="text-lg">
        {
          "Dnešní písmeno je... hmm.. no někde tady je ಠ_ಠ... mimochodem, tohle: | by se ti mohlo hodit zlaticko moje <3"
        }
      </h2>
      <motion.input
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.06 }}
        className="w-1/5 rounded-xl h-12 focus:outline-none px-4"
        content={text}
        onChange={(event) => handleChange(event.target.value)}
      />
      <div className="text-wrap flow-text break-words w-1/3 relative">
        <h1 className="absolute text-sky-200 left-9 top-48 text-7xl font-bold">
          T
        </h1>
        <p className="text-4xl">{text}</p>
      </div>
    </div>
  );
};

export default Day4;
