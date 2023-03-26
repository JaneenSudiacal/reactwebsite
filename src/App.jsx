import { React } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tiles from './components/Tiles';
import Quote from './components/Quote';
import Action from './components/Action';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Tiles />
      <Quote />
      <Action />
      <Footer />
    </div>
  );
}

export default App;
