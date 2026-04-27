import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

interface SidebarProps {
  isLoggedIn: boolean
}

const Sidebar=(props: SidebarProps)=> {
  const { appName, version } = useContext(AppContext)

  return (
    <div>
      <h2>{appName}</h2>
      <p>v{version}.0</p>
      {props.isLoggedIn ? (
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      ) : (
        <p>Please log in to see the menu</p>
      )}
    </div>
  )
}

export default Sidebar