import { useState } from "react";

import { PAGE_TYPE } from "./constantes"
import { Header, Page, Footer, } from "./componets"
import './assets/styles/App.css';

function App() {
  //TODO: ver aquilo de quando mudar de pagina não bloquear a pagina quando carrega (video do youtube que explica isso)
  const [currentPage, setPage] = useState(PAGE_TYPE.HOME);

  const handleHeaderButton = (buttonValue) => {
    setPage(buttonValue);
  }

  return (
    <div className="App">
      <Header onButtonClick={handleHeaderButton}/>
      <Page type={currentPage}/>
      <Footer/>
    </div>
  );
}

export default App;
