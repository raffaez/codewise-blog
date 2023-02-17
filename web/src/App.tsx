import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Article from "./components/Article";
import ArticlesListPage from "./pages/ArticlesListPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./global.css";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-blue-950 scroll-smooth min-w-screen min-h-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <div className="mx-auto pb-10 mt-5 grid gap-28 items-start">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<ArticlesListPage />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
