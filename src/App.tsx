import React from 'react';
import {
  About,
  Contacts,
  Experience,
  Footer,
  Header,
  Navbar,
  Portfolio,
} from './components';

const App: React.FC = () => (
  <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Portfolio />
    <Contacts />
    <Footer />
  </>
);

export default App;
