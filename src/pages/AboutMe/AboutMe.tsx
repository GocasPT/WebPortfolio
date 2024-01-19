import { Card } from "@/components";
import GamesList from "@/data/GameList.json"
import "@/assets/AboutMe.css"

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
            <a href={item.url} target="_blank">
              <Card.Root className='bigger'>
                <Card.Background image={item.art}/>
                <Card.Image image={item.icon} />
                <div className="infoContainer">
                  <Card.Title text={item.name} />
                  <Card.Content text={item.description}/>
                </div>
              </Card.Root>
            </a>
          </li>
        )
      })}
      </ul>
    </div>
  );
};
