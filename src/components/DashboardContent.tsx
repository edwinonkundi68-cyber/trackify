import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
  phone: string
}

const DashboardContent=()=> {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError('Failed to load users')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <p>Loading users...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  )
}

export default DashboardContent