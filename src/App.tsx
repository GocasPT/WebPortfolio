import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import { Header, Footer } from "./layouts";
import { Home, Experience, Projects, Education, AboutMe } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/WebPortfolio/" Component={Home} />
        <Route path="/WebPortfolio/Experience" Component={Experience} />
        <Route path="/WebPortfolio/Projects" Component={Projects} />
        <Route path="/WebPortfolio/Education" Component={Education} />
        <Route path="/WebPortfolio/AboutMe" Component={AboutMe} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;