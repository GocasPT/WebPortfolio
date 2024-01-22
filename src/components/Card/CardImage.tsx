interface CardImageProps {
  image: string;
}

export const CardImage = ({ image }: CardImageProps) => {
  return <img className="card-icon" src={image}/>
};
