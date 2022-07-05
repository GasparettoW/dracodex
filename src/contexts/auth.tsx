import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Errors, User } from '../common/types'

export const AuthContext = createContext({
  isAuthenticated: false,
  user: '',
  login: (user: User) => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const login = ({ username, password }: User) => {
    const errors = validateUser({
      username,
      password,
    })

    if (Object?.values(errors).length > 0) return errors

    setUser(username)
    navigate('/dragon')
  }
  const logout = () => {
    setUser('')
    navigate('/login')
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function validateUser({ username, password }: User) {
  const errors: Errors = {}
  if (username === 'jose') {
    errors.username = 'Usuário bloqueado por 22 horas'
    return errors
  }
  if (username !== 'admin' || password !== 'admin') {
    errors.password = 'Usuário ou Senha inválidos'
  }
  return errors
}
