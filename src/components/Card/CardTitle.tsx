interface CardTitleProps {
    text: string;
}

export const CardTitle = ({ text }: CardTitleProps) => {
  return (
    <div className="card-title">
      <h2>{text}</h2>
    </div>
  );
};
  