import React from 'react';
import logo from './logo.svg';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Contact from './components/Contact';
import Footer from './components/Footer'
import Projects from './components/Projects'
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Nav />
     <Route path="/" exact component={Hero} />
     <Route path="/projects" component={Projects} />
     <Route path="/contact" component={Contact} />
     <Footer />
    </BrowserRouter>
  );
}

export default App;
