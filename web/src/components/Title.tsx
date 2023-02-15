import React from "react";
import { useTypewriter } from "react-simple-typewriter";

type Props = {
  title: string;
  size?: string;
  color?: string;
};

function Title({
  title,
  size = "text-7xl md:text-8xl",
  color = "text-blue-700 dark:text-gray-50/80",
}: Props) {
  const [text, helper] = useTypewriter({
    words: [`${title.toLowerCase()}`],
    loop: 1,
    delaySpeed: 1000,
  });

  return (
    <div className={` font-bold ${size} ${color}`}>
      {"<"}
      <span className="font-poppins">{text}</span>
      {">"}
    </div>
  );
}

export default Title;
