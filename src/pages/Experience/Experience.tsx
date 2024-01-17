import PROGRAMMING_LIST  from '@/data/ProgrammingList.json';
import SOFTWARE_LIST  from '@/data/SoftwareList.json';
import { Card } from '@/components/Card';
import '@/assets/Experience.css'

// TODO: Complete the html structure
// TODO: Add styling
// TODO: listar linguagens de programação, frameworks, software, etc (divir e acrescentar mais)
export const Experience = () => {
  return (
    <div>
      <h1 className='title'>Experience</h1>
      {/* TODO: adicionar texto */}
      <p className='text'>Texto porque sim</p>
      <h2 className='title'>Program Language</h2>
      <ul className='autolayout'>
        {PROGRAMMING_LIST.Languagues.map((item) => {
          return (
            <Card.Root>
              <Card.Image image={`./src/assets/images/${item.icon}`}/>
              <div className='infoContainer'>
                <Card.Title text={item.name}/>
                <Card.Bar value={item.skillLevel}/>
              </div>
            </Card.Root>
          )
        })}
      </ul>
      <h2 className='title'>Frameworks</h2>
      <ul className='autolayout'>
        {PROGRAMMING_LIST.Frameworks.map((item) => {
          return (
            <Card.Root>
              <Card.Image image={`./src/assets/images/${item.icon}`}/>
              <div className='infoContainer'>
                <Card.Title text={item.name}/>
                <Card.Bar value={item.skillLevel}/>
              </div>
            </Card.Root>
          )
        })}
      </ul>
      <h2 className='title'>Software</h2>
      <ul className='autolayout'>
        {SOFTWARE_LIST.map((item) => {
          return (
            <Card.Root>
              <Card.Image image={`./src/assets/images/${item.icon}`}/>
              <div className='infoContainer'>
                <Card.Title text={item.name}/>
                <Card.Bar value={item.skillLevel}/>
              </div>
            </Card.Root>
          )
        })}
      </ul>
    </div>
  );
};
