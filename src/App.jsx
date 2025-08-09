import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MainPage from './Components/MainPage'
import Introduction from './Components/Introduction'
import Features from './Components/Features'
import Interveiws from './Components/Interveiws'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-[600px] h-[100%] m-auto">
   <MainPage/>
   <Introduction/>
   <Features/>
   <Interveiws/>
      </div>

    </>
  )
}

export default App
