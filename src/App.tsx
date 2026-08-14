import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Sachin Ghimire's Portfolio</h1>
        <p className="text-xl mb-8">Welcome to my React + Vite + TypeScript project</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}

export default App
