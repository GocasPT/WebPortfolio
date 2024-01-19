interface CardBackgroundProps {
    image: string;
}

export const CardBackground = ({ image }: CardBackgroundProps) => {
    return <img className="card-background" src={image} />;
};