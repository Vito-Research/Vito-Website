import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ComingSoon from "./ComingSoon";
import People from "./People";
import "./App.scss";
import Home from "./Home/Home";
import NotFound from "./NotFound";
import Blog from "./Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/people" element={<People />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
