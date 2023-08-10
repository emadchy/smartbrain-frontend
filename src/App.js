import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      
        <div className='Particles'><ParticlesBg color='#818589' num={50} type="cobweb" bg={true} /></div>
        
      
      {/* 
      <FaceRecognition/>
      } */}
    
    
    
    
    </div>
  );
}

export default App;
