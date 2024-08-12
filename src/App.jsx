import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Portfolio from './pages/Portfolio/Portfolio'
import Service from './pages/Service/Service'
import Layout from './components/Layout';

function App() {

  return (
<Router>
  <Routes>
    {/* <Route path='/' element={<HomePage/>} exact/> */}
    <Route path='/' element={<HomePage/>} exact/>
    <Route path='/home' element={<HomePage/>} exact/>
    <Route path='/about' element={<About/>} exact/>
    <Route path='/contact' element={<Contact/>} exact/>
    <Route path='/portfolio' element={<Portfolio/>} exact/>
    <Route path='/service' element={<Service/>} exact/>
  </Routes>
</Router>
  )
}

export default App