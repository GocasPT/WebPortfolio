import { ReactNode } from "react";
import "./Card.css"

interface CardRootProps {
  bigger?: boolean;
  median?: boolean;
  link?: string;
  children: ReactNode;
}

export const CardRoot = ({ bigger = false, median = false, link, children }: CardRootProps) => {
  return link ? (
    <a href={link} target="_blank">
      <div className={`card ${ median ? "median " : ""} ${ bigger ? "bigger " : ""}`}>
        {children}
      </div>
    </a>
  ) : (
    <div className={`card ${ median ? "median " : ""} ${ bigger ? "bigger " : ""}`}>
      {children}
    </div>
  );
};
