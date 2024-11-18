import Features from './components/Features';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar/>
      <Main/>
      <Features/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App;