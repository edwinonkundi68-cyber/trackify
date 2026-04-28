import { useEffect, useRef } from 'react'
import useClock from '../hooks/useClock'
import useNotifications from '../hooks/useNotifications'
import useSearch from '../hooks/useSearch'

interface TopbarProps {
  onToggle: () => void
  onLogout: ()=>void
}

const Topbar=(props: TopbarProps)=> {
  const time = useClock()
  const { notifications, removeNotification } = useNotifications()
  const { searchText, handleSearch, clearSearch } = useSearch()
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.title = `Trackify - ${notifications.length} notifications`
  }, [notifications])

  const focusSearch=()=> {
    searchRef.current?.focus()
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <span>{time.toLocaleTimeString()}</span>
      <button onClick={props.onToggle}>Toggle Sidebar</button>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
      />
      <button onClick={clearSearch}>Clear</button>
      <button onClick={focusSearch}>Focus Search</button>
      <span>EO</span>
      <button onClick={props.onLogout}>Logout</button>
      <p>You searched: {searchText}</p>
      <div>
        <h4>Notifications ({notifications.length})</h4>
        {notifications.map((n) => (
          <div key={n.id}>
            <p>{n.message}</p>
            <button onClick={() => removeNotification(n.id)}>
              Dismiss
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topbar