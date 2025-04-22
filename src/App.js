import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProjectPage from './pages/Projects';
import Contact from './pages/Contact';
//import './App.css'; // Optional global styling

const App = () => {
  return (
    <Router>
      
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;