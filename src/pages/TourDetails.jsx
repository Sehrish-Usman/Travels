import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TourDetails() {

  const { id } = useParams()

  const [user, setUser] = useState(null)

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))

  }, [id])

  if (!user) {
    return <h1 className='loading'>Loading...</h1>
  }

  return (

    <div className='details-page'>

      <div className='details-card'>

        <img
          src={`https://i.pravatar.cc/300?img=${user.id}`}
          alt=''
        />

        <h1>{user.name}</h1>

        <div className='details-info'>

          <p>
            <strong>Email:</strong>
            <br />
            {user.email}
          </p>

          <p>
            <strong>Phone:</strong>
            <br />
            {user.phone}
          </p>

          <p>
            <strong>City:</strong>
            <br />
            {user.address.city}
          </p>

          <p>
            <strong>Company:</strong>
            <br />
            {user.company.name}
          </p>

          <p>
            <strong>Website:</strong>
            <br />
            {user.website}
          </p>

        </div>

      </div>

    </div>

  )
}

export default TourDetails