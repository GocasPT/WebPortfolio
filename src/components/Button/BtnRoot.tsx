import { ReactNode } from "react";
import "./Btn.css"

interface BtnRootProps {
    children: ReactNode;
}

export const BtnRoot = ({ children }: BtnRootProps) => {
    return (
        <div className="btn">
            {children}
        </div>
    )
}