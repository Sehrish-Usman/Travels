import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
     

      {/* MOVING PLANE */}
      <div className='flying-plane'>✈</div>

      {/* NAVBAR */}
      <nav className='navbar'>
        <div className='logo'>✈ TravelGo</div>
        <div className='links'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/tours'>Tours</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar