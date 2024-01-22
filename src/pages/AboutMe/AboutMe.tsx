import { Card } from "@/components";
import GamesList from "@/data/GameList.json"
import "@/assets/AboutMe.css"

// TODO: Complete the html structure
// TODO: Add styling
export const AboutMe = () => {
  return (
    <div>
      <h2 className="title">About Me</h2>

      <p className="text">Texto porque sim</p>

      <h3 className="title">Games</h3>
      <ul className="autolayout">
      {GamesList.map((item) => {
        return (
          <li key={item.name}>
            <Card.Root bigger link={item.url}>
              <Card.Image image={item.icon} />
              <Card.Group>
                <Card.Title text={item.name} />
                <Card.Content text={item.description}/>
              </Card.Group>
              <Card.Background image={item.art}/>
            </Card.Root>
          </li>
        )
      })}
      </ul>
    </div>
  );
};
