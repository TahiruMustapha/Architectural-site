import React from 'react';
import Home from './components/Home/Home';
import Footer from './Footer/Footer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Plan from './pages/plan/Plan';
import Aim from './pages/whatWeDo/Aim';
import About from './pages/whoWeAre/About';
import Project from './pages/projects/Project'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contactUs/Contact'
import Project1 from './pages/projects/projects1/Project1';
import Project2 from './pages/projects/Project2/Project2';

function App() {
  return (
      <BrowserRouter>
      
      <div className='app'> 
     <Routes>
      <Route path='/' exact={true} element ={ <Home/>} />
      <Route path='/planForSale' exact element ={ <Plan/>}/>
      <Route path='/whatWeDo' exact element ={ <Aim/>}/>
      <Route path='/whoWeAre' exact element ={ <About/>}/>
      <Route path='/projects' exact element ={ <Project/>}/>
      <Route path='projects/projects1'  element ={ <Project1/>}/>
      <Route path='projects/projects2'  element ={ <Project1/>}/>
      <Route path='/gallery' exact element ={ <Gallery/>}/>
      <Route path='/contactUs' exact element ={ <Contact/>}/>
     </Routes>
     <Footer/>
    </div>
       </BrowserRouter>
    
  );
}

export default App;
