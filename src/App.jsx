import { useState } from 'react'
// import './App.css'

function App() {
  const [backendUrl, setBackendUrl] = useState(import.meta.env.VITE_BACKEND_URL || 'https://0d24kmb4-8000.use.devtunnels.ms/')
  const [inputUrl, setInputUrl] = useState(backendUrl)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBackendUrl(inputUrl)
  }

  return (
    <>
      <h1>Random website</h1>
      <div>
        <center>The website</center>
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem', textAlign: 'center' }}>
        <input
          type="text"
          value={inputUrl}
          onChange={e => setInputUrl(e.target.value)}
          placeholder="Enter backend URL"
          style={{ width: '60%', padding: '0.5rem' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Submit
        </button>
      </form>
      <div style={{ marginTop: '2rem' }}>
        <iframe
          src={backendUrl}
          title="External Website"
          width="100%"
          height="500"
          style={{ border: '1px solid #ccc' }}
        ></iframe>
      </div>
    </>
  )
}

export default App
