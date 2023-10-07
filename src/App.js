import { useState } from "react";
import { PAGE_TYPE } from "./data/constants"
import { Navbar, Footer } from "./components"
import { Home, Projects, Experience, Education, About } from "./pages"
import './assets/styles/App.css';

function App() {
  const [currentPage, setPage] = useState(PAGE_TYPE.HOME);

  const handleHeaderButton = (buttonValue) => {
    setPage(buttonValue);
  }

  const pageComponentMapping = {
    [PAGE_TYPE.HOME]: <Home />,
    [PAGE_TYPE.EXPERIENCE]: <Experience />,
    [PAGE_TYPE.PROJECTS]: <Projects />,
    [PAGE_TYPE.EDUCATION]: <Education />,
    [PAGE_TYPE.ABOUT_ME]: <About />,
  };
  const componentToRender = pageComponentMapping[currentPage] || <Home />;

  return (
    <div className="App">
      <Navbar page={currentPage} onButtonClick={handleHeaderButton}/>
      {componentToRender}
      <Footer/>
    </div>
  );
}

export default App;
