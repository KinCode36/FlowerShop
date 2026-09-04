import { Navigate, Outlet } from "react-router-dom"
import { getLoggedInUser } from "../utils/localStrage"

const ProtectedRoute = () => {

  const user = getLoggedInUser()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute