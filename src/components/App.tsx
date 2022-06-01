import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ComingSoon from "./ComingSoon";
import "./App.scss";
import SectionContainer from "./SectionContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <div className="App" id="App">

              <Navbar />
              <Landing />
              <SectionContainer />
              <Footer />

            </div>
            )}
        />
        <Route
          path="/Home"
          element={(
            <div className="App" id="App">

              <Navbar />
              <Landing />
              <SectionContainer />
              <Footer />

            </div>
            )}
        />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
