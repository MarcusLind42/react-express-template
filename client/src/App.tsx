import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    // Fetch test message from backend
    console.log('Attempting to fetch from backend...')
    fetch('/api/test')
      .then(response => {
        console.log('Response received:', response.status)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log('Data received:', data)
        setMessage(data.message)
      })
      .catch(error => {
        console.error('Error fetching message:', error)
        setError(error.message)
      })
  }, [])

  return (
    <div className="App">
      <h1>React + Express App</h1>
      <div className="card">
        <p>Message from backend: {message || 'Loading...'}</p>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
    </div>
  )
}

export default App
