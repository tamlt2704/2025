import {
  createPost,
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  getPostById,
  updatePostById,
  deletePostById,
} from '../services/posts.js'

import { requireAuth } from '../middleware/jwt.js'

export function postRoutes(app) {
  app.get('/api/v1/posts', async (req, res) => {
    const { sortBy, sortOrder, author, tag } = req.query
    const options = { sortBy, sortOrder }
    try {
      if (author && tag) {
        return res
          .status(400)
          .json({ error: 'Cannot filter by both author and tag' })
      } else if (author) {
        const posts = await listPostsByAuthor(author, options)
        return res.json(posts)
      } else if (tag) {
        const posts = await listPostsByTag(tag, options)
        return res.json(posts)
      } else {
        const posts = await listAllPosts(options)
        return res.json(posts)
      }
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  })

  app.get('/posts/author/:author', async (req, res) => {
    const posts = await listPostsByAuthor(req.params.author)
    res.json(posts)
  })

  app.get('/posts/tag/:tag', async (req, res) => {
    const posts = await listPostsByTag(req.params.tag)
    res.json(posts)
  })

  app.get('/posts/:id', async (req, res) => {
    const post = await getPostById(req.params.id)
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.json(post)
  })

  app.post('/api/v1/posts', requireAuth, async (req, res) => {
    console.log('creating post', req.body)
    const { title, content, tags } = req.body
    try {
      const post = await createPost(req.auth.sub, {
        title,
        content,
        author: req.auth.sub,
        tags,
      })
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })

  app.patch('/api/v1/posts/:id', requireAuth, async (req, res) => {
    const { title, content, author, tags } = req.body

    try {
      const post = await updatePostById(req.auth.sub, req.params.id, {
        title,
        content,
        author,
        tags,
      })
      if (!post) {
        return res.status(404).json({ error: 'Post not found' })
      }
      res.json(post)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })

  app.delete('/api/v1/posts/:id', requireAuth, async (req, res) => {
    try {
      const post = await deletePostById(req.auth.sub, req.params.id)
      if (!post) {
        return res.status(404).json({ error: 'Post not found' })
      }
      res.json(post)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })
}
