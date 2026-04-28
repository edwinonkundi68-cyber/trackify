import { useParams, useNavigate } from 'react-router-dom'

const users = [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031' },
  { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593' },
  { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', phone: '1-463-123-4447' },
  { id: 4, name: 'Patricia Lebsack', email: 'Julianne@kory.org', phone: '493-170-9623' },
  { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', phone: '(254)954-1289' },
]

function UserDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const user = users.find((u) => u.id === Number(id))

  if (!user) return <p>User not found</p>

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>ID: {user.id}</p>
    </div>
  )
}

export default UserDetail