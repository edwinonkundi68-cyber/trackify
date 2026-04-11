import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

function App(){
  const[isOpen,setIsOpen]=useState(true)
  return(
    <div>
      <Topbar/>
      <div>
        <button onClick={()=>setIsOpen(!isOpen)}>
          {isOpen? 'Close Sidebar':'Open Sidebar'}
        </button>
        {isOpen &&(
          <Sidebar appName="Trackify" isLoggedIn={true}/>
        )}
        <main>
          <p>Main content goes here</p>
        </main>
      </div>
    </div>
  )
}
export default App