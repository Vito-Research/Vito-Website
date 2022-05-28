import logo from './logo.svg';
import { Suspense } from 'react'
import './styles.css'
import Algo from './Componets/Algo';
// import Feature from './Componets/Feature';
function App() {
  return (
    // <div className="App">
        <Suspense fallback={null}>
      <Algo></Algo>
      {/* <Feature></Feature> */}
      </Suspense>
    // </div>
  );
}

export default App;
