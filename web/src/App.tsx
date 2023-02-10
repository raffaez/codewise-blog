import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesListPage from "./pages/ArticlesListPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
