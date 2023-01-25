import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Plans } from './Components/Plans'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <Navbar/>
  <Plans/>
   
    </div>
  )
}

export default App
