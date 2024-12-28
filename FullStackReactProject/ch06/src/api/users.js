export const signup = async ({ username, password }) => {
  console.log('signup user')
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  console.log('signup response', res)
  if (!res.ok) {
    throw new Error('Signup failed')
  }
  return await res.json()
}

export const login = async ({ username, password }) => {
  console.log('login user')
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  console.log('login response', res)
  if (!res.ok) {
    throw new Error('Login failed')
  }
  return await res.json()
}
