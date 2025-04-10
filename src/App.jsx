import Navbar from '../src/components/Navbar';
import HeroSection from './components/HeroSection';
import GridSection from './components/GridSection';
import StatSection from './components/StatSection';

function App() {
  

  return (
    <>
    <div
    className='bg-gray-800 '>

        <Navbar/>
        <HeroSection/>
        <GridSection/>
        <StatSection/>
    </div>
    </>
  )
}

export default App
