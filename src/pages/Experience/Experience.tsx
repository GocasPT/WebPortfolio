import PROGRAMMING_LIST  from '@/data/ProgrammingList.json';
import SOFTWARE_LIST  from '@/data/SoftwareList.json';
import { Card } from '@/components/Card';

// TODO: Complete the html structure
// TODO: Add styling
export const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      {/* TODO: adicionar texto */}
      <p>Texto porque sim</p>
    <h2>Programming Language</h2>
    <ul>
      {PROGRAMMING_LIST.map((item) => {
        return (
          <Card.Root>
            <Card.Image image={`./src/assets/images/${item.icon}`}/>
            <Card.Title text={item.name}/>
          </Card.Root>
        )
      })}
    </ul>
    <h2>Software Experience</h2>
    <ul>
      {SOFTWARE_LIST.map((item) => {
        return (
          <Card.Root>
            <Card.Image image={`./src/assets/images/${item.icon}`}/>
            <Card.Title text={item.name}/>
          </Card.Root>
        )
      })}
    </ul>
    </div>
  );
};
