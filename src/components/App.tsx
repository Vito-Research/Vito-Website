import AboutSection from "./AboutSection";
import Landing from "./Landing";

import "./App.scss";
import AppsSection from "./AppsSection";
import AlgorithmSection from "./AlgorithmSection";

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutSection />
      <AppsSection />
      <AlgorithmSection />
    </div>
  );
}

export default App;
