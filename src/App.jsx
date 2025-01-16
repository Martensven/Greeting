import Greeting from './components/Greeting';
import Card from './components/Memory/Card';
import NavLink from './components/nav';
import { Routes, Route, Router } from 'react-router-dom';

function App() {

  return (
    <>
      <NavLink />
      <Routes>
        <Route path="/Greeting" element={<Greeting />} />
        <Route path="/Memory" element={<Card />} />
      </Routes>
    </>
  )
}

export default App
