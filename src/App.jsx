import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import UseReducer from './components/useReducer/UseReducer'
import Todolist from './components/todolist/Todolist'
// import UseState_Comp from './components/useState/UseState_Comp'
// import UseContex_Comp from './components/useContext/UseContex_Comp'
// import UseEffect from './components/useEffect/UseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseState_Comp/> */}
      {/* <UseContex_Comp/> */}
      {/* <UseEffect/> */}
      {/* <UseReducer/> */}
      <Todolist/>
    </>
  )
}

export default App
