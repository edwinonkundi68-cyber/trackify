import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import Login from './pages/Login'
import { AppContext } from './context/AppContext'

const App = () => {
  return (
    <AppContext.Provider value={{ appName: 'Trackify', version: 1 }}>
      <Routes>
        <Route path="/login" element={<Login onLogin={()=>{}} />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  )
}

export default App