import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Sample Post',
  content: 'This is a sample post content.',
  author: 'John Doe',
  contents: 'This is a sample post content.',
  tags: ['mongoose', 'mongodb', 'nodejs'],
})
const createdPost = await post.save()
await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Updated Post' },
})

const posts = await Post.find()
console.log(posts)
