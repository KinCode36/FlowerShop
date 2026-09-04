const USERS_KEY = "flowerShopUsers"

export const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY)

  return users ? JSON.parse(users) : []
}

export const saveUser = (user) => {
  const users = getUsers()

  users.push(user)

  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export const findUser = (email, password) => {
  const users = getUsers()

  return users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
  )
}

export const saveLoggedInUser = (user) => {
  localStorage.setItem(
    "loggedInUser",
    JSON.stringify(user)
  )
}

export const getLoggedInUser = () => {
  const user = localStorage.getItem("loggedInUser")

  return user ? JSON.parse(user) : null
}

export const logoutUser = () => {
  localStorage.removeItem("loggedInUser")
}