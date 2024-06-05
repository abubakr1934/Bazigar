import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Temp from './components/Temp';
import Accordian from './components/Accordian';
import Footer from './components/Footer';
import VideoPlay from './components/VideoPlay';
function App() {
  return (
  <>
  <Header></Header>
  <Temp></Temp>
  <VideoPlay></VideoPlay>
  <Footer></Footer>
  
  </>

  );
}

export default App;
