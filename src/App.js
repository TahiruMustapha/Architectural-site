import React from 'react';
import Navbar from './navBar/Navbar';
import Home from './components/Home/Home';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className='app'>
     <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
