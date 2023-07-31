import { useState } from "react";
import { PAGE_TYPE } from "./constantes"
import { Header, Home, Projects, Experience, About, Footer, } from "./componets"
import './assets/styles/App.css';

function App() {
  //TODO: ver aquilo de quando mudar de pagina não bloquear a pagina quando carrega (video do youtube que explica isso)
  const [currentPage, setPage] = useState(PAGE_TYPE.HOME);

  const handleHeaderButton = (buttonValue) => {
    setPage(buttonValue);
  }

  const pageComponentMapping = {
    [PAGE_TYPE.HOME]: <Home />,
    [PAGE_TYPE.PROJECTS]: <Projects />,
    [PAGE_TYPE.EXPERIENCE]: <Experience />,
    [PAGE_TYPE.ABOUT_ME]: <About />,
  };
  const componentToRender = pageComponentMapping[currentPage] || <Home />;

  return (
    <div className="App">
      <Header page={currentPage} onButtonClick={handleHeaderButton}/>
      {componentToRender}
      <Footer/>
    </div>
  );
}

export default App;
