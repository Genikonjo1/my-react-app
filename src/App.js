
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js'
import About from './About.js';
import Contact from './Contact.js';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div>
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
