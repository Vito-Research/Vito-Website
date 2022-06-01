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
    <div className="App" id="App">

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

                <Landing />
                <SectionContainer />
                <Footer />

              </div>
  )}
          />
          <Route path="/ComingSoon" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
