import './App.css';

import Homepage from './components/Homepage';
import Register from './components/signup';
// import About from './components/about';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import Middle from './components/Middle';

function App() {
  return (

    <div>
      {/* <Homepage></Homepage> */}
      {/* <Signup></Signup> */}
      {/* <About></About> */}
      <Navbar></Navbar>


      <Middle></Middle>
      
      
      <Footer></Footer> 

    </div>

  );
}

export default App; 
