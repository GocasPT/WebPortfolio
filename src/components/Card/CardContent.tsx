interface CardContentProps {
  text: string;
}

export const CardContent = ({ text }: CardContentProps) => {
  return <p className="card-content">{text}</p>
};
