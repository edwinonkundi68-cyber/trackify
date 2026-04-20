import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

function App(){
  const[isOpen,setIsOpen]=useState(true)
  function toggleSidebar(){
    setIsOpen(!isOpen)
  }
  return(
    <div>
      <Topbar onToggle={toggleSidebar} />
      <div>
        {isOpen && (<Sidebar appName="Trackify" isLoggedIn={true}/>)}
        <main>
          <p>Main content goes here</p>
        </main>
      </div>
    </div>
  )
}
export default App