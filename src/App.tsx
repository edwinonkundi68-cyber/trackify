import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ProtectedRoute from './components/ProtectedRouter'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import Login from './pages/Login'
import { AppContext } from './context/AppContext'

const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <AppContext.Provider value={{ appName: 'Trackify', version: 1 }}>
      <div>
        {isLoggedIn && <Topbar onToggle={handleToggle} onLogout={handleLogout} />}
        <div>
          {isLoggedIn && isOpen && <Sidebar isLoggedIn={isLoggedIn} />}
          <main>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users/:id"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <UserDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/orders"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Orders />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Settings />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App