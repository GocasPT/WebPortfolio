import { Clock, Computer, Github } from "lucide-react";
import { Card } from "../../components";
import { CardContent } from "../../components/Card/CardContent";
import { CardIcon } from "../../components/Card/CardIcon";

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
        <CardContent text="Content" />
        <CardIcon icon={Github} />
      </Card.Root>

      <h1>In progress</h1>

      <Card.Root>
        <CardContent text="In develop" />
        <CardIcon icon={Clock} />
      </Card.Root>
    </div>
  );
};
