import React from 'react';
import Bio from './components/bio/bio';
import Contacts from './components/contacts/contacts';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import Hero from './components/hero/hero';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Bio/>
      <Contacts/>
      <Skills/>
      <Education/>
      <Hero/>
    </div>
  );
}

export default App;
