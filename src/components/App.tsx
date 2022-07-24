import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ComingSoon from "./ComingSoon";
import People from "./People";
import "./App.scss";
import Home from "./Home/Home";
import NotFound from "./NotFound";
import Blog from "./Blog/Blog";
import BlogIndex from "./Blog/BlogIndex";
import BlogFeed from "./Blog/BlogFeed";
import BlogPostPage from "./Blog/BlogPostPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="gradient" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/people" element={<People />} />
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogFeed />} />
          <Route path="index" element={<BlogIndex />} />
          <Route path=":slug" element={<BlogPostPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
