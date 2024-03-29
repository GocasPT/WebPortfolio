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
      <h2 className='title'>Experience</h2>

      {/* TODO: adicionar texto */}
      <p className='text'>Texto porque sim</p>
      <p className="text">GitHub API (show profile info)</p>
      <p className="text">LettCode API (show profile info)</p>

      <h3 className='title'>Program Language</h3>
      <ul className='autolayout'>
        {PROGRAMMING_LIST.Languagues.map((item) => {
          return (
            <li key={item.name}>
              <Card.Root>
                <Card.Image image={item.icon}/>
                <Card.Group>
                  <Card.Title text={item.name}/>
                  <Card.Bar value={item.skillLevel}/>
                </Card.Group>
              </Card.Root>
            </li>
          )
        })}
      </ul>

      <h3 className='title'>Frameworks</h3>
      <ul className='autolayout'>
        {PROGRAMMING_LIST.Frameworks.map((item) => {
          return (
            <li key={item.name}>
              <Card.Root>
                <Card.Image image={item.icon}/>
                <Card.Group>
                  <Card.Title text={item.name}/>
                  <Card.Bar value={item.skillLevel}/>
                </Card.Group>
              </Card.Root>
            </li>
          )
        })}
      </ul>

      <h3 className='title'>Software</h3>
      <ul className='autolayout'>
        {SOFTWARE_LIST.map((item) => {
          return (
            <li key={item.name}>
                <Card.Root>
                <Card.Image image={item.icon}/>
                <Card.Group>
                  <Card.Title text={item.name}/>
                  <Card.Bar value={item.skillLevel}/>
                </Card.Group>
              </Card.Root>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
