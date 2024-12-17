import React from 'react';
import { Header } from './components/Portfolio/Header';
import { About } from './components/Portfolio/About';
import { Projects } from './components/Portfolio/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;