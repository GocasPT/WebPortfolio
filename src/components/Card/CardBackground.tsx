interface CardBackgroundProps {
    image: string;
}

// TODO: Add styling
export const CardBackground = ({ image }: CardBackgroundProps) => {
    return (
        <div className="card-background">
            <img src={image} />
        </div>
    );
};