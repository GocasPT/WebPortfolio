import { Card } from "@/components/Card";
import { IconComponent } from "@/utils/IconComponent";
import ListaProjetos from "@/data/ProjectsList.json";

// TODO: Complete the html structure
// TODO: Add styling
// TODO: icons (JSON string → ElementType)
export const Home = () => {
  return (
    <div>
      <h1 className="title">
        Hi, I'm Guilherme.
        <br />
        An software developer
      </h1>

      {/*TODO: style title text (second title)*/}
      <h3 className="title">
        I am a person with limited experiences, but with a strong desire to
        learn and explore in the world of programming.
      </h3>

      <div className="autolayout">
        <Card.Root>
          <div className="infoContainer">
            <Card.Title text={ListaProjetos.Group[0].name} />
            <Card.Content text={ListaProjetos.Solo[0].description} />
            <Card.Icon icon={IconComponent(ListaProjetos.Solo[0].icon)} />
          </div>
        </Card.Root>
      </div>

      <h1 className="title">In progress</h1>

      <div className="autolayout">
        <Card.Root>
          <div className="infoContainer">
            <Card.Title text={ListaProjetos.Solo[1].name} />
            <Card.Content text={ListaProjetos.Solo[1].description} />
            <Card.Icon icon={IconComponent(ListaProjetos.Solo[1].icon)} />
          </div>
        </Card.Root>
      </div>
    </div>
  );
};
