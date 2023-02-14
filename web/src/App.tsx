import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesListPage from "./pages/ArticlesListPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./global.css";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-blue-950 scroll-smooth">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-screen min-h-screen mx-auto pb-10 grid gap-28 items-start mt-5">
          <div>
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
    </div>
  );
}

export default App;
