import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Th8 from "./components/th/Th8";
import Bt1 from "./components/bt/Bt1";
// import Th6 from './components/th/Th6'
// import Th7 from './components/th/Th7'
// import Th4 from './components/th/Th4'
// import Th5 from './components/th/Th5'
// import Th2 from './components/th/th2'
// import Th3 from './components/th/Th3'
// import Th4 from './components/th/Th4'
// import UseReducer from './components/useReducer/UseReducer'
// import Todolist from './components/todolist/Todolist'
// import Th1 from './components/th/Th1'
// import UseState_Comp from './components/useState/UseState_Comp'
// import UseContex_Comp from './components/useContext/UseContex_Comp'
// import UseEffect from './components/useEffect/UseEffect'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseState_Comp/> */}
      {/* <UseContex_Comp/> */}
      {/* <UseEffect/> */}
      {/* <UseReducer/> */}
      {/* <Todolist/> */}
      {/* <Th1/>*/}
      {/* <Th2/> */}
      {/* <Th3/> */}
      {/* <Th4/> */}
      {/* <Th5/> */}
      {/* <Th6 /> */}
      {/* <Th7/> */}
      {/* <Th8/> */}
      <Bt1/>
    </>
  );
}

export default App;
