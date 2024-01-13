import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
 <>

<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>

 </>
  )
}

export default App
