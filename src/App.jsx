import { Route, Routes } from 'react-router-dom'
import './App.css'
/*Pages*/
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
/*Components*/
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <div id="main">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/services" element={<Services />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route path='*' element={<h1>404 sry</h1>} />
      </Routes>
    </div>
    </>
  )
}

export default App
