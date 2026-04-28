import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
  isLoggedIn: boolean
}

const ProtectedRoute = ({ children, isLoggedIn }: ProtectedRouteProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default ProtectedRoute