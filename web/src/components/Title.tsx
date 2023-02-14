import React from "react";
import { useTypewriter } from "react-simple-typewriter";

type Props = {
  title: string;
};

function Title({ title }: Props) {
  const [text, helper] = useTypewriter({
    words: [`${title.toLowerCase()}`],
    loop: 1,
    delaySpeed: 1000,
  });

  return (
    <div className="text-7xl md:text-8xl ml-5 font-bold text-slate-700 dark:text-gray-50/80">
      {"<"}
      <span className="font-poppins">{text}</span>
      {">"}
    </div>
  );
}

export default Title;
