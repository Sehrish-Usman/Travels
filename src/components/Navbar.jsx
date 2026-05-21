import { NavLink } from 'react-router-dom'

function Navbar() {

  return (

    <>

      {/* TOP BAR */}

      <div className='top-bar'>

        <div className='top-left'>

          <span>📞 +92 300 1234567</span>

          <span>💬 WhatsApp: +92 300 9876543</span>

        </div>

        <div className='top-right'>

          <span>📸 Instagram</span>

          <span>📘 Facebook</span>

          <span>▶ YouTube</span>

        </div>

      </div>

      {/* MOVING PLANE */}

      <div className='flying-plane'>
        ✈
      </div>

      {/* NAVBAR */}

      <nav className='navbar'>

        <div className='logo'>

          ✈ TravelGo

        </div>

        <div className='links'>

          <NavLink to='/'>Home</NavLink>

          <NavLink to='/about'>About</NavLink>

          <NavLink to='/tours'>Tours</NavLink>

          <NavLink to='/contact'>Contact</NavLink>

        </div>

        <button className='book-btn'>
          Book Now
        </button>
<li>
      ✈️ Flights
    </li>

    <li>
       Pakistan Tours
    </li>

    <li>
      🌍 World Tours
    </li>

    <li>
      🎓 Studies
    </li>

    <li>
      🕋 Umrah
    </li>
      </nav>

    </>

  )
}

export default Navbar