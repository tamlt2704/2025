import { Post } from '../db/models/post.js'

export async function createPost({ title, content, author, tags }) {
  const post = new Post({
    title,
    content,
    author,
    tags,
  })
  return await post.save()
}

async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await Post.find(query).sort({ [sortBy]: sortOrder })
}

export async function listAllPosts(options) {
  return await listPosts({}, options)
}

export async function listPostsByAuthor(author, options) {
  return await listPosts({ author }, options)
}

export async function listPostsByTag(tags, options) {
  return await listPosts({ tags }, options)
}

export async function getPostById(postId) {
  return await Post.findById(postId)
}

export async function updatePostById(postId, { title, content, author, tags }) {
  return await Post.findByIdAndUpdate(
    { _id: postId },
    { $set: { title, content, author, tags } },
    { new: true },
  )
}

export async function deletePostById(postId) {
  return await Post.deleteOne({ _id: postId })
}
