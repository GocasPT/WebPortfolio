import { Card } from "@/components/Card";
import { IconComponent } from "@/utils/IconComponent";
import ListaProjetos from "@/data/ProjectsList.json";

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
        I am a person with limited experiences, but with a strong desire to learn and explore in the world of programming.
      </h3>

      <div className="autolayout">
        {ListaProjetos.Solo.map((project) => (
          project.done && project.highlight && (
            <Card.Root median link={project.url}>
              <Card.Group>
                <Card.Title text={project.name} />
                <Card.Content text={project.description} />
                <Card.Icon icon={IconComponent(project.icon)} />
              </Card.Group>
            </Card.Root>
          )
        ))}
      </div>

      <h2 className="title">In progress</h2>

      <div className="autolayout">
        {ListaProjetos.Solo.map((project) => (
          !project.done && project.highlight && (
            <Card.Root median link={project.url}>
              <Card.Group>
                <Card.Title text={project.name} />
                <Card.Content text={project.description} />
                <Card.Icon icon={IconComponent(project.icon)} />
              </Card.Group>
            </Card.Root>
          )
        ))}
      </div>
    </div>
  );
};
