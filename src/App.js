import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import { Route, Router, Routes, Switch } from "react-router-dom";
import Login from "./Login";
import Chart from "./Chart"

function App() {
  return (
   <>
  
  <Routes>
        <Route path="/" exact Component={Home} />
        
        <Route path="/Login" Component={Login} />
        <Route path="/Chart" Component={Chart} />
       
      </Routes>
   </>
  );
}

export default App;
