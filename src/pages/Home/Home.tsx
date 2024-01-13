import { Clock, Github } from "lucide-react";
import { Card } from "../../components";
import { CardContent } from "../../components/Card/CardContent";
import { CardIcon } from "../../components/Card/CardIcon";
import ListaProjetos from "../../data/ProjectsList.json";

export const Home = () => {
  return (
    <div>
      <h1>
        Hi, I'm Guilherme.
        <br />
        An software developer
      </h1>

      <h3>
        I am a person with limited experiences, but with a strong desire to
        learn and explore in the world of programming.
      </h3>

      <Card.Root>
        <CardContent text={ListaProjetos.Solo[0].description} />
        <CardIcon icon={Github} />
      </Card.Root>

      <h1>In progress</h1>

      <Card.Root>
        <CardContent text={ListaProjetos.Solo[1].description} />
        <CardIcon icon={Clock} />
      </Card.Root>
    </div>
  );
};
