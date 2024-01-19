import { Card } from "@/components";
import GamesList from "@/data/GameList.json"

// TODO: Complete the html structure
// TODO: Add styling
export const AboutMe = () => {
  return (
    <div>
      <h1 className="title">About Me</h1>
      <p>Texto porque sim</p>
      <h2 className="title">Games</h2>
      <ul className="autolayout">
      {GamesList.map((item) => {
        return (
          <li>
            <Card.Root>
            <Card.Image image={item.icon} />
            <Card.Title text={item.name} />
            <Card.Background image={item.art}/>
          </Card.Root>
          </li>
        )
      })}
      </ul>
    </div>
  );
};
