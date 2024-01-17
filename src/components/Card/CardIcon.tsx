import { ElementType } from "react";
import "./Card.css"

interface CardIconProps {
  icon: ElementType;
  link: string;
}

// TODO: Complete the html structure
// TODO: Add styling
export const CardIcon = ({ icon: Icon, link }: CardIconProps) => {
  return (
    <a href={link}>
      <Icon className="icon" />
    </a>
  );
};
