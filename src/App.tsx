import { HashRouter , Routes, Route } from "react-router-dom";
import { Header, Footer } from "./layouts";
import { Pages } from "./pages";
import "./assets/App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
          {Pages.map((page) => {
            return (
              <Route key={page.path} path={page.path} element={
                <page.component />
              } />
            );
          })}
        </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;