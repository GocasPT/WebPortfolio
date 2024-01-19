import { ElementType } from "react";
import "./Card.css"

interface CardIconProps {
  icon: ElementType
}
// TODO: Complete the html structure
// TODO: Add styling
export const CardIcon = ({ icon: Icon }: CardIconProps) => {
  return <Icon className="icon" />
};
