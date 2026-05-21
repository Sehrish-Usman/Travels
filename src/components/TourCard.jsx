import { Link } from 'react-router-dom'

function TourCard({ user }) {
  return (
    <div className='card'>
      <h2>{user.name}</h2>

      <p>{user.email}</p>

      <Link to={`/tours/${user.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  )
}

export default TourCard