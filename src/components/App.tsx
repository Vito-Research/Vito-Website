import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ComingSoon from "./ComingSoon";
import People from "./People";
import "./App.scss";
import Home from "./Home/Home";
import NotFound from "./NotFound";
import Blog from "./Blog/Blog";
import BlogPost from "./Blog/BlogPost";
import BlogIndex from "./Blog/BlogIndex";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/people" element={<People />} />
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogIndex />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
