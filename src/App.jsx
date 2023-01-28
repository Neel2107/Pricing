import { useState } from 'react'
import { CheckoutPage } from './Components/CheckoutPage'
import { Plans } from './Components/Plans'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path='/' exact element={<Plans/>} />
                <Route path='plan' element={<CheckoutPage/>} />
            </Routes>
      </Router>
   {/* <CheckoutPage/> */}
    </div>
  )
}

export default App
