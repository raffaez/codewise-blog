import React from "react";

function Title({ children }: { children: React.ReactNode }) {
  return <div className="text-6xl font-poppins font-bold">{children}</div>;
}

export default Title;
