import { ReactNode } from "react";

interface CardGroupProps {
    children: ReactNode;
}

export const CardGroup = ({ children }: CardGroupProps) => {
    return (
        <div className="card-content">
            {children}
        </div>
    );
}