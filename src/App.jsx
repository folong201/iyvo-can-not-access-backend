// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Random website</h1>
      
      <div>
        <center>The website from backend</center>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <iframe
          src={import.meta.env.VITE_BACKEND_URL || 'https://0d24kmb4-8000.use.devtunnels.ms/'}
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
