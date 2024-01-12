interface CardContentProps {
    text: string
}

// TODO: Complete the html structure
// TODO: Add styling
// TODO: Add tests
export function CardContent({ text }: CardContentProps) {
    return (
        <div className="">
            <p className="">
                {text}
            </p>
        </div>
    )
}