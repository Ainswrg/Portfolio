import React from 'react';
import {
  About,
  Contacts,
  Experience,
  Footer,
  Header,
  Navbar,
  Portfolio,
  Services,
} from './components';

const App: React.FC = () => (
  <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contacts />
    <Footer />
  </>
);

export default App;
