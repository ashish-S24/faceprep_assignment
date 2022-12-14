import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/'  element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
