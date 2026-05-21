import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Contact() {
const navigate = useNavigate()

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

const handleSubmit = () => {

  navigate('/message-success', {

    state: {
      name,
      email,
      message
    }

  })

}
  return (

    <div className='contact-page'>

      <div className='contact-left'>

        <h1>Contact Us</h1>

        <p>
          We are available for tours, flights, visas and Umrah packages.
        </p>

        <div className='contact-info'>

          <p>📧 travelgo@gmail.com</p>

          <p>📱 WhatsApp: +92 300 1234567</p>

          <p>📘 Facebook: TravelGo Official</p>

          <p>📸 Instagram: @travelgo</p>

          <p>▶️ YouTube: TravelGo Tours</p>

        </div>

      </div>

      <div className='contact-right'>

        <input
  type='text'
  placeholder='Your Name'
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  type='email'
  placeholder='Your Email'
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<textarea
  placeholder='Your Message'
  value={message}
  onChange={(e) => setMessage(e.target.value)}
></textarea>

<button onClick={handleSubmit}>
  Send Message
</button>

      </div>

    </div>

  )
}

export default Contact