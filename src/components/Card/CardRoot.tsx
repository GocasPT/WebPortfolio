import { ReactNode } from "react";
import "./Card.css"

interface CardRootProps {
  className?: string;
  children: ReactNode;
}

// TODO: Complete the html structure
// TODO: Add styling
// TODO: Add component click event (popup to show more detail)
export const CardRoot = ({ className, children }: CardRootProps) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};
