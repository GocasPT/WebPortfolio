import { ElementType } from "react";

interface CardProps {
    icon: ElementType
}

export function CardIcon({ icon: Icon } : CardProps) {
    return (
        <Icon className="" />
    )
}