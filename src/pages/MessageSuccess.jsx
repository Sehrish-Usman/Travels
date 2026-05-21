import { useLocation } from 'react-router-dom'

function MessageSuccess() {

  const location = useLocation()

  const data = location.state

  return (

    <div className='message-page'>

      <div className='message-card'>

        <h1>We Received Your Message</h1>

        <p><strong>Name:</strong> {data.name}</p>

        <p><strong>Email:</strong> {data.email}</p>

        <p><strong>Message:</strong> {data.message}</p>

      </div>

    </div>

  )
}

export default MessageSuccess