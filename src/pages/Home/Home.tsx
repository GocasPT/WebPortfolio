import { FaRegClock, FaGithub } from "react-icons/fa";
import { Card } from "@/components/Card";
import ListaProjetos from "@/data/ProjectsList.json";

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
        <Card.Content text={ListaProjetos.Solo[0].description} />
        <Card.Icon icon={FaGithub} />
      </Card.Root>

      <h1>In progress</h1>

      <Card.Root>
        <Card.Content text={ListaProjetos.Solo[1].description} />
        <Card.Icon icon={FaRegClock} />
      </Card.Root>
    </div>
  );
};
