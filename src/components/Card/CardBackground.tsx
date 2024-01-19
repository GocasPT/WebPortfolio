interface CardBackgroundProps {
    image: string;
}

// TODO: Add styling
export const CardBackground = ({ image }: CardBackgroundProps) => {
    return <img className="card-background" src={image} />;
};