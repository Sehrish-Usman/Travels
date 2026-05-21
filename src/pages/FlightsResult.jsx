import { useLocation } from 'react-router-dom'

function FlightsResult() {

  const location = useLocation()

  const data = location.state

  return (

    <div className='flights-page'>

      <h1>Available Flights</h1>

      <div className='flight-search-data'>

        <p><strong>Trip:</strong> {data.trip}</p>

        <p><strong>From:</strong> {data.from}</p>

        <p><strong>To:</strong> {data.to}</p>

        <p><strong>Date:</strong> {data.date}</p>

        <p><strong>Travellers:</strong> {data.travellers}</p>

        <p><strong>Class:</strong> {data.travelClass}</p>

      </div>

      <h2>Select Your Flight</h2>

      <div className='flight-grid'>

        <div className='flight-card'>

          <h3>PIA Airlines</h3>

          <p>Lahore → Dubai</p>

          <p>08:00 AM</p>

          <p>$320</p>

          <button>Select Flight</button>

        </div>

        <div className='flight-card'>

          <h3>Emirates</h3>

          <p>Lahore → Dubai</p>

          <p>01:00 PM</p>

          <p>$450</p>

          <button>Select Flight</button>

        </div>

        <div className='flight-card'>

          <h3>Qatar Airways</h3>

          <p>Lahore → Dubai</p>

          <p>09:00 PM</p>

          <p>$500</p>

          <button>Select Flight</button>

        </div>

      </div>

    </div>

  )
}

export default FlightsResult