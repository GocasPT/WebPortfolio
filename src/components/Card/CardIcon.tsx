import { ElementType } from "react";

interface CardIconProps {
  icon: ElementType;
}

export const CardIcon = ({ icon: Icon }: CardIconProps) => {
  return <Icon className />;
};
