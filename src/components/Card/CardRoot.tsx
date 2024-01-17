import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

// TODO: Complete the html structure
// TODO: Add styling
// TODO: Add component click event (popup to show more detail)
export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="">
      <h1>CardRoot</h1>
      {children}
    </div>
  );
};
