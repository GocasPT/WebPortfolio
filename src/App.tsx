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
              <Route key={page.path} path={page.path} element={
                <page.component />
              } />
            );
          })}
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;