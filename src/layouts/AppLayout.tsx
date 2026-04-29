import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Topbar onToggle={handleToggle} onLogout={() => {}} />
      <div style={{ display: 'flex' }}>
        {isOpen && <Sidebar isLoggedIn={true} />}
        <main style={{ flex: 1, padding: '1rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}