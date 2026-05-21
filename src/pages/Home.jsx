import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {const navigate = useNavigate()

const [trip, setTrip] = useState('Round Trip')
const [from, setFrom] = useState('')
const [to, setTo] = useState('')
const [date, setDate] = useState('')
const [travellers, setTravellers] = useState('1 Traveller')
const [travelClass, setTravelClass] = useState('Economy')

const handleSearch = () => {

  navigate('/flights', {

    state: {
      trip,
      from,
      to,
      date,
      travellers,
      travelClass
    }

  })

}
  return (
    <div>

      {/* HERO */}

      <section className='hero'>

        <div className='overlay'>

          <div className='hero-content'>

            <p className='small-text'>
              BEST TOUR AGENCY
            </p>

            <h1>
              Explore The Beauty <br />
              of Pakistan
            </h1>

            <p className='hero-para'>
              Discover mountains, lakes and unforgettable adventures.
            </p>

            <div className='hero-buttons'>

              <Link to='/tours'>
                <button className='primary-btn'>
                  Explore Tours
                </button>
              </Link>

              <button className='secondary-btn'>
                Learn More
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* SEARCH SECTION */}
<section className='search-section'>

  <div className='search-box'>

<select
  value={trip}
  onChange={(e) => setTrip(e.target.value)}
>
  <option>Round Trip</option>
  <option>One Way</option>
  <option>Multi City</option>
</select>

<input
  type='text'
  placeholder='From'
  value={from}
  onChange={(e) => setFrom(e.target.value)}
/>

<input
  type='text'
  placeholder='To'
  value={to}
  onChange={(e) => setTo(e.target.value)}
/>

<input
  type='date'
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>

<select
  value={travellers}
  onChange={(e) => setTravellers(e.target.value)}
>
  <option>1 Traveller</option>
  <option>2 Travellers</option>
  <option>3 Travellers</option>
</select>

<select
  value={travelClass}
  onChange={(e) => setTravelClass(e.target.value)}
>
  <option>Economy</option>
  <option>Business</option>
</select>

<button onClick={handleSearch}>
  Search Flights
</button>

  </div>

</section>
    <section className='services'>

  <h2>Our Services</h2>

  <div className='services-grid'>

    <div className='service-card'>
      ✈ Flights
    </div>

    <div className='service-card'>
      🕋 Umrah Packages
    </div>

    <div className='service-card'>
      🛂 Visa Services
    </div>

    <div className='service-card'>
      🏨 Hotel Booking
    </div>

    <div className='service-card'>
      🚖 Transport
    </div>

    <div className='service-card'>
      🌍 World Tours
    </div>

  </div>

</section>

      {/* PACKAGES */}      
      <section className='packages'>

        <h2>Popular Packages</h2>

        <div className='package-grid'>

          <div className='package-card'>

            <img
              src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop'
              alt='Hunza tour'
            />

            <div className='package-content'>
              <h3>Hunza Tour</h3>

              <p>5 Days Amazing Tour</p>

              <button>Book Now</button>
            </div>

          </div>

          <div className='package-card'>

            <img
              src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Hunza luxury tour'
            />

            <div className='package-content'>

              <h3>Naran Tour</h3>

              <p>5 Days Luxury Tour Package</p>

              <p>
                Visit beautiful mountains and lakes of Hunza.
              </p>

              <h4>$299</h4>

              <Link to='/tours'>
                <button>
                  Book Now
                </button>
              </Link>

            </div>

          </div>

          <div className='package-card'>

            <img
              src='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
              alt='Skardu tour'
            />

            <div className='package-content'>

              <h3>Skardu Tour</h3>

              <p>
                7 Days Adventure Package
              </p>

              <p>
                Explore valleys, rivers and amazing nature.
              </p>

              <h4>$399</h4>

              <Link to='/tours'>
                <button>
                  Book Now
                </button>
              </Link>

            </div>

          </div>

          <div className='package-card'>

            <img
              src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
              alt='Swat tour'
            />

            <div className='package-content'>

              <h3>Swat Tour</h3>

              <p>
                3 Days Family Package
              </p>

              <p>
                Enjoy waterfalls and green valleys.
              </p>

              <h4>$199</h4>

              <Link to='/tours'>
                <button>
                  Book Now
                </button>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home