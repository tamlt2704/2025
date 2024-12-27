import { writeFileSync } from 'fs'

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
]

writeFileSync('backend/users.json', JSON.stringify(users))
