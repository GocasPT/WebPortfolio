import { Card } from "@/components/Card"
import { IconComponent } from "@/utils/IconComponent";
import ProjectsList from "@/data/ProjectsList.json"
import "@/assets/Projects.css"


// TODO: Complete the html structure
// TODO: Add styling
export const Projects = () => {
  return (
    <div>
      <h2 className='title'>Projects</h2>

      {/* TODO: adicionar texto */}
      <p className='text'>Texto porque sim</p>

      <h3 className="title">Group</h3>
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
      
      <h3 className="title">Solo</h3>
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
