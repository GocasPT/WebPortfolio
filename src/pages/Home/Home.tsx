import { AiFillGoogleCircle } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { Card } from "@/components/Card";
import ListaProjetos from "@/data/ProjectsList.json";

// TODO: Complete the html structure
// TODO: Add styling
// TODO: icons (JSON string → ElementType)
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
        <Card.Icon icon={AiFillGoogleCircle} link={ListaProjetos.Solo[0].url} />
      </Card.Root>

      <h1>In progress</h1>

      <Card.Root>
        <Card.Content text={ListaProjetos.Solo[1].description} />
        <Card.Icon icon={FaClock} link={ListaProjetos.Solo[1].url} />
      </Card.Root>
    </div>
  );
};
