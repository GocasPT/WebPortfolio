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
            <li key={item.name}>
              <Card.Root median link={item.url}>
                <Card.Group>
                  <Card.Title text={item.name}/>
                  <Card.Content text={item.description}/>
                  <Card.Icon icon={IconComponent(item.icon)} />
                </Card.Group>
              </Card.Root>
            </li>
          )
        })}
      </ul>
      <h2 className="title">Solo</h2>
      <ul className="autolayout">
        {ProjectsList.Solo.map((item) => {
          return (
            <li key={item.name}>
              <Card.Root link={item.url}>
                <Card.Group>
                  <Card.Title text={item.name}/>
                  <Card.Content text={item.description}/>
                  <Card.Icon icon={IconComponent(item.icon)} />
                </Card.Group>
              </Card.Root>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
