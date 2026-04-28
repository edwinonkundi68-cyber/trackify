import { useNavigate } from 'react-router-dom'

const users = [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' },
  { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv' },
  { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net' },
  { id: 4, name: 'Patricia Lebsack', email: 'Julianne@kory.org' },
  { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca' },
]

function Users() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <button onClick={() => navigate(`/users/${user.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  )
}

export default Users