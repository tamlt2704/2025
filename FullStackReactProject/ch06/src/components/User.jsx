import { useQuery } from '@tanstack/react-query'
import PropTypes from 'prop-types'
import { getUserInfo } from '../api/users'

export function User({ id }) {
  const userQuery = useQuery({
    queryKey: ['user', { id }],
    queryFn: () => getUserInfo(id),
  })
  const user = userQuery.data ?? {}
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}

User.propTypes = {
  id: PropTypes.number.isRequired,
}
