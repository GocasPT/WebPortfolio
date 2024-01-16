interface CardContentProps {
  text: string;
}

// TODO: Complete the html structure
// TODO: Add styling
// TODO: Add tests
export const CardContent = ({ text }: CardContentProps) => {
  return (
    <div className="">
      <p>{text}</p>
    </div>
  );
};
