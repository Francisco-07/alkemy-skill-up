import axios from 'axios'

// Register user
const register = async (userData) => {
  const res = await axios.post('users', userData)
  return res.data
}

// Login user
const login = async ({ email, password }) => {
  const res = await axios.post('auth/login', { email, password })

  if (res.data) {
    localStorage.setItem('token', JSON.stringify(res.data))
  }

  return res.data
}

// Get loged user

const getLogedUser = async () => {
  // Token
  const token = JSON.parse(localStorage.getItem('token'))

  const config = {
    headers: {
      Authorization: 'Bearer ' + token.accessToken,
    },
  }
  const res = await axios.get('auth/me', config)
  if (res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }
  return res.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  getLogedUser,
}

export default authService
