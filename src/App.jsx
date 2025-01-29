import Greeting from './components/Greeting';
import Card from './components/Memory/Card';
import Stopwatch from './components/Stopwatch/Stopwatch';
import TodoAll from './components/TodoFolder/TodoAll';
import NavLink from './components/nav';
import ChangeBackgroundImage from './components/BackGround/BackGroundNav';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/Greeting" element={<Greeting />} />
        <Route path="/Memory" element={<Card />} />
        <Route path="/Stopwatch" element={<Stopwatch />} />
        <Route path="/TodoAll" element={<TodoAll />} />
      </Routes>
      <ChangeBackgroundImage />
    </>
  );
}

export default App
