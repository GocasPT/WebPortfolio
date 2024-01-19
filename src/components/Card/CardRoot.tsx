import { ReactNode } from "react";
import "./Card.css"

interface CardRootProps {
  bigger?: boolean;
  median?: boolean;
  children: ReactNode;
}

export const CardRoot = ({ bigger = false, median = false, children }: CardRootProps) => {
  return (
    <div className={`card ${ median ? "median " : ""} ${ bigger ? "bigger " : ""}`}>
      {children}
    </div>
  );
};
