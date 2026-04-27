import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import { AppContext } from './context/AppContext'

const App=()=> {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle=()=> {
    setIsOpen(!isOpen)
  }

  return (
    <AppContext.Provider value={{ appName: 'Trackify', version: 1 }}>
      <div>
        <Topbar onToggle={handleToggle} />
        <div>
          {isOpen && <Sidebar isLoggedIn={true} />}
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App