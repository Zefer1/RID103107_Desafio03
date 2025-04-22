import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


//Pages
import Home from './pages/Home'
import About from './pages/About'
import Projectos from './pages/Projectos'
import Tecnologias from './pages/Tecnologias'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projectos" element={<Projectos/>}></Route>
        <Route path="/tecnologias" element={<Tecnologias/>}></Route>
      </Routes>
        
    </Router>
  )
}

export default App
