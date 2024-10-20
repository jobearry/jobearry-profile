import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <div>
        <a href="https://github.com/jobearry/studies">
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=jobearry&theme=dark&layout=compact&langs_count=8&card_width=320" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
