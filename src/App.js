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
import Project3 from './pages/projects/project3/Project3';
import Project4 from './pages/projects/project4/Project4';
import Project5 from './pages/projects/project5/Project5';
import Project6 from './pages/projects/Project6/Project6';
import Project7 from './pages/projects/project7/Project7';
import Project8 from './pages/projects/project8/Project8';
import Project9 from './pages/projects/project9/Project9';

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
      <Route path='projects/projects2'  element ={ <Project2/>}/>
      <Route path='projects/projects3'  element ={ <Project3/>}/>
      <Route path='projects/projects4'  element ={ <Project4/>}/>
      <Route path='projects/projects5'  element ={ <Project5/>}/>
      <Route path='projects/projects6'  element ={ <Project6/>}/>
      <Route path='projects/projects7'  element ={ <Project7/>}/>
      <Route path='projects/projects8'  element ={ <Project8/>}/>
      <Route path='projects/projects9'  element ={ <Project9/>}/>
      <Route path='/gallery' exact element ={ <Gallery/>}/>
      <Route path='/contactUs' exact element ={ <Contact/>}/>
     </Routes>
     <Footer/>
    </div>
       </BrowserRouter>
    
  );
}

export default App;
