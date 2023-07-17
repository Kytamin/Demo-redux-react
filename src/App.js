import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contract";
import Home from './components/home';
import ListUser from './components/listUser/listUser';





function App() {
  return (
    <>
     <Routes>
        <Route path="/users" element={<ListUser />} />
      </Routes>
      <Home/>
    </>

  );
}

export default App;
