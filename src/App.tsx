import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./layouts";
import { Pages } from "./pages";
import "./assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Pages.map((page) => {
          return (
            <Route path={page.path} element={
              <div id='content-wrap'>
                <page.component />
              </div>
            } />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;