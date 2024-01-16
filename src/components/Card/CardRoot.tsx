import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="">
      <h1>CardRoot</h1>
      {children}
    </div>
  );
};
