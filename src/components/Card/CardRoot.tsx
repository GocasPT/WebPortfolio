import { ReactNode } from "react";
import "./Card.css"

interface CardRootProps {
  children: ReactNode;
}

// TODO: Complete the html structure
// TODO: Add styling
// TODO: Add component click event (popup to show more detail)
export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="cardBorder">
      {children}
    </div>
  );
};
