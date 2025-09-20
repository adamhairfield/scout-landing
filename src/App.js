import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ContactForm />
    </div>
  );
}

export default App;
