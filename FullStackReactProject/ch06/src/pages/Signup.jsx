import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { signup } from '../api/users.js'
import { Link, useNavigate } from 'react-router-dom'

export function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: () =>
      signup({ username: formData.username, password: formData.password }),
    onSuccess: () => navigate('/login'),
    onError: (e) => {
      console.log(e)
      alert('Signup failed')
    },
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    mutation.mutate()
  }

  return (
    <div className='signup-form'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <Link to='/'>Back to home page</Link>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type='submit'
          value={mutation.isPending ? 'Signing up...' : 'Signup'}
          disabled={
            !formData.username || !formData.password || mutation.isPending
          }
        />
      </form>
    </div>
  )
}
