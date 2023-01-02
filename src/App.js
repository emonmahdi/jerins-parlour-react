import './App.css';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import Header from './components/Home/Header';
import Services from './components/Home/Services';
import Testimonial from './components/Home/Testimonial';
import Footer from './shared/Footer';
import HeaderNav from './shared/HeaderNav';

function App() {
  return (
    <div>  
      <Header />
      <Services />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
