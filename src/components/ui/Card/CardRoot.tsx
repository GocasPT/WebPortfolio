import { ReactNode } from "react";

interface CardRootProps {
    children: ReactNode
}

export function CardRoot({ children }: CardRootProps) {
    return (
        <div className="">
            {children}
        </div>
    )
}