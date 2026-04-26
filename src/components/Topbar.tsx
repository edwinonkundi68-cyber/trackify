import { useState, useEffect ,useRef } from 'react'

interface TopbarProps {
  onToggle: () => void
}

function Topbar(props: TopbarProps) {
  const [searchText, setSearchText] = useState('')
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New user signed up' },
    { id: 2, message: 'Orders received' },
    { id: 3, message: 'Payment confirmed' },
  ])
  const [time, setTime] = useState(new Date())
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.title = `Trackify - ${notifications.length} notifications`
  }, [notifications])

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value)
  }

  function clearSearch() {
    setSearchText('')
  }

  function focusSearch(){
    searchRef.current?.focus()
  }

  function removeNotification(id: number) {
    setNotifications(notifications.filter((n) => n.id !== id))
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