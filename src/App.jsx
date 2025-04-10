import Navbar from '../src/components/Navbar';
import HeroSection from './components/HeroSection';
import GridSection from './components/GridSection';
import StatSection from './components/StatSection';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
    <div
    className='bg-gray-900 '>

        <Navbar/>
        <HeroSection/>
        <GridSection/>
        <StatSection/>
        <Footer/>
    </div>
    </>
  )
}

export default App
