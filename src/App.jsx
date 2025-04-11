import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import HeroSection from './components/HeroSection';
import GridSection from './components/GridSection';
import StatSection from './components/StatSection';
import Footer from './components/Footer';
import Privacy from './PrivacyPolicy';


function Layout() {
  const location = useLocation();

  // If on PrivacyPolicy route, only show the Privacy component
  if (location.pathname === '/PrivacyPolicy') {
    return (
      <>
        <Navbar />
        <Privacy />
        <Footer />
      </>
    );
  }

  // For all other routes, show full site
  return (
    <>
      <Navbar />
      <HeroSection />
      <GridSection />
      <StatSection />
      <Footer />
    </>
  );
}


function App() {
 
  return (

   <div className="bg-gray-900">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/PrivacyPolicy" element={<Layout />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
