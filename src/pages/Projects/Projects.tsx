import { AiFillGoogleCircle } from "react-icons/ai";
import { FaClock } from "react-icons/fa";

import PROJECTS_LIST from "@/data/ProjectsList.json"
import { Card } from "@/components/Card"
import "@/assets/Projects.css"

// TODO: Complete the html structure
// TODO: Add styling
// TODO: icons (JSON string → ElementType)
export const Projects = () => {
  return (
    <div>
      <h1 className='title'>Projects</h1>
      {/* TODO: adicionar texto */}
      <p className='text'>Texto porque sim</p>
      <h2 className="title">Group</h2>
      <ul className="autolayout">
        {PROJECTS_LIST.Group.map((item) => {
          return (
            <Card.Root>
              <div className="infoContainer">
                <Card.Title text={item.name}/>
                <Card.Content text={item.description}/>
                <Card.Icon icon={AiFillGoogleCircle} link={item.url} />
              </div>
            </Card.Root>
          )
        })}
      </ul>
      <h2 className="title">Solo</h2>
      <ul className="autolayout">
        {PROJECTS_LIST.Solo.map((item) => {
          return (
            <Card.Root>
              <div className="infoContainer">
                <Card.Title text={item.name}/>
                <Card.Content text={item.description}/>
                <Card.Icon icon={FaClock} link={item.url}/>
              </div>
            </Card.Root>
          )
        })}
      </ul>
    </div>
  );
};
