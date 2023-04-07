import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/about';
import Footer from './components/footer';
import Gallerie from './components/gallerie';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Gallerie/>
      <Contact/>
      <Footer/>
   
     
      
    </div>
  );
}

export default App;
