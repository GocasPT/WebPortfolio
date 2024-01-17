import "./Card.css"

interface CardImageProps {
  image: string;
}

// TODO: Complete the html structure
// TODO: Add styling
export const CardImage = ({ image: image }: CardImageProps) => {
  return (
    <div className="image-container">
      <img src={image} />
    </div>
  );
};
