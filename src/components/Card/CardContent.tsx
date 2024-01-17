import "./Card.css"

interface CardContentProps {
  text: string;
}

// TODO: Complete the html structure
// TODO: Add styling
export const CardContent = ({ text }: CardContentProps) => {
  return (
    <div className="content-container">
      <p className="content">{text}</p>
    </div>
  );
};
