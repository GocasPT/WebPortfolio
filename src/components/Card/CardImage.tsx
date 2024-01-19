import "./Card.css"

interface CardImageProps {
  image: string;
}

// TODO: Complete the html structure
// TODO: Add styling
// TODO: File image → URL Image
export const CardImage = ({ image }: CardImageProps) => {
  return (
    <div className="image-container">
      <img src={image} />
    </div>
  );
};
