import './App.css';
import Divider from '@mui/material/Divider';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import About from './components/About';
import Inspiration from './components/Inspiration';
import StoneCircle from './components/StoneCircle';
import Services from './components/Services';
import ActiveSessions from './components/ActiveSessions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopBar />
      <Hero/>
      <Divider />
      <div>
        <About/>
        <Inspiration />
        <StoneCircle />
        <Divider />
        <Services />
        <Divider />
        <ActiveSessions />
        <Divider />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
