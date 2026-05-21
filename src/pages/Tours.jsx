import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Tours() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {

        setUsers(data)
        setLoading(false)

      })

  }, [])

  if (loading) {
    return <h1 className='loading'>Loading...</h1>
  }

  return (

    <div className='users-page'>

      <h1 className='users-title'>
        Our Happy Travellers
      </h1>

      <div className='users-grid'>

        {
          users.map(user => (

            <div className='user-card' key={user.id}>

              <img
                src={`https://i.pravatar.cc/300?img=${user.id}`}
                alt=''
              />

              <div className='user-content'>

                <h2>{user.name}</h2>

                <p>{user.email}</p>

                <p>{user.address.city}</p>

                <Link to={`/tours/${user.id}`}>

                  <button>
                    View Details
                  </button>

                </Link>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  )
}

export default Tours