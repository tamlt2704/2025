import { createUser, loginUser } from '../services/users.js'
import { getUserInfoById } from '../services/users.js'

export function userRoutes(app) {
  app.post('/api/v1/user/signup', async (req, res) => {
    console.log('creating user', req.body)
    const { username, password } = req.body
    try {
      const user = await createUser(username, password)
      console.log('user created', user)
      res.status(200).json({ username: user.username })
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
    }
  })

  app.post('/api/v1/user/login', async (req, res) => {
    const { username, password } = req.body
    try {
      const token = await loginUser(username, password)
      res.json({ token })
    } catch (error) {
      res.status(401).json({ error: error.message })
    }
  })

  app.get('/api/v1/user/:id', async (req, res) => {
    const userInfo = await getUserInfoById(req.params.id)
    return res.status(200).send(userInfo)
  })
}
// Compare this snippet from backend/src/services/posts.js:
// import { Post } from '../db/models/post.js'
//
