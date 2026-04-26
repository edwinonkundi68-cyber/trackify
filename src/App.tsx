import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import DashboardContent from "./components/DashboardContent"
import { AppContext } from "./context/AppContext" 

function App(){
  const[isOpen,setIsOpen]=useState(true)

  function hundleToggle(){
    setIsOpen(!isOpen)
  }
  return(
    <AppContext.Provider value={{appName:"Trackify",version:1.0}}>
      <div>
        <Topbar onToggle={hundleToggle}/>
        <div>
          {isOpen &&(
            <Sidebar isLoggedIn={true} />
          )}
          <main>
            <DashboardContent/>
          </main>
        </div>
      </div>
    
    </AppContext.Provider>

  )
}
export default App