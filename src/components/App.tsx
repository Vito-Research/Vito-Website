import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Landing from "./Landing";
import Navbar from "./Navbar";
import ComingSoon from "./ComingSoon";
import People from "./People";
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
              

            </div>
            )}
        />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="/People" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
