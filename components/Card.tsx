import React, { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white p-3">{children}</div>;
}

export default Card;
