import "./Card.css"

interface CardTitleProps {
    text: string;
  }
  
  // TODO: Complete the html structure
  // TODO: Add styling
  export const CardTitle = ({ text }: CardTitleProps) => {
    return (
      <div className="title">
        <h2>{text}</h2>
      </div>
    );
  };
  