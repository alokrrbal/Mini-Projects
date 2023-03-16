import logo from './logo.svg';
import './App.css';
import { NavBar } from './Component/NavBar';
import { AllRoutes } from './Page/AllRoutes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
    </div>
  );
}

export default App;
