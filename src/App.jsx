import React from 'react'
import Home from './components/home/Home';
import Thegame from './components/thegame/Thegame';
import Contact from './components/contact/Contact';
import {Route, Routes} from 'react-router-dom';




const App = () => {
  return (
    <>
<section>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/thegame" element={<Thegame />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</section> 
    </>
  );
}

export default App