import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import FlightsResult from './pages/FlightsResult'
import Home from './pages/Home'
import About from './pages/About'
import Tours from './pages/Tours'
import TourDetails from './pages/TourDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MessageSuccess from './pages/MessageSuccess'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/flights' element={<FlightsResult />} />
        <Route
  path='/message-success'
  element={<MessageSuccess />}
/>
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App