import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext({
  token: null,
  setToken: () => {},
})

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const { token, setToken } = useContext(AuthContext)
  return [token, setToken]
}

AuthProvider.PropTypes = {
  children: PropTypes.node.isRequired,
}
