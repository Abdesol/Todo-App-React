import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import "./assets/styles/index.css"
import Navbar from './layouts/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Routes>
              <Route path='/' element={ <Home/> }/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
