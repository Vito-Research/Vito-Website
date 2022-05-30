import Landing from "./Landing";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.scss";
import SectionContainer from "./SectionContainer";

function App() {
  return (
    <div className="App" id="App">
      <Navbar />
      <Landing />
      <SectionContainer />
      <Footer />

    </div>
  );
}

export default App;
