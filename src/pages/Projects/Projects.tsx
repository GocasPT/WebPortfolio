import { Card } from "@/components/Card"
import { IconComponent } from "@/utils/IconComponent";
import ProjectsList from "@/data/ProjectsList.json"
import "@/assets/Projects.css"


// TODO: Complete the html structure
// TODO: Add styling
export const Projects = () => {
  return (
    <div>
      <h1 className='title'>Projects</h1>
      {/* TODO: adicionar texto */}
      <p className='text'>Texto porque sim</p>
      <h2 className="title">Group</h2>
      <ul className="autolayout">
        {ProjectsList.Group.map((item) => {
          return (
            <a key={item.name} href={item.url} target="_blank">
              <Card.Root median>
                <Card.Group>
                  <Card.Title text={item.name}/>
                  <Card.Content text={item.description}/>
                  <Card.Icon icon={IconComponent(item.icon)} />
                </Card.Group>
              </Card.Root>
            </a>
          )
        })}
      </ul>
      <h2 className="title">Solo</h2>
      <ul className="autolayout">
        {ProjectsList.Solo.map((item) => {
          return (
            <a key={item.name} href={item.url} target="_blank">
              <Card.Root>
                <Card.Group>
                  <Card.Title text={item.name}/>
                  <Card.Content text={item.description}/>
                  <Card.Icon icon={IconComponent(item.icon)} />
                </Card.Group>
              </Card.Root>
            </a>
          )
        })}
      </ul>
    </div>
  );
};
